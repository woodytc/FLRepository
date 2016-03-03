/*
 * File: app/controller/WindowController.js
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

Ext.define('TabUserInformation.controller.WindowController', {
    extend: 'Ext.app.Controller',

    control: {
        "#windowCtrl": {
            beforeclose: 'onBeforeClose'
        }
    },

    statics: {
        fnSaveBatch: function (session, panel) {
            var batch = session.getSaveBatch();

            if (batch) {
                batch.on({
                    complete: function (batch, operation) {
                        Ext.MessageBox.alert("Result", "Successful.");
                        panel.down('form').getForm().destroy();
                    },
                    exception: function () {
                        Ext.Msg.show({
                            title: 'Error',
                            message: 'Error occurred',
                            buttons: Ext.Msg.OK,
                            icon: Ext.Msg.ERROR
                        });
                    }
                });

                batch.start();
            } else {
                Ext.MessageBox.alert('Result', 'Successful.');
                panel.close();
            }
        },

        fnSaveAssociation: function(panel) {
            var form = panel.down('form').getForm(),
                record = form.getRecord(),
                MasterPage = panel.down('#MasterPage').value;
                
            form.updateRecord(record);

            if (form.isValid()) {
                form.findField('save').setValue('Y');

                var recordA = Ext.getCmp(MasterPage).down('form').getForm().getRecord();

                var CreditLimitDetail = recordA.CreditLimitDetail();
                CreditLimitDetail.add(record);
                console.log(CreditLimitDetail);

                panel.close();
            } else {
                Ext.MessageBox.alert('Warning', 'กรอกข้อมูลไม่ครบถ้วน');
            }

            return recordA;
        },

        fnSaveChildSession: function(panel) {
            var form = panel.down('form').getForm(),
                record = form.getRecord(),
                MasterPage = panel.down('#MasterPage').value;
                
            form.updateRecord(record);

            if (form.isValid()) {
                form.findField('save').setValue('Y');

                var session = Ext.getCmp(MasterPage).getSession(),
                    sessionChild = panel.getSession();

                sessionChild.setParent(session);
                sessionChild.save();

                panel.close();
            } else {
                Ext.MessageBox.alert('Warning', 'กรอกข้อมูลไม่ครบถ้วน');
            }

            return session;
        },

        fnSaveForm: function(panel) {
            var form = panel.down('form').getForm(),
                record = form.getRecord(),
                UserId = sessionStorage.getItem('UserId');

            form.updateRecord();

            if (form.isValid()) {
                form.findField('save').setValue('Y');

                if(record.phantom === true) {
                    record.data.CreateBy = UserId;
                }else{
                    record.data.UpdateBy = UserId;
                }

                panel.close();
            }else {
                Ext.MessageBox.alert('Warning', 'กรอกข้อมูลไม่ครบถ้วน');
            }
        },

        fnSaveStore: function(panel, storeArray) {
            Ext.Array.each(storeArray, function (store, index) {
                if (store.getModifiedRecords().length > 0 || store.getRemovedRecords().length > 0) {
                    store.sync({
                        success: function (response) {
                            if(index === storeArray.length - 1) {
                                Ext.MessageBox.alert("Result", "Successful.");
                                panel.close();
                            }
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
                }
            });
        },

        fnSave: function(panel) {
            var me = this,
                form = panel.down('form').getForm(),
                record = form.getRecord(),
                UserId = sessionStorage.getItem('UserId');

            form.updateRecord(record);
            form.findField('save').setValue('N');

            if(record.phantom === true) {
                record.data.CreateBy = UserId;
                //me.fnSaveAdd(form, record);
            }else{
                record.data.UpdateBy = UserId;
            }

            if (form.isValid()) {
                if (record.store.getModifiedRecords().length > 0) {
                    record.store.sync({
                        success: function (response) {
                            Ext.MessageBox.alert("Result", "Successful.");
                            form.findField('save').setValue('Y');
                            record.store.load();
                            panel.close();
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
                } else {
                    Ext.MessageBox.alert('Warning', 'ไม่พบการเปลี่ยนแปลงข้อมูล');
                }
            } else {
                Ext.MessageBox.alert('Warning', 'กรอกข้อมูลไม่ครบถ้วน');
            }
        },

        fnSaveAdd: function(form, record) {
            var url = form.findField('URL').getValue();

            if (form.isValid()) {
                if (record.store.getModifiedRecords().length > 0) {
                    Ext.Ajax.request({
                        method: 'post',
                        url: url,
                        jsonData: record.data,
                        success: function (response) {
                            Ext.MessageBox.alert("Result", "Successful.");
                            form.findField('save').setValue('Y');
                            form.findField('Id').setValue(response.responseText);
                            record.store.load();
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
                } else {
                    Ext.MessageBox.alert('Warning', 'ไม่พบการเปลี่ยนแปลงข้อมูล');
                }
            } else {
                Ext.MessageBox.alert('Warning', 'กรอกข้อมูลไม่ครบถ้วน');
            }
        }
    },

    onBeforeClose: function(panel, eOpts) {
        var form = panel.down('form').getForm(),
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
                            if(record.phantom)
                            {
                                record.drop();
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
            if(record.phantom)
            {
                record.drop();
            }
            panel.closeMe = true;
            panel.close();
        }

        return false;
    }
});
