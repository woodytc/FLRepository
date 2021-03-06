﻿/*
 * File: app/view/Window/CusInfWindow.js
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

Ext.define('TabUserInformation.view.Customer.CusInfWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowcusinfwindow',

    requires: [
        'TabUserInformation.view.Customer.CusInfWindowViewModel',
        'TabUserInformation.view.Customer.CusInfWindowViewController',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.button.Button',
        'Ext.toolbar.Toolbar',
        'Ext.button.Segmented',
        'Ext.form.field.Date',
        'Ext.form.field.Number',
        'Ext.form.FieldSet',
        'Ext.grid.Panel',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.grid.column.Boolean',
        'Ext.grid.View',
        'Ext.form.field.File',
        'Ext.form.RadioGroup',
        'Ext.form.field.Radio'
    ],

    controller: 'windowcusinfwindow',
    viewModel: {
        type: 'windowcusinfwindow'
    },
    autoShow: true,
    //id: 'cusinfwindow',
    //width: 995,
    //layout: 'anchor',
    //title: 'Customer Information',
    //titleCollapse: false,
    //modal: true,
    autoShow: true,
    id: 'cusinfwindow',
    //maxHeight: 900,
    //minWidth: 800,
    width: '100%',
    layout: 'anchor',
    hideCollapseTool: true,
    title: 'Customer Information',
    titleCollapse: false,
    maximized: true,
    modal: true,
    items: [
        {
            xtype: 'form',
            reference: 'cusinfform',
            width: '100%',
            height: 900,
            //autoScroll: true,
            items: [
                {
                    xtype: 'form',
                    width: '100%',
                    animCollapse: false,
                    bodyPadding: 20,
                    //collapsible: true,
                    title: 'Information',
                    //titleCollapse: false,
                    maximized: true,
                    margin:'0 0 2 0',
                    layout: {
                        type: 'table',
                        columns: 3
                        
                    },
                    defaults: { labelWidth: 150, labelAlign: 'right' },
                    items: [
                        {
                            xtype: 'textfield',
                            formBind: false,
                            fieldLabel: 'Customer Code',
                            labelWidth: 150,
                            width: 400,
                            name: 'CustomerId'
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'combobox',
                                    margin: '0 0 0 5',
                                    //width: 200,
                                    fieldLabel: 'Type of Customer',
                                    labelWidth: 110,
                                    //width: 400,
                                    name: 'TypeCustomer',
                                    displayField: 'Name',
                                    store: 'CommonData.typeCustomers',
                                    valueField: 'Id',
                                    autoLoadOnValue: true
                                },
                                {
                                    xtype: 'button',
                                    flex: 1,
                                    margin: '0 0 0 5',
                                    text: 'History'
                                }
                            ]
                        },
                        {
                            xtype: 'combobox',
                            margin: '0 0 0 5',
                            width: 400,
                            fieldLabel: 'Industry Code',
                            name: 'IndustryCode',
                            displayField: 'Name',
                            store: 'CommonData.industryCodes',
                            valueField: 'Id',
                            autoLoadOnValue: true
                        },
                        {
                            xtype: 'container',
                            colspan: 2,
                            layout: 'hbox',
                            width: 800,
                            items: [
                                {
                                    xtype: 'combobox',
                                    width: 400,
                                    fieldLabel: 'Customer Eng Name',
                                    labelWidth: 150,
                                    name: 'CustomerEngType',
                                    displayField: 'Name',
                                    store: 'CommonData.custEngType',
                                    valueField: 'Id',
                                    autoLoadOnValue: true
                                },
                                {
                                    xtype: 'textfield',
                                    width: 375,
                                    name: 'CustomerEngName',
                                    margin: '0 0 0 5'
                                    //regex: /^[a-zA-Zก-๙เ]{1,}$/

                                }
                            ]
                        },
                        {
                            xtype: 'combobox',
                            margin: '0 0 0 5',
                            fieldLabel: 'Nationality',
                            width: 400,
                            name: 'NatureCust',
                            displayField: 'Name',
                            store: 'CommonData.natureCusts',
                            valueField: 'Id',
                            autoLoadOnValue: true
                        },
                        {
                            xtype: 'container',
                            colspan: 2,
                            margin: '5 0 5 0',
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'combobox',
                                    width: 400,
                                    fieldLabel: 'Customer Thai Name',
                                    labelWidth: 150,
                                    name: 'CustomerThaiType',
                                    displayField: 'Name',
                                    store: 'CommonData.custThaiType',
                                    valueField: 'Id',
                                    autoLoadOnValue: true
                                },
                                {
                                    xtype: 'textfield',
                                    width: 375,
                                    margin: '0 0 0 5',
                                    name: 'CustomerThaiName'
                                }
                            ]
                        },
                        {
                            xtype: 'combobox',
                            margin: '0 0 0 5',
                            width: 400,
                            fieldLabel: 'Group of Customer',
                            name: 'GroupCust',
                            displayField: 'Name',
                            store: 'CommonData.groupCusts',
                            valueField: 'Id',
                            autoLoadOnValue: true
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Parent Company',
                            width: 400,
                            labelWidth: 150,
                            name: 'ParentCompany',
                            displayField: 'Name',
                            store: 'CommonData.parentCompanies',
                            valueField: 'Id',
                            autoLoadOnValue: true
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 -10 0 0',
                            width: 375,
                            fieldLabel: 'Telephone',
                            labelWidth: 100,
                            name: 'Telephone',
                            emptyText: 'xxx-xxx-xxxx',
                            //maskRe: /[\d\-]/,
                            //regex: /^\[0-9]d{10}$/,
                            hideTrigger: true,
                            regexText: 'Must be in the format xxx-xxx-xxxx'
                        },
                        {
                            xtype: 'combobox',
                            margin: '0 0 0 5',
                            width: 400,
                            fieldLabel: 'Type of Customer',
                            name: 'TypeCust',
                            displayField: 'Name',
                            store: 'CommonData.typeofcust',
                            valueField: 'Id',
                            autoLoadOnValue: true
                        },
                        {
                            xtype: 'numberfield',
                            //margin: '0 0 0 5',
                            width: 400,
                            fieldLabel: 'Fax',
                            name: 'Fax',
                            hideTrigger: true
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Email',
                            margin: '0 -10 0 0',
                            labelWidth: 100,
                            width: 375,
                            name: 'Email',
                            vtype: 'email'
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 0 0 5',
                            width: 400,
                            fieldLabel: 'Tax No',
                            name: 'TaxNo',
                            
                        },
                        {
                            xtype: 'numberfield',
                            //margin: '0 5 0 5',
                            fieldLabel: 'VAT %',
                            width: 400,
                            name: 'VAT',
                            minValue: 0,
                            maxValue: 100,
                            emptyText: '0-100%'
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'KTB Isic Code',
                            //labelWidth: 150,
                            width: 375,
                            labelWidth: 100,
                            name: 'KTBIsicCode',
                            displayField: 'Name',
                            store: 'CommonData.KTBIsics',
                            valueField: 'Id',
                            autoLoadOnValue: true
                        },
                        {
                            xtype: 'combobox',
                            margin: '0 0 0 5',
                            width: 400,
                            fieldLabel: 'KTB Customer Type',
                            name: 'KTBCustType',
                            displayField: 'Name',
                            store: 'CommonData.KTBCustTypes',
                            valueField: 'Id',
                            autoLoadOnValue: true
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'bottom',
                            items: [
                                {
                                    xtype: 'container',
                                    items: [
                                        {
                                            xtype: 'segmentedbutton',
                                            items: [
                                                {
                                                    text: 'Address',
                                                    listeners: {
                                                        click: 'onButtonAddressClick'
                                                    }
                                                },
                                                {
                                                    text: 'Signer',
                                                    listeners: {
                                                        click: 'onButtonSignClick'
                                                    }
                                                },
                                                {
                                                    text: 'Contact Person',
                                                    listeners: {
                                                        click: 'onButtonContactPersonClick'
                                                    }
                                                }
//                                                ,
//                                                {
//                                                    text: 'Affidavit',
//                                                    listeners: {
//                                                        click: 'onButtonAffidavitClick'
//                                                    }
//                                                },
//                                                {
//                                                    text: 'Power of Attorney',
//                                                    listeners: {
//                                                        click: 'onButtonPowerOfAttorneyClick'
//                                                    }
//                                                },
//                                                {
//                                                    text: 'Company Seal'
//                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'form',
                    collapsible: true,
                    collapsed: true,
                    title: 'Background',
                    margin: '0 0 2 0',
                    items: [
                        {
                            xtype: 'panel',
                            width: 925,
                            bodyPadding: 20,
                            layout: {
                                type: 'table',
                                columns: 3
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    colspan: 3,
                                    margin: '0 0 5 0',
                                    layout: 'hbox',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            width: 600,
                                            fieldLabel: 'Business',
                                            name:'Business',
                                            labelWidth: 150
                                        },
                                        {
                                            xtype: 'button',
                                            margin: '0 5 0 5',
                                            text: 'Shareholder\'s'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'datefield',
                                    fieldLabel: 'Establishment',
                                    name: 'Establishment',
                                    labelWidth: 150
                                    
                                },
                                {
                                    xtype: 'fieldcontainer',
                                    width: 400,
                                    layout: 'hbox',
                                    items: [
                                        {
                                            xtype: 'numberfield',
                                            flex: 1,
                                            margin: '0 0 0 5',
                                            width: 180,
                                            name:'StockPR',
                                            fieldLabel: 'Stock PR'
                                        },
                                        {
                                            xtype: 'datefield',
                                            flex: 1,
                                            margin: '0 0 0 5',
                                            name:'AsOf',
                                            fieldLabel: 'As Of'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    colspan: 2,
                                    layout: 'hbox'
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: 'Register Capital',
                                    name:'RegisterCapital',
                                    labelWidth: 150
                                },
                                {
                                    xtype: 'textfield',
                                    colspan: 2,
                                    width: 550,
                                    name:'temp',
                                    fieldLabel: ''
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: 'Sales',
                                    name:'Sales',
                                    labelWidth: 150
                                },
                                {
                                    xtype: 'container',
                                    colspan: 2,
                                    layout: 'hbox',
                                    items: [
                                        {
                                            xtype: 'datefield',
                                            margin: '0 0 0 5',
                                            width: 180,
                                            fieldLabel: 'As Of',
                                            name:'AsOf1',
                                            labelWidth: 50
                                        },
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            name:'temp2',
                                            margin: '0 0 0 5'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: 'Profit (Loss)',
                                    name:'Profit',
                                    labelWidth: 150
                                },
                                {
                                    xtype: 'container',
                                    colspan: 2,
                                    layout: 'hbox',
                                    items: [
                                        {
                                            xtype: 'datefield',
                                            margin: '0 0 0 5',
                                            width: 180,
                                            fieldLabel: 'As Of',
                                            name:'AsOf2',
                                            labelWidth: 50
                                        },
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            name: 'temp3',
                                            margin: '0 0 0 5'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: 'Shareholder\'s Equity',
                                    name: 'Shareholder',
                                    labelWidth: 150
                                },
                                {
                                    xtype: 'container',
                                    colspan: 2,
                                    layout: 'hbox',
                                    items: [
                                        {
                                            xtype: 'datefield',
                                            margin: '0 0 0 5',
                                            width: 180,
                                            name:'AsOf3',
                                            fieldLabel: 'As Of',
                                            labelWidth: 50
                                        },
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            name:'temp4',
                                            margin: '0 0 0 5'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: 'Outstanding Amount',
                                    name: 'OutstandingAmount',
                                    labelWidth: 150
                                },
                                {
                                    xtype: 'datefield',
                                    colspan: 2,
                                    margin: '0 0 0 5',
                                    width: 180,
                                    fieldLabel: 'As Of',
                                    name:'AsOf5',
                                    labelWidth: 50
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: 'Exposure Limit',
                                    labelWidth: 150,
                                    name: 'ExposureLimit'
                                },
                                {
                                    xtype: 'container',
                                    colspan: 2,
                                    rtl: false,
                                    layout: 'hbox',
                                    items: [
                                        {
                                            xtype: 'datefield',
                                            flex: 1,
                                            margin: '0 0 0 5',
                                            width: 180,
                                            fieldLabel: 'As Of',
                                            name:'AsOf6',
                                            labelWidth: 50
                                        },
                                        {
                                            xtype: 'combobox',
                                            flex: 1,
                                            margin: '0 0 0 5',
                                            name:'temp6'
                                        },
                                        {
                                            xtype: 'button',
                                            flex: 1,
                                            margin: '0 0 0 5',
                                            text: 'Background History',
                                            name: 'BackgroundHistory'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: 'Total Asset',
                                    labelWidth: 150,
                                    name:'TotalAsset'

                                },
                                {
                                    xtype: 'container',
                                    colspan: 2,
                                    rtl: false,
                                    layout: 'hbox',
                                    items: [
                                        {
                                            xtype: 'numberfield',
                                            flex: 1,
                                            margin: '0 0 0 5',
                                            maxWidth: 200,
                                            fieldLabel: 'Equity Ratio (%)',
                                            name:'EquityRatio'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            flex: 1,
                                            margin: '0 0 0 5',
                                            maxWidth: 200,
                                            fieldLabel: 'OPE Period (mths)',
                                            labelWidth: 120,
                                            name: 'OPEPeriod'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    //width: 925,
                    widht: '100%',
                    title: 'Marketing Officer',
                    collapsible: true,
                    collapsed: true,
                    margin: '0 0 2 0',
                    layout: {
                        type: 'table',
                        columns: 2
                    },
                    items: [
                        {
                            xtype: 'panel',
                            width: 575,
                            bodyPadding: 20,
                            items: [
                                {
                                    xtype: 'container',
                                    margin: '0 0 5 0',
                                    layout: 'hbox',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'Marketing Officer',
                                            name: 'MarketingOfficer',
                                            labelWidth: 150
                                        },
                                        {
                                            xtype: 'button',
                                            margin: '0 0 0 5',
                                            iconCls: 'x-form-search-trigger'
                                        },
                                        {
                                            xtype: 'button',
                                            margin: '0 0 0 5',
                                            text: 'History'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Warning',
                                    name:'Warning',
                                    labelWidth: 150
                                },
                                {
                                    xtype: 'combobox',
                                    width: 250,
                                    fieldLabel: 'Status',
                                    name:'Status',
                                    labelWidth: 150
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Inactive reason',
                                    name:'Warning',
                                    labelWidth: 150,
                                    hidden:true
                                },
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            height: 144,
                            margin: '0 0 0 10',
                            width: 315,
                            anchorSize: 50,
                            layout: 'auto',
                            title: 'Due Day',
                            items: [
                                {
                                    xtype: 'gridpanel',
                                    height: '100%',
                                    width: '100%',
                                    columns: [
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'string',
                                            text: 'String'
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            dataIndex: 'number',
                                            text: 'Number'
                                        },
                                        {
                                            xtype: 'datecolumn',
                                            dataIndex: 'date',
                                            text: 'Date'
                                        },
                                        {
                                            xtype: 'booleancolumn',
                                            dataIndex: 'bool',
                                            text: 'Boolean'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    //xtype: 'fieldset',
                    xtype: 'panel',
                    margin: '0 0 2 0',
                    //width: 890,
                    width: '100%',
                    layout: 'auto',
                    title: 'Upload File',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {
                            xtype: 'container',
                            reference: 'upload',
                            layout: 'anchor',
                            defaults: { margin:'5 5 5 5', labelAlign: 'right' },
                            items: [
                                {
                                    xtype: 'filefield',
                                    //id: 'file1',
                                    width: 500,
                                    fieldLabel: 'Credit Analysis Report',
                                    labelWidth: 150,
                                    name: 'files',
                                    buttonText: 'เลือกไฟล์'
                                },
                                {
                                    xtype: 'filefield',
                                    id: 'file2',
                                    width: 500,
                                    fieldLabel: 'Other reports',
                                    labelWidth: 150,
                                    name: 'files',
                                    buttonText: 'เลือกไฟล์'
                                },
                                {
                                    xtype: 'filefield',
                                    id: 'file3',
                                    width: 500,
                                    fieldLabel: 'Business online',
                                    labelWidth: 150,
                                    name: 'files',
                                    buttonText: 'เลือกไฟล์'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'upload',
                                    //margin: '0 0 0 5',
                                    text: 'Upload',
                                    listeners: {
                                        click: 'onUploadClick'
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'radiogroup',
                            hidden: true,
                            fieldLabel: 'Label',
                            hideLabel: true,
                            layout: {
                                type: 'checkboxgroup',
                                autoFlex: false
                            },
                            items: [
                                {
                                    xtype: 'radiofield',
                                    name: 'rdoupload',
                                    boxLabel: 'Credit analysis report',
                                    inputValue: 'credit'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 'rdoupload',
                                    boxLabel: 'Other reports',
                                    inputValue: 'other'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 'rdoupload',
                                    boxLabel: 'Business online',
                                    inputValue: 'business'
                                }
                            ],
                            listeners: {
                                change: 'onRadiogroupChange'
                            }
                        },
                        {
                            xtype: 'toolbar',
                            hidden: true,
                            items: [
                                {
                                    xtype: 'segmentedbutton',
                                    items: [
                                        {
                                            ui: 'default-small',
                                            text: 'Credit Analysis Report'
                                        },
                                        {
                                            ui: 'default-small',
                                            text: 'Others Report'
                                        },
                                        {
                                            ui: 'default-small',
                                            text: 'Business Online'
                                        },
                                        {
                                            hidden: true,
                                            ui: 'default-small',
                                            text: 'Method of Payment'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            ui: 'footer',
            width: 925,
            items: [
                {
                    xtype: 'button',
                    text: 'Save',
                    listeners: {
                        click: 'onButtonNewClick1'
                    }
                },
                {
                    xtype: 'button',
                    reference: 'btnreset',
                    text: 'Reset',
                    listeners: {
                        click: 'onButtonResetClick'
                    }
                }
            ]
        }
    ]

});