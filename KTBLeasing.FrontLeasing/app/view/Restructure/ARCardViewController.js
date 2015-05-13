/*
 * File: app/view/Restructure/ARCardViewController.js
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

Ext.define('TabUserInformation.view.Restructure.ARCardViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.restructurearcard',

    onCalculateInstallment: function (button, e, eOpts) {
        var view = this.getView(),
            form = this.getView().down('form').getForm(),
            SEQ = form.findField('SEQ').getValue();

        if (form.isValid()) {
            var headform = Ext.getCmp('head-restructure-form').getForm(),
                values = form.getValues(),
                record = Ext.create('model.restructure', values);

            form.updateRecord(record);

            var Installment = TabUserInformation.view.Restructure.RestructureWindowViewController.C1(record.get('NewFlatRate'), record.get('NewTerm'), record.get('OS_PR'));
            var objArray = [];

            for (i = 0; i <= record.get('NewTerm'); i++) {
                if (i == 0) {
                    objArray[i] = record.get('OS_PR') * -1;
                }
                else {
                    objArray[i] = Installment;
                }
            }

            //C5 Calculate EffectiveRate
            Ext.Ajax.request({
                method: 'post',
                url: 'api/installment/PostEffectiveRate',
                //params: obj,
                jsonData: objArray,
                success: function (response) {
                    record.set('EffectiveRate', response.responseText);

                    var popup = Ext.create('widget.restructurerestructurewindow', {
                        listeners: {
                            beforerender: function (panel, eOpts) {
                                panel.down('form').getForm().loadRecord(record);
                                panel.down('form').getForm().findField('SEQ').setValue(SEQ);
                                sessionStorage.setItem('dataRestructure', Ext.encode(record.data));
                            },
                            close: function (panel, eOpts) {
                                Ext.getCmp('restructurerestructurelist').down('pagingtoolbar').moveFirst();
                            }
                        }
                    });

                    popup.show();

                    view.close();
                },
                failure: function (response) {
                }
            });

        } else {

        }
    },

    onCancel: function (button, e, eOpts) {
        var form = this.getView().down('form').getForm();
        form.reset();
    }

});