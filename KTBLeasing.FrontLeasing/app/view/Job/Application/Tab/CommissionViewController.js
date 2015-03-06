/*
 * File: app/view/Job/Application/Tab/CommissionViewController.js
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

Ext.define('TabUserInformation.view.Job.Application.Tab.CommissionViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.jobapplicationtabcommission',

    onButtonThirdPartyClick: function(button, e, eOpts) {
        var view = this.getView(),
            form = view.getForm();

        var popup = Ext.create('widget.thirdpartythirdpartyinfpopup', {
            listeners: {
                close: function (panel, eOpts) {
                    var record2 = panel.down('gridpanel').getSelection()[0];
                    if(record2){
                        form.findField('PayCompanyName').setValue(record2.get('NameEn'));
                        form.findField('PayPaymentCondition').setValue(record2.get('PaymentCondition'));
                    }
                }
            }
        });
        popup.show();
    },

    onButtonThirdPartyClick2: function(button, e, eOpts) {
        var view = this.getView(),
            form = view.getForm();

        var popup = Ext.create('widget.thirdpartythirdpartyinfpopup', {
            listeners: {
                close: function (panel, eOpts) {
                    var record2 = panel.down('gridpanel').getSelection()[0];
                    if(record2){
                        form.findField('ReceiveCompanyName').setValue(record2.get('NameEn'));
                        form.findField('ReceivePaymentCondition').setValue(record2.get('PaymentCondition'));
                    }
                }
            }
        });
        popup.show();
    }

});
