/*
* File: app/view/Window/AddressWindowViewController.js
*
* This file was generated by Sencha Architect version 3.1.0.
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

Ext.define('TabUserInformation.view.Common.AddressWindowViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.windowaddresswindow',

    getGrid: function () {
        return this.getView().getComponent('addressgrid');
    },

    getThisRecord: function () {
        return this.getGrid().getSelectionModel().getSelection()[0];
    },

    checkInsertRecord: function (rec, record) {
        return ((rec.id === record.id));
    },

    onButtonNewClick: function (button, e, eOpts) {
        var popup = Ext.create('widget.popupaddresspopup'),
            form = popup.down('form'),
            record = this.getView().down('form').getRecord();

        form.loadRecord(record);
        popup.show();
    },

    onButtonEditClick: function (button, e, eOpts) {
        if (this.getView().down('gridpanel').getSelection().length > 0) {
            var popup = Ext.create('widget.popupaddresspopup'),
                form = popup.down('form'),
                record = this.getView().down('form').getRecord(),
                recordgrid = this.getView().down('gridpanel').getSelection()[0],
                store = popup.lookupReference('province').getStore();
            
         
            store.getProxy().extraParams.text = record.get('SubdistrictId');
            form.loadRecord(record);
            form.loadRecord(recordgrid);
            popup.show();
        }
    },

    onItemDblClick: function (button, record, item, index, e, eOpts) {
        var popup = Ext.create('widget.popupaddresspopup'),
            form = popup.down('form'),
            recordgrid = this.getView().down('form').getRecord(),
            store = popup.lookupReference('province').getStore();

        store.getProxy().extraParams.text = record.get('SubdistrictId');

        form.loadRecord(record);
        form.loadRecord(recordgrid);
        popup.show();
    },

    onButtonDeleteClick: function (button, e, eOpts) {
        Ext.MessageBox.confirm('Confirm', 'Confirm Delete?', function (btn) {
            var store = this.getGrid().getStore();
            var record = this.getRecord();
            var index = store.indexOf(record);
            if (btn == 'yes') {
                store.removeAt(index, 1);
                store.erase();
            }
        }, this);
    }

});
