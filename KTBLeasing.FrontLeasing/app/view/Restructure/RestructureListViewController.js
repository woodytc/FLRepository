/*
* File: app/view/Restructure/RestructureListViewController.js
*
* This file was generated by Sencha Architect version 3.2.0.
* http://www.sencha.com/products/architect/
*
* This file requires use of the Ext JS 5.0.x library, under independent license.
* License of Sencha Architect does not include license for Ext JS 5.0.x. For more
* details see http://www.sencha.com/license or contact license@sencha.com.
*
* This file will be auto-generated each and everytime you save your project.
*
* Do NOT hand edit this file.
*/

Ext.define('TabUserInformation.view.Restructure.RestructureListViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.restructurerestructurelist',

    onComboboxSelect: function (combo, records, eOpts) {
        var form = Ext.getCmp('head-restructure-form').getForm(),
            grid = this.getView().down('grid'),
            store = Ext.create('TabUserInformation.store.restructures'),
            storeList = grid.getStore(),
            buttonARCard = this.getView().down('button');

        store.getProxy().extraParams.agrcode = combo.value;
        buttonARCard.disable();

        Ext.MessageBox.show({
            msg: 'Loading your data, please wait...',
            progressText: 'Loading...',
            width: 300,
            closable: false,
            progress: true,
            wait: {
                interval: 200
            }
            //animateTarget: combo.up('')
        });

        store.load(function (records, operation, success) {
            if (success) {
                storeList.getProxy().extraParams.agrcode = combo.value;
                storeList.load();
                grid.view.refresh();

                sessionStorage.clear();
                sessionStorage.setItem('dataRestructure', Ext.encode(records[0].data));

                form.findField('Customer').setValue(records[0].get('Customer'));

                buttonARCard.enable();

                Ext.MessageBox.hide();
            } else {
                Ext.MessageBox.hide();
                Ext.MessageBox.alert("Error", "Request Timeout Please try again.");
            }
        });
    },

    onButtonARCardClick: function (button, e, eOpts) {
        var form = Ext.getCmp('head-restructure-form').getForm(),
            grid = this.getView().down('grid'),
            data = Ext.decode(sessionStorage.getItem('dataRestructure')),
            record = Ext.create("model.restructure", data),
            storeList = grid.getStore();

        var SEQ = storeList.data.length + 1;

        form.updateRecord(record);
        //if (data != null) {
        Ext.create('widget.restructurearcard', {
            listeners: {
                beforerender: function (panel, eOpts) {
                    var form = panel.down('form').getForm();

                    form.loadRecord(record);
                    form.findField('NewFirstDueDate').setValue(record.get('RestructureDate'));
                    form.findField('SEQ').setValue(SEQ);
                },
                //afterrender: function (panel, eOpts) {
                //    //Ext.getCmp('arcard-form1').getForm().findField('NewFlatRate').focus();
                //    var field = panel.down('#arcard-form1').getForm().findField('NewFlatRate'); //.focus();

                //    //field.focus();
                //    field.hasFocus = true;
                //    console.log(field);
                //}
            }
        }).show();
        //}
    },

    onViewItemDblClick: function (dataview, record, item, index, e, eOpts) {
        var view = this.getView(),
            grid = view.down('grid'),
            Customer = this.getView().down('form').getForm().findField('Customer').getValue();

        Ext.create('widget.restructurerestructurewindow', {
            listeners: {
                beforerender: function (panel, event) {
                    var form = panel.down('form').getForm(),
                        grid = panel.down('grid');

                    record.set('Customer', Customer);
                    form.loadRecord(record);

                    form.findField('EffectiveRate').setReadOnly(true);

                    panel.down('#calculateButton').disable();
                    panel.down('#saveButton').disable();
                    grid.getPlugin('celledit').disable();
                },
                close: function (panel, eOpts) {
                    view.down('pagingtoolbar').moveFirst();
                }
            }
        }).show();
    },

    onAfterRender: function (component, eOpts) {
        component.down('form').getForm().findField('Agreement').focus();
    },

    onStoreBeforeLoad: function(store, operation, eOpts) {
    }
});
