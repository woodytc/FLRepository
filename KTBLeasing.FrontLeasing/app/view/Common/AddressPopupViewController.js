﻿/*
* File: app/view/Popup/AddressPopupViewController.js
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

Ext.define('TabUserInformation.view.Common.AddressPopupViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.popupaddresspopup',

    onUpdate: function (cell, value, record, view) {
        console.log(cell);
        console.log(value);
        console.log(record);
        console.log(view);
    },

    onButtonSaveClick: function (button, e, eOpts) {
        var status = false;

        var form = this.getView().down('form').getForm();

        if (form.isValid()) {
            Ext.MessageBox.confirm('Confirm', 'คุณต้องการที่บันทึกหรือเปลื่ยนแปลงข้อมูล?',
                function (cbtn, bool) {
                    if (cbtn == 'yes') {
                        form.submit({
                            url: 'api/address/dopost',
                            success: function (form, action) {
                                console.log(action);
                                Ext.Msg.alert('Success', "บันทึกข้อมูลเรียบร้อย");
                                Ext.getCmp('pagingtoolbar-address').moveFirst();
                                //button.up('window').destroy();
                                button.up('window').close();
                            },
                            failure: function (form, action) {
                                Ext.Msg.alert('Failed', 'กรุณาตรวจสอบว่า ชื่อผู้ใช้มีอยู่ในระบบ?');
                            }
                        });
                    }

                }
            );

        } else {
            Ext.Msg.alert('Data is not valid!', 'กรุณาเลือกข้อมูลให้ครบถ้วน');
        }
    },

    onButtonCancelClick: function (button, e, eOpts) {
        this.getView().close();
    },

    onTextchange: function (text, oldText, newText, eOpts) {
        var filters = this.getView().getReference('#province').getStore().getFilters();
        console.log(eOpts);
        console.log(newText);
        console.log(text);
        console.log(filters);

        //filters = grid.store.getFilters(),
        //if (text != null) {
        //    store.getProxy().extraParams.text = text;
        //} else {
        //    store.getProxy().extraParams.text = 0;
        //}
        //store.load();

        //filter
        //if (textfield.value) {
        //    this.nameFilter = filters.add({ id: 'nameFilter',
        //        property: property,
        //        value: textfield.value,
        //        anyMatch: true,
        //        caseSensitive: true
        //    });
        //} else if (this.nameFilter) {
        //    filters.remove(this.nameFilter);
        //    this.nameFilter = null;
        //}
    }

});
