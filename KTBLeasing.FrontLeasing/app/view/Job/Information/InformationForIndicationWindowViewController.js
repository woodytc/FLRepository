/*
 * File: app/view/Job/Information/InformationForIndicationWindowViewController.js
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

Ext.define('TabUserInformation.view.Job.Information.InformationForIndicationWindowViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.jobinformationinformationforindicationwindow',

    onButtonLeadClick: function(button, e, eOpts) {
        var form = this.getView().down('form').getForm();

        var popup = Ext.createByAlias('widget.visitcallingvisitcallingpopup', {
            listeners: {
                close: function (panel, eOpts) {
                    var record = panel.down('gridpanel').getSelection()[0];
                    if(record){
                        form.loadRecord(record);
                    }
                }
            }
        });

        popup.show();
    },

    onButtonCusInfClick: function(button, e, eOpts) {
        var form = this.getView().down('form').getForm();

        var popup = Ext.createByAlias('widget.customercusinfpopup', {
            listeners: {
                close: function (panel, eOpts) {
                    var record = panel.down('gridpanel').getSelection()[0];
                    if(record){
                        form.loadRecord(record);
                    }
                }
            }
        });
        popup.show();
    },

    onButtonAddressClick: function(button, e, eOpts) {
        var form = this.getView().down('form').getForm();

        var popup = Ext.create('widget.commonaddresswindow',{
            listeners: {
                beforeshow: function (panel, eOpts) {
                    Ext.getCmp('addresstoolbar').hide();
                },
                close: function (panel, eOpts) {
                    var record = panel.down('gridpanel').getSelection()[0];

                    if(record){
                        form.loadRecord(record);
                    }
                }
            }
        });
    },

    onFieldsetBeforeRender: function(component, eOpts) {
        // component.down('#Business').setValue(0);
    },

    onCheckboxfieldChange: function(field, newValue, oldValue, eOpts) {
        var textfield = this.getView().lookupReference('eqpyear');
        console.log(newValue);
        if(newValue){
            textfield.enable();
        }else{
            textfield.disable();
        }
    },

    onCheckboxfieldChange1: function(field, newValue, oldValue, eOpts) {
        var textfield = this.getView().lookupReference('programname');
        if(newValue){
            textfield.enable();
        }else{
            textfield.disable();
        }
    }

});
