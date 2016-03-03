﻿/*
 * File: app/view/Financial/FinancialAmountDetailViewController.js
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

Ext.define('TabUserInformation.view.Financial.FinancialAmountDetailViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.financialfinancialamountdetail',

    onComboboxMainAssetChange: function (field, newValue, oldValue, eOpts) {
        var form = this.getView().down('#formMain').getForm(),
            combo = form.findField('MainAsset'),
            storeSub = form.findField('SubAsset').getStore(),
            storeDetail = form.findField('DetailAsset').getStore(),
            storeMarketable = form.findField('Marketable').getStore();

        storeSub.clearFilter();
        storeSub.filterBy(function (item) {
            if (oldValue) {
                form.findField('SubAsset').setValue(null);
                form.findField('DetailAsset').setValue(null);
                form.findField('Marketable').setValue(null);
            }

            return item.get('Parent_Id') == combo.getValue() & item.get('Id') != item.get('Parent_Id');
        });

        storeDetail.clearFilter();
        storeDetail.filterBy(function (item) {
            return item.get('Parent_Id') == combo.getValue() & item.get('Id') != item.get('Parent_Id') & item.get('Id').toString().length > 2;
        });

        if (combo.getValue() === 1 || combo.getValue() === 5) {
            form.findField('Marketable').enable();
            form.findField('Marketable').allowBlank = false;
        } else {
            form.findField('Marketable').disable();
            form.findField('Marketable').allowBlank = true;
        }
    },

    onComboboxSubAssetChange: function (field, newValue, oldValue, eOpts) {
        var form = this.getView().down('#formMain').getForm(),
            combo = form.findField('SubAsset'),
            store = form.findField('DetailAsset').getStore();

        if (form.findField('MainAsset').getValue() === 9) {
            store.clearFilter();
            store.filterBy(function (item) {
                if (oldValue) {
                    form.findField('DetailAsset').setValue(null);
                    form.findField('Marketable').setValue(null);
                }

                return item.get('Parent_Id') == combo.getValue();
            });
        }
    },

    onStoreSubAssetsFilterChange: function (store, filters, eOpts) {
        var form = this.getView().down('#formMain').getForm();

        if (store.data.length > 0 || form.findField('SubAsset').getValue() > 0) {
            form.findField('SubAsset').enable();
            form.findField('SubAsset').allowBlank = false;
        } else {
            form.findField('SubAsset').disable();
            form.findField('SubAsset').allowBlank = true;
        }
    },

    onStoreDetailAssetsFilterChange: function (store, filters, eOpts) {
        var form = this.getView().down('#formMain').getForm();

        if (store.data.length > 0 || form.findField('DetailAsset').getValue() > 0) {
            form.findField('DetailAsset').enable();
            form.findField('DetailAsset').allowBlank = false;
        } else {
            form.findField('DetailAsset').disable();
            form.findField('DetailAsset').allowBlank = true;
        }
    },

    onComboboxMethodPaymentSelect: function (combo, record, eOpts) {
        var form = this.getView().down('#formMain').getForm();

        if (combo.getValue() === 204) {
            form.findField('ChequeCondition').show();
            form.findField('ChequeCondition').allowBlank = false;
        } else {
            form.findField('ChequeCondition').setValue(null);
            form.findField('ChequeCondition').hide();
            form.findField('ChequeCondition').allowBlank = true;
        }
    },

    onButtonSaveClick: function (button, e, eOpts) {
        var me = this,
            view = me.getView(),
            form = view.down('form').getForm(),
            record = form.getRecord(),
            UserId = sessionStorage.getItem('UserId');

        Ext.MessageBox.confirm('Confirm', 'Confirm Save?', function (msg) {
            if (msg === 'yes') {
                record.phantom = false;

                form.updateRecord(record);

                if (form.isValid()) {
                    form.findField('save').setValue('Y');
                    if(record.phantom === true) {
                        record.data.CreateBy = UserId;
                    }else{
                        record.data.UpdateBy = UserId;
                    }

                    view.close();
                }
            }
        });
    },

    onButtonGuarantorAddClick: function (button, e, eOpts) {
        var me = this,
            store = Ext.getStore('creditLimitGuarantors'),
            formMain = this.getView().down('#formMain').getForm(),
            Id = formMain.findField('Id').getValue(),
            record = Ext.create('model.guarantormodel', {
                CreditLimitId: Id
            });

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

                    if(selected.length > 0) {
                        var record = Ext.create('model.creditlimitcustomer', {
                            CreditLimitDetailId: Id,
                            CustomerId: selected[0].get('CustomerCode'),
                            FirstNameTh: selected[0].get('FirstNameTh'),
                            LastNameTh: selected[0].get('LastNameTh'),
                            TaxNo: selected[0].get('TaxNo')
                        });

                        if(!store.findRecord('CustomerId', record.get('CustomerId'))) {
                            store.add(record);

                            store.sync({
                                success: function (response) {
                                },
                                failure: function (response) {
                                    Ext.Msg.show({
                                        title: 'Error',
                                        message: response.responseText,
                                        buttons: Ext.Msg.OK,
                                        icon: Ext.Msg.ERROR
                                    });
                                }
                            });
                        }else {
                            Ext.Msg.show({
                                title: 'Warning',
                                message: 'มีผู้ค้ำรายนี้อยู่แล้ว',
                                buttons: Ext.Msg.OK,
                                icon: Ext.Msg.WARNING
                            });
                        }
                    }
                }
            }
        }).show();
    },

    onGridpanelGuarantorItemDblClick: function (dataview, record, item, index, e, eOpts) {
        var me = this;

        Ext.create('widget.guarantorguarantorswindow', {
            listeners: {
                afterrender: function (panel, eOpts) {
                    var form = panel.down('form').getForm(),
                        store = Ext.getStore('customers');

                    panel.down('#MasterPage').setValue(me.getView().getId());

                    store.load({
                        scope: this,
                        params: {
                            id: record.get('CustomerId')
                        },
                        callback: function(records, operation, success) {
                            form.loadRecord(records[0]);
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

                            TabUserInformation.controller.WindowController.fnSaveForm(view);

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

    }

});
