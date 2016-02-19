/*
 * File: app/view/Financial/FinancialAmountWindow.js
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

Ext.define('TabUserInformation.view.Financial.FinancialAmountWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.financialfinancialamountwindow',

    requires: [
        'TabUserInformation.view.Financial.FinancialAmountWindowViewModel',
        'TabUserInformation.view.Financial.FinancialAmountWindowViewController',
        'Ext.form.Panel',
        'Ext.form.RadioGroup',
        'Ext.form.field.Radio',
        'Ext.form.field.Number',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Display',
        'Ext.grid.Panel',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.grid.column.Boolean',
        'Ext.view.Table',
        'Ext.toolbar.Paging',
        'Ext.button.Button'
    ],

    controller: 'financialfinancialamountwindow',
    viewModel: {
        type: 'financialfinancialamountwindow'
    },
    id: 'financialamountwindow',
    layout: 'border',
    title: 'ตั้งวงเงิน',
    maximized: true,
    session: true,

    items: [
        {
            xtype: 'hiddenfield',
            itemId: 'MasterPage'
        },
        {
            xtype: 'form',
            region: 'north',
            bodyPadding: 10,
            trackResetOnLoad: true,
            items: [
                {
                    xtype: 'hiddenfield',
                    name: 'save',
                    value: 'N'
                },
                {
                    xtype: 'hiddenfield',
                    name: 'Id',
                    itemId: 'Id'
                },
                {
                    xtype: 'fieldset',
                    padding: 10,
                    defaults: {
                        labelAlign: 'right',
                        allowBlank: false
                    },
                    title: 'สายงาน',
                    layout: {
                        type: 'hbox',
                        align: 'stretch',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'combobox',
                            fieldLabel: 'สายงาน',
                            width: 300,
                            autoLoadOnValue: true,
                            displayField: 'Name',
                            store: 'CommonData.marketingGroups',
                            valueField: 'Id',
                            name: 'MarketingGroup',
                            listeners: {
                                change: 'onComboboxMarketingGroupChange'
                            }
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'สำนักงานภูมิภาค',
                            autoLoadOnValue: true,
                            displayField: 'Name',
                            store: 'CommonData.branchs',
                            valueField: 'Id',
                            name: 'Branch'
                        },
                        {
                            xtype: 'datefield',
                            fieldLabel: 'วันที่อนุมัติ',
                            name: 'ApproveDate',
                            format: 'd/m/Y',
                            altFormats: 'd/m/Y|j/n/Y|j/n/y|m/j/y|n/d/y|m/j/Y|n/d/Y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-d-m|n-j|j/n',
                            maxValue: new Date()
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    padding: 5,
                    layout: 'auto',
                    title: 'ลูกค้า',
                    //width: 900,
                    defaults: {
                        labelWidth: 200,
                        labelAlign: 'right'
                    },
                    items: [
                        {
                            xtype: 'combobox',
                            fieldLabel: 'ประเภทลูกค้า',
                            allowBlank: false,
                            autoLoadOnValue: true,
                            displayField: 'Name',
                            store: 'CommonData.typeCustomers',
                            valueField: 'Id',
                            name: 'CustType',
                            listeners: {
                                change: 'onComboboxCustTypeChange'
                            }
                        },
                        {
                            xtype: 'gridpanel',
                            height: 170,
                            title: '',
                            itemId: 'gridCustomer',
                            //store: 'customers',
                            bind: '{customers}',
                            columns: [
                                {
                                    xtype: 'rownumberer'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    text: 'ชื่อลูกค้า',
                                    dataIndex: 'FullNameTh',
                                    flex: -1
                                },
                                {
                                    xtype: 'numbercolumn',
                                    text: 'วงเงิน',
                                    dataIndex: 'CreditLimit',
                                    editor: {
                                        xtype: 'numberfield'
                                    }
                                },
                                {
                                    xtype: 'gridcolumn',
                                    text: 'เลขบัตรประจำตัวประชาชน/เลขประจำตัวผู้เสียภาษี',
                                    dataIndex: 'TaxNo',
                                    flex: -1
                                },
                                {
                                    xtype: 'booleancolumn',
                                    text: 'จดทะเบียนภาษีมูลค่าเพิ่ม',
                                    dataIndex: 'VAT_Registration',
                                    trueText: 'มี VAT',
                                    falseText: 'ไม่มี VAT'
                                }
                            ],
                            listeners: {
                                itemdblclick: 'onGridpanelCustomerItemDblClick'
                            },
                            dockedItems: [
                                {
                                    xtype: 'toolbar',
                                    dock: 'top',
                                    items: [
                                        {
                                            xtype: 'button',
                                            ui: 'default-small',
                                            glyph: 'xf067@FontAwesome',
                                            itemId: 'custAdd',
                                            text: 'Add',
                                            listeners: {
                                                click: 'onButtonCustomerAddClick'
                                            }
                                        },
                                        {
                                            xtype: 'button',
                                            ui: 'default-small',
                                            glyph: 'xf014@FontAwesome',
                                            text: 'Delete',
                                            listeners: {
                                                click: 'onButtonDeleteClick'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'fieldset',
                            padding: 5,
                            defaults: {
                                labelWidth: 200,
                                labelAlign: 'right'
                            },
                            title: 'วงเงิน',
                            layout: {
                                type: 'table',
                                columns: 2
                            },
                            items: [
                                {
                                    xtype: 'combobox',
                                    fieldLabel: 'ประเภทวงเงิน',
                                    allowBlank: false,
                                    autoLoadOnValue: true,
                                    displayField: 'Name',
                                    store: 'CommonData.limitTypes',
                                    valueField: 'Id',
                                    name: 'TypeCreditLimit'
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: 'วงเงินที่ได้รับอนุมัติในครั้งนี้',
                                    name: 'CreditLimit',
                                    allowBlank: false,
                                    bind: '{CreditLimit}',
                                    mouseWheelEnabled:false,
                                    hideTrigger: true,
                                    width: 300
                                },
                                {
                                    xtype: 'combobox',
                                    fieldLabel: 'กำหนดวงเงินของแต่ละทรัพย์สิน',
                                    allowBlank: false,
                                    autoLoadOnValue: true,
                                    displayField: 'Name',
                                    store: 'CommonData.limits',
                                    valueField: 'Id',
                                    name: 'Limit'
                                },
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'วงเงินที่ได้รับอนุมัติ(ทั้งหมด)',
                                    name: 'Total',
                                    renderer: function (value, displayField) {

                                        return Ext.util.Format.number(value, '0,000.00');
                                    }
                                },
                                {
                                    xtype: 'fieldcontainer',
                                    fieldLabel: 'วันที่เริ่มใช้วงเงิน',
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    defaults: {
                                        labelWidth: 200,
                                        labelAlign: 'right'
                                    },
                                    items: [
                                        {
                                            xtype: 'datefield',
                                            width: 105,
                                            name: 'StartLimitDate',
                                            format: 'd/m/Y',
                                            altFormats: 'd/m/Y|j/n/Y|j/n/y|m/j/y|n/d/y|m/j/Y|n/d/Y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-d-m|n-j|j/n',
                                        },
                                        {
                                            xtype: 'datefield',
                                            width: 120,
                                            fieldLabel: '-',
                                            labelSeparator: ' ',
                                            labelWidth: 15,
                                            name: 'EndLimitDate',
                                            format: 'd/m/Y',
                                            altFormats: 'd/m/Y|j/n/Y|j/n/y|m/j/y|n/d/y|m/j/Y|n/d/Y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-d-m|n-j|j/n',
                                        }
                                    ]
                                },
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'วงเงินคงเหลือที่สามารถเบิกใช้ได้',
                                    name: 'Balance',
                                    renderer: function (value, displayField) {

                                        return Ext.util.Format.number(value, '0,000.00');
                                    },
                                    bind: {
                                        value: '{CreditLimit}'
                                    }
                                },
//                                {
//                                    xtype: 'datefield',
//                                    fieldLabel: 'วันที่เริ่มใช้วงเงิน',
//                                    name: 'StartLimitDate',
//                                    format: 'd/m/Y',
//                                    altFormats: 'd/m/Y|j/n/Y|j/n/y|m/j/y|n/d/y|m/j/Y|n/d/Y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-d-m|n-j|j/n'
//                                },
//                                {
//                                    xtype: 'datefield',
//                                    fieldLabel: 'วันที่สิ้นสุดวงเงิน',
//                                    name: 'EndLimitDate',
//                                    format: 'd/m/Y',
//                                    altFormats: 'd/m/Y|j/n/Y|j/n/y|m/j/y|n/d/y|m/j/Y|n/d/Y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-d-m|n-j|j/n'
//                                },
                                
                                
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            padding: 5,
                            defaults: {
                                labelWidth: 120,
                                labelAlign: 'right'
                            },
                            title: 'สินเชื่อ',
                            layout: {
                                type: 'table',
                                columns: 1
                            },
                            items: [
                                {
                                    xtype: 'combobox',
                                    fieldLabel: 'ประเภทสินเชื่อ',
                                    allowBlank: false,
                                    autoLoadOnValue: true,
                                    displayField: 'Name',
                                    store: 'CommonData.typeLeasings',
                                    valueField: 'Id',
                                    name: 'TypeLeasing',
                                    listeners: {
                                        change: 'onComboboxTypeLeasingChange'
                                    }
                                },
                                {
                                    xtype: 'fieldcontainer',
                                    fieldLabel: 'ผลิตภัณฑ์',
                                    itemId: 'TypeProductHP',
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    defaults: {
                                        labelWidth: 200,
                                        labelAlign: 'right'
                                    },
                                    items: [
                                        {
                                            xtype: 'combobox',
                                            allowBlank: false,
                                            autoLoadOnValue: true,
                                            displayField: 'Name',
                                            valueField: 'Id',
                                            name: 'TypeProductHP',
                                            matchFieldWidth: false,
                                            bind: {
                                                store: '{productHP}'
                                            }
                                        },
                                        {
                                            xtype: 'numberfield',
                                            labelWidth: 60,
                                            fieldLabel: 'วงเงิน',
                                            name: 'LimitHPAmount',
                                            allowBlank: false,
                                            mouseWheelEnabled:false,
                                            hideTrigger: true,
                                            width: 160,
                                            bind: {
                                                value: '{LimitHPAmount}',
                                                maxValue: '{MaxHPLimit}'
                                            }
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldcontainer',
                                    fieldLabel: 'ผลิตภัณฑ์',
                                    itemId: 'TypeProductLease',
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    defaults: {
                                        labelWidth: 200,
                                        labelAlign: 'right'
                                    },
                                    items: [
                                        {
                                            xtype: 'combobox',
                                            allowBlank: false,
                                            autoLoadOnValue: true,
                                            displayField: 'Name',
                                            valueField: 'Id',
                                            name: 'TypeProductLease',
                                            matchFieldWidth: false,
                                            bind: {
                                                store: '{productLease}'
                                            }
                                        },
                                        {
                                            xtype: 'numberfield',
                                            labelWidth: 60,
                                            fieldLabel: 'วงเงิน',
                                            name: 'LimitLeaseAmount',
                                            allowBlank: false,
                                            mouseWheelEnabled:false,
                                            hideTrigger: true,
                                            width: 160,
                                            bind: {
                                                value: '{LimitLeaseAmount}',
                                                maxValue: '{MaxLeaseLimit}'
                                            }
                                        }
                                    ]
                                },
//                                {
//                                    xtype: 'combobox',
//                                    fieldLabel: 'จำนวนประเภททรัพย์สินที่ได้รับอนุมัติ',
//                                    allowBlank: false,
//                                    autoLoadOnValue: true,
//                                    displayField: 'Id',
//                                    store: 'CommonData.assetAmounts',
//                                    valueField: 'Id',
//                                    name: 'AssetAmount'
//                                },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'gridpanel',
            region: 'center',
            reference: 'gridDetail',
            //store: 'creditLimitDetails',
            bind: {
                store: '{creditLimitDetails}'
            },
            title: 'ประเภททรัพย์สินพร้อมรายละเอียดการผ่อนชำระ',
            forceFit: true,
            columns: [
                {
                    xtype: 'rownumberer'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'TypeLeasing',
                    text: 'ประเภทสินเชื่อ',
                    flex: -1,
                    renderer: function (value) {
                        var result;

                        if (value) {
                            result = Ext.getStore('CommonData.typeLeasings').getById(value).get('Name');
                        }

                        return result;
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'AssetType',
                    text: 'ทรัพย์ใหม่ / ทรัพย์ใช้แล้ว',
                    flex: -1,
                    renderer: function (value) {
                        var result;

                        if (value === 'new') {
                            result = 'ทรัพย์ใหม่';
                        } else if (value === 'used') {
                            result = 'ทรัพย์ใช้แล้ว';
                        }

                        return result;
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'MainAsset',
                    text: 'ทรัพย์สินหลัก',
                    flex: -1,
                    renderer: function (value) {
                        var result;

                        if (value) {
                            result = Ext.getStore('CommonData.assets').getById(value).get('Name');
                        }

                        return result;
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'SubAsset',
                    text: 'รายละเอียดทรัพย์สิน',
                    flex: -1,
                    renderer: function (value) {
                        var result;

                        if (value) {
                            result = Ext.getStore('CommonData.assets').getById(value).get('Name');
                        }

                        return result;
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'DetailAsset',
                    text: 'กำหนดรายละเอียดทรัพย์สิน',
                    flex: -1,
                    renderer: function (value) {
                        var result;

                        if (value) {
                            result = Ext.getStore('CommonData.EQPs').getById(value).get('Name');
                        }

                        return result;
                    }
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'Amount',
                    text: 'วงเงิน'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'FlatRate',
                    text: 'Flat Rate'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'EffectiveRate',
                    text: 'เทียบเท่า eff. Rate KTB MLR +/- ………..%'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'Term',
                    text: 'ระยะเวลาการผ่อนชำระ',
                    format: '00'
                }
            ],
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    //store: 'creditLimitDetails',
                    bind: {
                        store: '{creditLimitDetails}'
                    },
                    dock: 'bottom',
                    width: 360,
                    displayInfo: true
                },
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            ui: 'default-small',
                            glyph: 'xf067@FontAwesome',
                            text: 'Add',
                            listeners: {
                                click: 'onButtonAddClick'
                            }
                        },
                        {
                            xtype: 'button',
                            itemId: 'copyButton',
                            glyph: 'xf24d@FontAwesome',
                            ui: 'default-small',
                            text: 'Copy',
                            listeners: {
                                click: 'onButtonCopyClick'
                            }
                        },
                        {
                            xtype: 'button',
                            ui: 'default-small',
                            glyph: 'xf014@FontAwesome',
                            text: 'Delete',
                            listeners: {
                                click: 'onButtonDeleteClick'
                            }
                        }
                    ]
                }
            ],
            listeners: {
                itemdblclick: 'onGridpanelItemDblClick'
            }
        }
    ],
    buttons: [
        {
            xtype: 'button',
            glyph: 'xf0c7@FontAwesome',
            text: 'Save',
            listeners: {
                click: 'onButtonSaveClick'
            }
        }
    ],
    listeners: {
        beforeclose: 'onBeforeClose',
        close: 'onClose'
    }

});