/*
* File: app/view/VisitCalling/VisitCallingWindowViewController.js
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

Ext.define('TabUserInformation.view.VisitCalling.VisitCallingWindowViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.visitcallingvisitcallingwindow',

    Shows: function (field, status) {
        var chkboxgroup = this.getView().down('checkboxgroup');
        console.log(field);
        if (status) {
            field.show();
        } else {
            if (chkboxgroup.items.items[0].checked === true || chkboxgroup.items.items[1].checked === true ||
               chkboxgroup.items.items[4].checked === true || chkboxgroup.items.items[5].checked === true)
            { }
            else {
                field.hide();
            }
        }
    },

    ShowsDefault: function (field, status) {
        if (status) {
            field.show();
        } else {
            field.hide();
        }
    },

    onButtonCusInfClick: function (button, e, eOpts) {
        var form = this.getView().down('form').getForm(),
        view = this.getView();

        var popup = Ext.createByAlias('widget.customercusinfpopup', {
            listeners: {
                close: function (panel, eOpts) {
                    var record = panel.down('gridpanel').getSelection()[0];
                    if (record) {
                        form.loadRecord(record);
                        form.findField('CustomerId').setValue(record.get('CustomerCode'));
                        form.findField('SubdistrictId').setValue(record.get('SubdistrictId'));
                        form.findField('ContactPersonTitleNameTh').setValue(record.get('ContactTitleTh'));
                        form.findField('ContactPersonFirstNameTh').setValue(record.get('ContactPersonFirstName'));
                        form.findField('ContactPersonLastNameTh').setValue(record.get('ContactPersonLastName'));
                        form.findField('Position').setValue(record.get('PositionTh'));
                    }
                }
            }

        });
        var store = popup.down('gridpanel').getStore();
        store.load();
        popup.show();
    },

    onButtonAddressClick: function (button, e, eOpts) {
        var form = this.getView().down('form').getForm(),
        custid = form.findField('CustomerId').getValue(),
        
        popup = Ext.create('widget.windowaddressviews', {
            listeners: {
                beforeshow: function (panel, eOpts) {
                    Ext.getCmp('addresstoolbar').hide();
                },
                close: function (panel, eOpts) {
                    var record = panel.down('gridpanel').getSelection()[0];
                    if (record) {
                        form.findField('AddressTh').setValue(record.get('AddressTh'));
                        form.findField('SubdistrictId').setValue(record.get('SubdistrictId'));
                    }
                }
            }
        }),
        
        windowStore = popup.down('gridpanel').getStore();

        popup.down('form').getForm().findField('CustomerId').setValue('<b style="color:green;">' + custid + '</b>');
        popup.down('form').getForm().findField('CustomerThaiName').setValue('<b style="color:green;">' + form.findField('NameTh').getValue() + '</b>');
        windowStore.getProxy().extraParams.text = custid;
        windowStore.load();

        popup.show();
    },

    onButtonVisitCallingClick: function (button, e, eOpts) {
        var form = this.getView().down('form').getForm();

        var popup = Ext.createByAlias('widget.visitcallingvisitcallingpopup', {
            listeners: {
                close: function (panel, eOpts) {
                    var record = panel.down('gridpanel').getSelection()[0];
                    if (record) {
                        form.loadRecord(record);
                    }
                }
            }
        });
        popup.show();
    },

    onButtonContactPersonClick: function (button, e, eOpts) {
        
        var form = this.getView().down('form').getForm(),
        view = this.getView(),
        popup = Ext.create('widget.commoncontactpersonpopup', {
            listeners: {
                close: function (panel, eOpts) {
                    var record = panel.down('gridpanel').getSelection()[0];
                    if (record) {
                        //                        form.loadRecord(record);
                        //                        console.log(view.down('#ContactPersonTitleNameTh'));
                        
                        view.down('#ContactPersonTitleNameTh').setValue(record.get('TitleTh'));
                        view.down('#ContactPersonFirstNameTh').setValue(record.get('FirstNameTh'));
                        view.down('#ContactPersonLastNameTh').setValue(record.get('LastNameTh'));
                        view.down('#Telephone').setValue(record.get('Telephone'));
                        view.down('#FaxNo').setValue(record.get('Fax'));
                        view.down('#Email').setValue(record.get('Email'));
                    }
                }
            }
        });

        var store = popup.down('gridpanel').getStore();
        store.getProxy().extraParams.custId = form.findField('CustomerId').getValue();
        store.load();



        popup.show();
    },

    onCheckboxfieldChange: function (field, newValue, oldValue, eOpts) {
        var textBox = Ext.getCmp('detail');
        this.Shows(textBox, newValue);
    },

    onCheckboxfieldChange1: function (field, newValue, oldValue, eOpts) {
        var textBox = Ext.getCmp('detail');
        this.Shows(textBox, newValue);
    },

    onCheckboxfieldChange2: function (field, newValue, oldValue, eOpts) {
        var textBox = Ext.getCmp('type-of-lease-equipment');
        var textBox2 = Ext.getCmp('leasing-company');
        var textBox3 = Ext.getCmp('term-and-condition');
        this.ShowsDefault(textBox, newValue);
        this.ShowsDefault(textBox2, newValue);
        this.ShowsDefault(textBox3, newValue);
    },

    onCheckboxfieldChange5: function (field, newValue, oldValue, eOpts) {
        var textBox = Ext.getCmp('type-of-hp-equipment');
        var textBox2 = Ext.getCmp('hp-company');
        var textBox3 = Ext.getCmp('hp-term-and-condition');
        this.ShowsDefault(textBox, newValue);
        this.ShowsDefault(textBox2, newValue);
        this.ShowsDefault(textBox3, newValue);
    },

    onCheckboxfieldChange3: function (field, newValue, oldValue, eOpts) {
        var textBox = Ext.getCmp('detail');
        this.Shows(textBox, newValue);
    },

    onCheckboxfieldChange4: function (field, newValue, oldValue, eOpts) {
        var textBox = Ext.getCmp('detail');
        this.Shows(textBox, newValue);
    },

    onSaveClick: function (button, e, eOpts) {
        console.log(this.getView().down('form').getForm().getRecord());
    },


    onSetAddressCustomer: function (form, record) {
        form.loadRecord(record);
        form.findField('CustomerId').setValue(record.get('CustomerCode'));
        form.findField('SubdistrictId').setValue(record.get('SubdistrictId'));
    }

});
