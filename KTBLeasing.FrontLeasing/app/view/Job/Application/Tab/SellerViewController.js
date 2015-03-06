/*
 * File: app/view/Job/Application/Tab/SellerViewController.js
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

Ext.define('TabUserInformation.view.Job.Application.Tab.SellerViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.jobapplicationtabseller',

    onButtonAddClick: function(button, e, eOpts) {
        var view = this.getView(),
            form = view.down('form').getForm(),
            store = this.getView().down('gridpanel').getStore();

        var popup = Ext.create('widget.thirdpartythirdpartyinfpopup', {
            listeners: {
                close: function (panel, eOpts) {
                    var record2 = panel.down('gridpanel').getSelection()[0];
                    if(record2){
                        //                         form.loadRecord(record);

                        store.add({
                            SellerName: record2.get('NameEn')
                        });
                    }
                }
            }
        });
        popup.show();
    },

    onButtonEditClick: function(button, e, eOpts) {
        var view = this.getView(),
            form = view.down('form').getForm(),
            record = view.down('gridpanel').getSelection()[0];

        var popup = Ext.create('widget.thirdpartythirdpartyinfpopup', {
            listeners: {
                close: function (panel, eOpts) {
                    var record2 = panel.down('gridpanel').getSelection()[0];
                    if(record2){
                        //                         form.loadRecord(record);
                        record.set('SellerName',record2.get('NameEn'));
                    }
                }
            }
        });
        popup.show();
    },

    onButtonDeleteClick: function(button, e, eOpts) {
        var store = this.getView().down('gridpanel').getStore(),
            record = this.getView().down('gridpanel').getSelection()[0];

        store.remove(record);
    },

    onGridpanelItemDblClick: function(dataview, record, item, index, e, eOpts) {
        var view = this.getView(),
            form = view.down('form').getForm();

        var popup = Ext.create('widget.thirdpartythirdpartyinfpopup', {
            listeners: {
                close: function (panel, eOpts) {
                    var record2 = panel.down('gridpanel').getSelection()[0];
                    if(record2){
                        //                         form.loadRecord(record);
                        record.set('SellerName',record2.get('NameEn'));
                    }
                }
            }
        });
        popup.show();
    },

    onGridpanelSelectionChange: function(model, selected, eOpts) {
        var view = this.getView(),
            form = view.down('form').getForm();

        if(selected[0].phantom === false){
            form.loadRecord(selected[0]);
        }
        else{
            form.reset();
        }
    }

});