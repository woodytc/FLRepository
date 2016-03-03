﻿/*
 * File: app/view/Guarantor/GuarantorsWindowViewController.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('TabUserInformation.view.Guarantor.GuarantorsWindowViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.guarantorguarantorswindow',

    onButtonSaveClick: function (button, e, eOpts) {
        var me = this,
            view = me.getView();

        Ext.MessageBox.confirm('Confirm', 'Confirm Save?', function (msg) {
            if (msg === 'yes') {
                TabUserInformation.controller.WindowController.fnSave(view);
            }
        });
    },

    onButtonAddressClick: function (button, e, eOpts) {
        var me = this,
            form = this.getView().down('form').getForm(),
            record = form.getRecord();

        if (form.getRecord().phantom === false) {
            Ext.create('widget.windowaddresswindow', {
                listeners: {
                    afterrender: function (panel, eOpts) {
                        var form = panel.down('form').getForm(),
                            store = panel.getViewModel().getStore('addresses');

                        panel.down('#MasterPage').setValue(me.getView().getId());

                        form.loadRecord(record);

                        store.getProxy().extraParams.text = record.get('GuarantorId');
                        store.load();
                    }
                }
            }).show();
        } else {
            Ext.Msg.show({
                title: 'Warning',
                message: 'กรุณาทำการบันทึกข้อมูลหน้าหลักก่อน',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.WARNING
            });
        }
    }
});