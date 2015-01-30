/*
 * File: app/view/Job/Indication/IndicationForEquipmentWindowViewController.js
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

Ext.define('TabUserInformation.view.Job.Indication.IndicationForEquipmentWindowViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.jobindicationindicationforequipmentwindow',

    onButtonContactPersonClick: function(button, e, eOpts) {
        var view = this.getView(),
            form = view.down('form').getForm();

        var popup = Ext.create('widget.commoncontactpersonpopup', {
            listeners: {
                close: function (panel, eOpts) {
                    var record = panel.down('gridpanel').getSelection()[0];
                    if(record){
                        //                         form.loadRecord(record);
                        view.lookupReference('ContactPerson').setValue(record.get('Title'));
                    }
                }
            }
        });
        popup.show();
    },

    onButtonThirdPartyClick: function(button, e, eOpts) {
        var view = this.getView(),
            form = view.down('form').getForm();

        var popup = Ext.create('widget.thirdpartythirdpartyinfpopup', {
            listeners: {
                close: function (panel, eOpts) {
                    var record = panel.down('gridpanel').getSelection()[0];
                    if(record){
                        //                         form.loadRecord(record);
                        view.lookupReference('ThirdPartyId').setValue(record.get('NameThai'));
                    }
                }
            }
        });
        popup.show();
    },

    onButtonThirdPartyContactClick: function(button, e, eOpts) {
        var view = this.getView(),
            form = view.down('form').getForm();

        var popup = Ext.create('widget.commoncontactpersonpopup', {
            listeners: {
                close: function (panel, eOpts) {
                    var record = panel.down('gridpanel').getSelection()[0];
                    if(record){
                        //                         form.loadRecord(record);
                        view.lookupReference('ContactPerson').setValue(record.get('Title'));
                    }
                }
            }
        });
        popup.show();
    },

    onViewItemDblClick: function(dataview, record, item, index, e, eOpts) {
        var popup = Ext.create('widget.jobindicationindicationdetail'),
            form = popup.down('form').getForm();

        // var recordBusiness = Ext.create('TabUserInformation.model.IndicationForEquipment',record.get('Business'));

        form.loadRecord(record);
        // form.loadRecord(recordBusiness);
        // form.setValues(record.get('Business'));
        popup.show();
    },

    onButtonNewLineClick: function(button, e, eOpts) {
        var popup = Ext.create('widget.jobindicationindicationdetail');
        popup.show();
    },

    onButtonEditLineClick: function(button, e, eOpts) {
        var popup = Ext.create('widget.jobindicationindicationdetail'),
            form = popup.down('form').getForm(),
            record = this.getView().down('gridpanel').getSelection()[0];

        // var recordBusiness = Ext.create('TabUserInformation.model.IndicationForEquipment',record.get('Business'));

        if(record){
            form.loadRecord(record);
            // form.loadRecord(recordBusiness);
            // form.setValues(record.get('Business'));
            popup.show();
        }
    },

    onButtonDeleteLineClick: function(button, e, eOpts) {

    }

});
