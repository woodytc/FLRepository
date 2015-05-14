/*
* File: app/view/Restructure/RestructureWindowViewController.js
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

Ext.define('TabUserInformation.view.Restructure.RestructureWindowViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.restructurerestructurewindow',

    statics: {
        C1: function (NewFlatRate, NewTerm, OS_PR) {
            //            var NewFlatRate = record.get('NewFlatRate'),
            //            NewTerm = record.get('NewTerm'),
            //            OS_PR = record.get('OS_PR');

            var result = ((OS_PR * (NewFlatRate / 100) * (NewTerm / 12)) + OS_PR) / NewTerm;

            return Ext.util.Format.round(result, 2);
        }
    },

    C2: function (record) {
        var dt = Ext.Date.add(record.get('NewFirstDueDate'), Ext.Date.MONTH, 1),
            subsequentDueDay = Ext.String.leftPad(record.get('SubsequentDueDay'), 2, '0'),
            date = subsequentDueDay + Ext.Date.format(dt, '/m/Y'),
            result = Ext.Date.parse(date, 'd/m/Y');

        if (subsequentDueDay != Ext.Date.format(result, 'd')) {
            result = Ext.Date.getLastDateOfMonth(dt, Ext.Date.MONTH, -1);
        }

        return result;
    },

    C2addMonth: function (previousDate, subsequentDueDay) {
        var diff = subsequentDueDay - Ext.Date.format(previousDate, 'd');


        switch (subsequentDueDay) {
            case 31:
                date = Ext.Date.getLastDateOfMonth(Ext.Date.add(previousDate, Ext.Date.MONTH, 1));
                break;
            case 30:
            case 29:
                if (Ext.Date.format(previousDate, 'm') == '02') {
                    date = Ext.Date.add(Ext.Date.add(previousDate, Ext.Date.MONTH, 1), Ext.Date.DAY, diff);
                }
                else {
                    if (Ext.Date.format(previousDate, 'd') != subsequentDueDay) {
                        date = Ext.Date.add(Ext.Date.add(previousDate, Ext.Date.MONTH, 1), Ext.Date.DAY, diff);
                    } else {
                        date = Ext.Date.add(previousDate, Ext.Date.MONTH, 1);
                    }
                }
                break;
            default:
                date = Ext.Date.add(previousDate, Ext.Date.MONTH, 1);
                break;
        }

        return date;
    },

    C3: function (record, InstallNo, OS_PR, EffectiveRate) {
        var RestructureMonth = Ext.Date.format(record.get('RestructureDate'), 'm/Y'),
            NewFirstDueMonth = Ext.Date.format(record.get('NewFirstDueDate'), 'm/Y'),
            monthDiff;

        if (InstallNo == 1 & RestructureMonth == NewFirstDueMonth) {
            monthDiff = 0;
        } else {
            monthDiff = 1;
        }

        var result = OS_PR * (EffectiveRate / 100) * (monthDiff / 12);

        return Ext.util.Format.round(result, 2);
    },

    C4: function (C1, C3) {
        var result = C1 - C3;

        return Ext.util.Format.round(result, 2);
    },

    CalOSPR: function (OS_PR, C4) {
        var result = OS_PR - C4;

        return Ext.util.Format.round(result, 2);
    },

    VAT: function (value) {
        return value * 0.07;
    },

    onNumberfieldChange: function (field, newValue, oldValue, eOpts) {
        var grid = this.getView().down('grid'),
            store = this.getStore('installments');

        store.load();
        grid.view.refresh();
    },

    onCalculate: function (button, e, eOpts) {
        var grid = this.getView().down('grid'),
            form = this.getView().down('form').getForm(),
            store = this.getStore('installments'),
            me = this;

        var data = [];
        store.data.each(function (record, index) {
            data[index] = (index == 0) ? record.get('OS_PR') * -1 : record.get('InstallmentBeforeVAT');
        });

        sessionStorage.setItem('dataInstallment', Ext.encode(data));

        //C5 Calculate EffectiveRate
        Ext.Ajax.request({
            method: 'post',
            url: 'api/installment/PostEffectiveRate',
            //params: obj,
            jsonData: data,
            success: function (response) {
                form.findField('EffectiveRate').setValue(response.responseText);

                store.load();
                grid.view.refresh();
            },
            failure: function (response) {
            }
        });
    },

    onTest: function (button, e, eOpts) {
        this.getView().close();
    },

    onSave1: function (button, e, eOpts) {
        var view = this.getView(),
            form = this.getView().down('form').getForm(),
            store = this.getStore('installments'),
            storeRestructure = Ext.create('store.restructureLists');

        var record = Ext.create('model.restructurelist');

        form.updateRecord(record);

        Ext.MessageBox.confirm('Confirm', 'Confirm Save?',
                function (msg) {
                    if (msg == 'yes') {
                        store.sync({
                            success: function (batch, options) {
                                Ext.Ajax.request({
                                    method: 'post',
                                    url: 'api/Restructure/Post',
                                    //params: obj,
                                    params: record.data,
                                    success: function (response) {
                                        view.close();
                                    },
                                    failure: function (response) {
                                    }
                                });
                            }
                        });
                    }
                }, this);
    },

    onPrint: function (button, e, eOpts) {
        var form = this.getView().down('form').getForm(),
            store = this.getStore('installments'),
            record = Ext.create('model.restructurelist'),
            data = [];

        form.updateRecord(record);

        store.data.each(function (record, index) {
            data[index] = record.data;
        });

        console.log(record.data);

        Ext.Ajax.request({
            method: 'post',
            url: 'Report/SSRSReport',
            jsonData: {
                list: data,
                entity: record.data
            },
            success: function (response) {
                var data = Ext.decode(response.responseText);
                window.open(data.url);
            },
            failure: function (response) {
            }
        });
    },

    onStoreLoad: function (store, records, successful, eOpts) {

        //        console.log('onStoreLoad');
        var form = this.getView().down('form').getForm(),
        //store = this.getView().down('grid').getStore(),
            Agreement = form.findField('Agreement').getValue(),
            EffectiveRate = form.findField('EffectiveRate').getValue(),
            data = Ext.decode(sessionStorage.getItem('dataRestructure')),
            recordRestructures = Ext.create("model.restructure", data),
            dataInstallment = Ext.decode(sessionStorage.getItem('dataInstallment'));

        var NewFlatRate = recordRestructures.get('NewFlatRate'),
            NewTerm = recordRestructures.get('NewTerm');

        var checkNew = form.findField('flag').getValue();

        if (checkNew == 'new') {
            store.removeAll();

            if (store.data.length === 0) {
                for (i = 0; i <= NewTerm; i++) {
                    var record = null,
                            date = new Date();

                    if (i > 0) {
                        if (dataInstallment != null) {
                            var C1 = dataInstallment[i];
                        } else {
                            var C1 = TabUserInformation.view.Restructure.RestructureWindowViewController.C1(NewFlatRate, NewTerm, recordRestructures.get('OS_PR'));
                        }

                        var VAT = this.VAT(C1),
                        C3 = this.C3(recordRestructures, i, store.findRecord('InstallNo', i - 1).get('OS_PR'), EffectiveRate),
                        C4 = this.C4(C1, C3),
                        OS_PR = this.CalOSPR(store.findRecord('InstallNo', i - 1).get('OS_PR'), C4);
                    }

                    switch (i) {
                        case 0:
                            var OS_PR = recordRestructures.get('OS_PR');
                            date = recordRestructures.get('RestructureDate');
                            break;
                        case 1:
                            date = recordRestructures.get('NewFirstDueDate');
                            break;
                        case 2:
                            date = this.C2(recordRestructures);
                            break;
                        default:
                            date = this.C2addMonth(store.findRecord('InstallNo', i - 1).get('InstallmentDate'), recordRestructures.get('SubsequentDueDay'));
                            break;
                    }

                    record = Ext.create('model.installment', {
                        //Id: 0,
                        Agreement: recordRestructures.get('Agreement'),
                        SEQ: form.findField('SEQ').getValue(),
                        InstallNo: i,
                        InstallmentDate: date,
                        InstallmentBeforeVAT: C1,
                        VAT: VAT,
                        Total: C1 + VAT,
                        Principle: C4,
                        Interest: C3,
                        OS_PR: OS_PR
                    });

                    store.add(record);


                    if (i == NewTerm) {
                        var Last = record.get('OS_PR');
                        if (Last != 0.00) {
                            store.removeAll();
                            i = -1;

                            //                            if (Last > 0.00) {
                            //                                EffectiveRate = EffectiveRate - 1;
                            //                            } else 
                            if (Last < 0.00) {
                                EffectiveRate = EffectiveRate + 1;
                            } else {
                                EffectiveRate = EffectiveRate + 0.1;
                            }

                                console.log(EffectiveRate);
                        }
                    }
                }
            }
        }
    },

    onStoreBeforeLoad: function (store, operation, eOpts) {
        var form = this.getView().down('form').getForm(),
            checkNew = form.findField('flag').getValue();

        if (checkNew != 'new') {
            store.getProxy().extraParams.Agreement = form.findField('Agreement').getValue();
            store.getProxy().extraParams.SEQ = form.findField('SEQ').getValue();
            //form.findField('flag').setValue('none');
        }
    }
});
