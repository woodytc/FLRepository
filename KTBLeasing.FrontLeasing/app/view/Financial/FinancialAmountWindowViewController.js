﻿/*
 * File: app/view/Financial/FinancialAmountWindowViewController.js
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

Ext.define('TabUserInformation.view.Financial.FinancialAmountWindowViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.financialfinancialamountwindow',

    onComboboxCustTypeChange: function (field, newValue, oldValue, eOpts) {
        var button = this.getView().down('#custAdd'),
            store = this.getView().down('#gridCustomer').getStore();

        if (newValue) {
            if (field.valueModels[0].get('Name') === 'บุคคล' && store.getCount() > 1) {
                button.disable();
            } else {
                button.enable();
            }
        }
    },

    onComboboxMarketingGroupChange: function (field, newValue, oldValue, eOpts) {
        var form = this.getView().down('form').getForm(),
            store = form.findField('Branch').getStore();

        if (newValue) {
            if (field.valueModels[0].get('Code') !== 'NA') {
                store.clearFilter();
                store.filterBy(function (item) {
                    if (oldValue) {
                        form.findField('Branch').setValue(null);
                    }

                    return item.get('Code') == field.valueModels[0].get('Code');
                });
            } else {
                store.clearFilter();
            }
        }
    },

    onComboboxTypeLeasingChange: function (field, newValue, oldValue, eOpts) {
        var form = this.getView().down('form').getForm(),
            combo = form.findField('TypeLeasing'),
            fieldHP = form.findField('TypeProductHP'),
            fieldLease = form.findField('TypeProductLease');

        if (newValue > 0) {
            if (combo.valueModels[0].get('Code') === 'HP') {
                this.getView().down('#TypeProductHP').show();
                this.getView().down('#TypeProductLease').hide();
                fieldHP.allowBlank = false;
                fieldLease.allowBlank = true;

                if (oldValue) {
                    fieldLease.setValue(null);
                }
            } else if (combo.valueModels[0].get('Code') === 'LEASING') {
                this.getView().down('#TypeProductHP').hide();
                this.getView().down('#TypeProductLease').show();
                fieldHP.allowBlank = false;
                fieldLease.allowBlank = true;

                if (oldValue) {
                    fieldHP.setValue(null);
                }
            } else if (combo.valueModels[0].get('Code') === 'ALL') {
                this.getView().down('#TypeProductHP').show();
                this.getView().down('#TypeProductLease').show();
                fieldHP.allowBlank = false;
                fieldLease.allowBlank = false;
            } 
        } 
        else 
        {
            this.getView().down('#TypeProductHP').hide();
            this.getView().down('#TypeProductLease').hide();
            fieldHP.allowBlank = true;
            fieldLease.allowBlank = true;

            if (oldValue) {
                fieldHP.setValue(null);
                fieldLease.setValue(null);
            }
        }
    },
    
    fnSetControl: function (panel, formMain) {
        var form = this.getView().down('form').getForm();

        if (form.findField('Limit').valueModels[0].get('Code') === 'true') {
            formMain.findField('Amount').show();
            formMain.findField('Amount').allowBlank = false;
        } else {
            formMain.findField('Amount').hide();
            formMain.findField('Amount').allowBlank = true;
        }

        if (form.findField('TypeLeasing').valueModels[0].get('Code') !== 'HP') {
            panel.down('#ScrapValue').show();
            formMain.findField('ScrapValue').allowBlank = false;
            formMain.findField('ScrapPercent').allowBlank = false;
        } else {
            panel.down('#ScrapValue').hide();
            formMain.findField('ScrapValue').allowBlank = true;
            formMain.findField('ScrapPercent').allowBlank = true;
        }

        formMain.findField('ChequeCondition').hide();
    },

    fnDetailPopup: function (store, record) {
        var me = this;
            form = this.getView().down('form').getForm(),
            Id = form.findField('Id').getValue();

        Ext.create('widget.financialfinancialamountdetail', {
            listeners: {
                afterrender: function (panel, eOpts) {
                    var formMain = panel.down('#formMain').getForm(),
                        records = Ext.create('model.creditlimitdetail', {
                            Total: record.get('Total'),
                            LimitHPAmount: form.findField('LimitHPAmount').getValue(),
                            LimitLeaseAmount: form.findField('LimitLeaseAmount').getValue(),
                            TypeLeasing: record.get('TypeLeasing'),
                            CreditLimitDetail: {
                                Id: Id
                            }
                        });

                    panel.down('#MasterPage').setValue(me.getView().getId());

                    //records = store.findRecord('Id', 1).copy(null);

                    records.save({
                        callback: function (record, operation) {
                            record.setId(operation.getResponse().responseText);
                            record.phantom = true;

                            store.add(record);
                            formMain.loadRecord(record);
                            
                            me.fnSetControl(panel, formMain);

                            var storeGua = Ext.getStore('guarantorModels');
                            storeGua.removeAll(true);
                        }
                    });
                }
            }
        }).show();
    },

    onButtonAddClick: function (button, e, eOpts) {
        var me = this,
            form = this.getView().down('form').getForm(),
            record = form.getRecord(),
            store = this.getView().lookupReference('gridDetail').getStore();

        if (form.isValid()) {
            if (form.findField('TypeLeasing').valueModels[0].get('Code') === 'ALL') {
                Ext.Msg.show({
                    title: 'เลือกประเภทสินเชื่อ',
                    msg: 'Hire Purchase หรือ Leasing',
                    buttons: Ext.MessageBox.YESNOCANCEL,
                    buttonText: { yes: 'Hire Purchase', no: 'Leasing', cancel: 'Cancel' },
                    width: 350,
                    icon: Ext.MessageBox.INFO,
                    fn: function (btn) {
                        if (btn === 'yes') {
                            record.data.TypeLeasing = form.findField('TypeLeasing').getStore().findRecord('Code', 'HP').get('Id');
                            me.fnDetailPopup(store, record);
                        } else if (btn === 'no') {
                            record.data.TypeLeasing = form.findField('TypeLeasing').getStore().findRecord('Code', 'LEASING').get('Id');
                            me.fnDetailPopup(store, record);
                        }
                    }
                });
            } else {
                me.fnDetailPopup(store, record);
            }
        } else {
            Ext.Msg.show({
                title: 'Warning',
                message: 'กรุณาทำการกรอกข้อมูลในหน้าหลักให้ครบถ้วน',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.WARNING
            });
        }
    },

    onGridpanelItemDblClick: function (dataview, record, item, index, e, eOpts) {
        var me = this,
            form = me.getView().down('form').getForm();

        Ext.create('widget.financialfinancialamountdetail', {
            listeners: {
                afterrender: function (panel, eOpts) {
                    var formMain = panel.down('#formMain').getForm(),
                        storeGua = panel.getViewModel().getStore('guarantorModels'),
                        session = me.getSession();

                    panel.down('#MasterPage').setValue(me.getView().getId());

                    formMain.loadRecord(record);

                    me.fnSetControl(panel, formMain);

                    storeGua.load({
                        params: {
                            cl_id: record.get('Id')
                        },
                        callback: function(records, operation, success) {
                            var data = [];
                            
                            Ext.Object.each(session.data, function(key, value, myself) {
                                if(key === 'TabUserInformation.model.CreditLimitDetail') {
                                    Ext.Object.each(value, function(key, value, myself) {
                                        if(key === record.get('Id').toString()) {
                                            Ext.Object.each(value.refs, function(key, value, myself) {
                                                var index = 0;

                                                Ext.Object.each(value, function(key, value, myself) {
                                                    data[index] = session.getRecord('TabUserInformation.model.GuarantorModel', key);
                                                    index++;
                                                });
                                                    
                                                storeGua.session = false;
                                                storeGua.loadRecords(data, {
                                                    addRecords: true
                                                });
                                                storeGua.session = true;
                                            });
                                        }
                                    });
                                };
                            });
                        }
                    });
                }
            }
        }).show();
    },

    onButtonDeleteClick: function (button, e, eOpts) {
        var grid = button.up('grid'),
            store = grid.getStore(),
            selected = grid.getSelection();

        if (selected.length > 0) {
            Ext.MessageBox.confirm({
                title: 'Delete?',
                message: 'คุณต้องการลบรายการนี้ใช่หรือไม่?',
                buttons: Ext.Msg.YESNO,
                icon: Ext.Msg.QUESTION,
                fn: function (btn) {
                    if (btn === 'yes') {
                        selected[0].set('Active', false);
                        store.remove(selected[0]);

                        store.sync({
                            success: function (response, opertation) {
                                Ext.Msg.alert('Success!', 'Delete Success');
                                store.load();
                            },
                            failure: function (response, opertation) {
                                Ext.Msg.show({
                                    title: 'Error',
                                    message: 'Failure!',
                                    buttons: Ext.Msg.OK,
                                    icon: Ext.Msg.ERROR
                                });
                            }
                        });
                    }
                }
            });
        } else {
            Ext.Msg.show({
                title: 'Warning',
                message: 'กรุณาทำการเลือกรายการที่ต้องการลบ',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.WARNING
            });
        }
    },

    onButtonCustomerAddClick: function (button, e, eOpts) {
        var me = this,
            formMain = me.getView().down('form').getForm(),
            store = this.getView().down('grid').getStore(),
            Id = this.getView().down('#Id').getValue(),
            record = Ext.create('model.customer', {
                CreditLimitId: Id
            });

        Ext.Msg.show({
            title: 'Select Customer',
            msg: 'Create New Customer or Old Customer',
            buttons: Ext.MessageBox.YESNOCANCEL,
            buttonText: { yes: 'New Customer', no: 'Old Customer', cancel: 'Cancel' },
            width: 350,
            icon: Ext.MessageBox.INFO,
            fn: function (btn) {
                if (btn === 'yes') {

                    if (formMain.findField('CustType').getValue() > 0) {
                        if (formMain.findField('CustType').valueModels[0].get('Name') === 'นิติบุคคล' && formMain.findField('CreditLimit').getValue() <= 0) {
                            Ext.Msg.show({
                                title: 'Warning',
                                message: 'กรุณากรอกวงเงินที่ได้รับอนุมัติก่อน',
                                buttons: Ext.Msg.OK,
                                icon: Ext.Msg.WARNING
                            });
                        } else {
                            Ext.create('widget.customercustomerwindow', {
                                listeners: {
                                    beforerender: function (panel, eOpts) {
                                        var form = panel.down('form').getForm();

                                        panel.down('#MasterPage').setValue(me.getView().getId());
                                        
                                        //record = store.findRecord('Id', 1).copy(null);

                                        store.add(record);
                                        form.loadRecord(record);

                                        if (formMain.findField('CustType').valueModels[0].get('Name') === 'นิติบุคคล') {
                                            panel.down('#formLimit').show();
                                            form.findField('CreditLimit').setMaxValue(formMain.findField('Balance').getValue());
                                            form.findField('CreditLimit').allowBlank = false;
                                            panel.down('#VAT_Registration').allowBlank = false;
                                        } else {
                                            form.findField('CreditLimit').allowBlank = true;
                                            panel.down('#VAT_Registration').allowBlank = true;
                                            panel.down('#formLimit').hide();
                                        }
                                    }
                                }
                            }).show();
                        }
                    } else {
                        Ext.Msg.show({
                            title: 'Warning',
                            message: 'กรุณาเลือกข้อมูลประเภทลูกค้าก่อน',
                            buttons: Ext.Msg.OK,
                            icon: Ext.Msg.WARNING
                        });
                    }
                } else if (btn === 'no') {
                    Ext.create('widget.popupcusinfpopup', {
                        listeners: {
                            afterrender: function (panel, eOpts) {
                                var store = panel.down('grid').getStore();

                                //store.getProxy().extraParams.cl_id = {};
                                store.load();
                            },
                            beforeclose: function (panel, e0pst) {
                                var grid = panel.down('grid'),
                                        selected = grid.getSelection();

                                store.add(selected[0]);
                            }
                        }
                    }).show();
                }
            }
        });
    },

    onGridpanelCustomerItemDblClick: function (dataview, record, item, index, e, eOpts) {
        var me = this,
            formMain = me.getView().down('form').getForm();

        Ext.create('widget.customercustomerwindow', {
            listeners: {
                afterrender: function (panel, eOpts) {
                    var form = panel.down('form').getForm();

                    panel.down('#MasterPage').setValue(me.getView().getId());

                    record.set('CustomerId', record.get('Id'));
                    form.loadRecord(record);

                    if (formMain.findField('CustType').valueModels[0].get('Name') === 'นิติบุคคล') {
                        panel.down('#formLimit').show();
                        form.findField('CreditLimit').setMaxValue(formMain.findField('Balance').getValue());
                    } else {
                        panel.down('#formLimit').hide();
                    }
                }
            }
        }).show();
    },

    onButtonSaveClick: function (button, e, eOpts) {
        var me = this,
            view = me.getView(),
            form = view.down('form').getForm(),
            record = form.getRecord(),
            session;

        Ext.MessageBox.confirm('Confirm', 'Confirm Save?', function (msg) {
            if (msg === 'yes') {
                record.phantom = false;
                form.findField('save').setValue('Y');

                session = TabUserInformation.controller.WindowController.fnSaveChildSession(view);

//                if(Ext.getCmp('financialamounttab')){
//                    var sessionA = Ext.getCmp('financialamounttab').getSession();
//                TabUserInformation.controller.WindowController.fnSaveBatch(sessionA, Ext.getCmp('financialamounttab'));


//                }

//                if(Ext.getCmp('financialamountwindow')){
//                    var sessionB = Ext.getCmp('financialamountwindow').getSession();
//                TabUserInformation.controller.WindowController.fnSaveBatch(sessionB, Ext.getCmp('financialamountwindow'));

//                }

//                if(Ext.getCmp('financialamountdetail')){
//                    var sessionC = Ext.getCmp('financialamountdetail').getSession();
//                TabUserInformation.controller.WindowController.fnSaveBatch(sessionC, Ext.getCmp('financialamountdetail'));

//                }

//                    view.close();
            }
        });
    },

    onButtonCopyClick: function (button, e, eOpts) {
        var me = this,
            grid = me.getView().lookupReference('gridDetail'),
            store = grid.getStore(),
            Id = this.getView().down('#Id').getValue(),
            record = grid.getSelection()[0];

        if (record) {
            Ext.MessageBox.confirm('Copy', 'คุณต้องการทำการ Copy ข้อมูล?', function (msg) {
                if (msg === 'yes') {
                    Ext.create('widget.financialfinancialamountdetail', {
                        listeners: {
                            afterrender: function (panel, eOpts) {
                                var formMain = panel.down('#formMain').getForm();

                                record = record.copy(null);

                                record.save({
                                    callback: function (record, operation) {
                                        record.setId(operation.getResponse().responseText);
                                        record.phantom = true;

                                        store.add(record);

                                        formMain.loadRecord(record);

                                        me.fnSetControl(panel, formMain);
                                    }
                                });
                            }
                        }
                    }).show();
                }
            });
        } else {
            Ext.Msg.show({
                title: 'Warning',
                message: 'กรุณาเลือกข้อมูลที่ต้องการ Copy',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.WARNING
            });
        }
    },

    onBeforeClose: function(panel, eOpts) {
        var me = this,
            view = me.getView(),
            form = panel.down('form').getForm(),
            record = form.getRecord();

        if (panel.closeMe) {
            panel.closeMe = false;
            return true;
        }
        
        if(form.isDirty()) {
            if (form.findField('save').getValue() === 'N') {
                Ext.Msg.show({
                    title: 'Save',
                    message: 'Save Changes?',
                    buttons: Ext.Msg.YESNOCANCEL,
                    icon: Ext.Msg.QUESTION,
                    width: 300,
                    fn: function (btn) {
                        if (btn === 'yes') {
                            Ext.MessageBox.show({
                                title: 'Please wait',
                                msg: 'Saving items...',
                                progressText: 'Saving...',
                                width: 300,
                                progress: true,
                                closable: false,
                            });

                            record.phantom = false;

                            var session = TabUserInformation.controller.WindowController.fnSaveChildSession(view);
                            
                            TabUserInformation.controller.WindowController.fnSaveBatch(session, view);

                        } else if (btn === 'no') {
                            if(record.phantom) // phantom true = not exist server-side
                            {
                                record.phantom = false;
                                record.set('Active', false);
                                record.drop();
                                record.save();
                            }
                            panel.closeMe = true;
                            panel.close();
                        }
                    }
                });
            }else {
                panel.closeMe = true;
                panel.close();
            }
        } else {
            if(record.phantom) // phantom true = not exist server-side
            {
                record.phantom = false;
                record.set('Active', false);
                record.drop();
                record.save();
            }
            panel.closeMe = true;
            panel.close();
        }

        return false;
    },

    onClose: function(panel, eOpts) {
        //var store = Ext.getCmp(this.getView().down('#MasterPage').getValue()).getViewModel().getStore('creditApprovals');
        //store.rejectChanges();
        //store.load();

        //store.commitChanges();
    }
});
