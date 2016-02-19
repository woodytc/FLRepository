/*
 * File: app/view/Customer/CustomerWindow.js
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

Ext.define('TabUserInformation.view.Customer.CustomerWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.customercustomerwindow',

    requires: [
        'TabUserInformation.view.Customer.CustomerWindowViewModel',
        'TabUserInformation.view.Customer.CustomerWindowViewController',
        'Ext.form.Panel',
        'Ext.form.field.Display',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.form.field.TextArea',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.form.field.Number',
        'Ext.form.RadioGroup',
        'Ext.form.field.Radio'
    ],

    controller: 'customercustomerwindow',
    viewModel: {
        type: 'customercustomerwindow'
    },
    id: 'customerwindow',
    title: 'Customer',
    modal: true,
    session: true,
    itemId: 'windowCtrl',

    items: [
        {
            xtype: 'hiddenfield',
            itemId: 'MasterPage'
        },
        {
            xtype: 'form',
            title: '',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            trackResetOnLoad: true,
            items: [
                {
                    xtype: 'hiddenfield',
                    name: 'save',
                    value: 'N'
                },
                {
                    xtype: 'form',
                    defaults: {
                        labelAlign: 'right',
                        labelWidth: 200,
                        allowBlank: false,
                        msgTarget: 'none'
                    },
                    bodyPadding: 20,
                    title: 'รายละเอียดลูกค้า',
                    layout: {
                        type: 'table',
                        columns: 2
                    },
                    items: [
                        {
                            xtype: 'displayfield',
                            colspan: 2,
                            fieldLabel: 'CIF No',
                            name: 'Id'
                        },
                        {
                            xtype: 'fieldcontainer',
                            colspan: 2,
                            defaults: {
                                margin: '0 5 0 0',
                                allowBlank: false,
                                msgTarget: 'none'
                            },
                            fieldLabel: 'Thai Name',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'combobox',
                                    width: 80,
                                    fieldLabel: '',
                                    name: 'TitleCustNameTh',
                                    autoLoadOnValue: true,
                                    displayField: 'Name',
                                    store: 'CommonData.titleNameThs',
                                    valueField: 'Id',
                                    listeners: {
                                        select: 'onComboboxTitleCustNameThSelect'
                                    }
                                },
                                {
                                    xtype: 'textfield',
                                    width: 150,
                                    name: 'FirstNameTh'
                                },
                                {
                                    xtype: 'textfield',
                                    width: 150,
                                    name: 'LastNameTh'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            colspan: 2,
                            defaults: {
                                margin: '0 5 0 0'
                            },
                            fieldLabel: 'English Name',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'combobox',
                                    width: 80,
                                    fieldLabel: '',
                                    name: 'TitleCustNameEng',
                                    autoLoadOnValue: true,
                                    displayField: 'Name',
                                    store: 'CommonData.titleNameEns',
                                    valueField: 'Id',
                                    listeners: {
                                        select: 'onComboboxTitleCustNameEngSelect'
                                    }
                                },
                                {
                                    xtype: 'textfield',
                                    width: 150,
                                    name: 'FirstNameEng'
                                },
                                {
                                    xtype: 'textfield',
                                    width: 150,
                                    name: 'LastNameEng'
                                }
                            ]
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'ประเภทลูกค้า',
                            name: 'KTBCustType',
                            autoLoadOnValue: true,
                            displayField: 'Name',
                            store: 'CommonData.typeCustomers',
                            valueField: 'Id'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'KTB ISIC',
                            name: 'TsicCode'
                        },
                        {
                            xtype: 'textfield',
                            maskRe: /[0-9.]/,
                            fieldLabel: 'Tax ID',
                            name: 'TaxNo',
                            minLength: 13,
                            maxLength: 13,
                            enforceMaxLength: true,
                            hideTrigger: true
                        },
                        {
                            xtype: 'datefield',
                            fieldLabel: 'วันที่จดทะเบียน / วันเกิด',
                            name: 'BirthDate',
                            format: 'd/m/Y',
                            altFormats: 'd/m/Y|j/n/Y|j/n/y|m/j/y|n/d/y|m/j/Y|n/d/Y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-d-m|n-j|j/n',
                        },
                        {
                            xtype: 'datefield',
                            fieldLabel: 'วันที่ออกบัตร',
                            name: 'IdIssueDate',
                            format: 'd/m/Y',
                            altFormats: 'd/m/Y|j/n/Y|j/n/y|m/j/y|n/d/y|m/j/Y|n/d/Y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-d-m|n-j|j/n',
                        },
                        {
                            xtype: 'datefield',
                            fieldLabel: 'วันที่หมดอายุ',
                            name: 'IdExpireDate',
                            format: 'd/m/Y',
                            altFormats: 'd/m/Y|j/n/Y|j/n/y|m/j/y|n/d/y|m/j/Y|n/d/Y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-d-m|n-j|j/n',
                        },
//                        {
//                            xtype: 'textfield',
//                            fieldLabel: 'สัญชาติ',
//                            name: 'NatureCust'
//                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'สัญชาติ',
                            name: 'NatureCust',
                            autoLoadOnValue: true,
                            displayField: 'Name',
                            store: 'CommonData.natureCusts',
                            valueField: 'Id'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'หน่วยงานที่ดูแล',
                            name: 'OwnerBranch',
                            allowBlank: true
                        },
                        {
                            xtype: 'textareafield',
                            colspan: 2,
                            width: 600,
                            fieldLabel: 'ข้อมูลผู้ติดต่อได้',
                            name: 'Contact'
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'bottom',
                            items: [
                                {
                                    xtype: 'button',
                                    ui: 'default-small',
                                    glyph: 'xf041@FontAwesome',
                                    text: 'Address',
                                    listeners: {
                                        click: 'onButtonAddressClick'
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'form',
                    flex: 1,
                    defaults: {
                        labelAlign: 'right',
                        labelWidth: 200,
                        allowBlank: false,
                        msgTarget: 'none'
                    },
                    bodyPadding: 10,
                    title: 'วงเงิน',
                    layout: {
                        type: 'table',
                        columns: 2
                    },
                    itemId: 'formLimit',
                    items: [
                        {
                            xtype: 'numberfield',
                            colspan: 2,
                            fieldLabel: 'วงเงิน',
                            name: 'CreditLimit',
                            mouseWheelEnabled:false,
                            hideTrigger: true
                        },
                        {
                            xtype: 'radiogroup',
                            width: 400,
                            fieldLabel: 'จะทะเบียนภาษีมูลค่าเพิ่ม',
                            itemId: 'VAT_Registration',
                            items: [
                                {
                                    xtype: 'radiofield',
                                    name: 'VAT_Registration',
                                    boxLabel: 'มี VAT',
                                    inputValue: '1'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 'VAT_Registration',
                                    boxLabel: 'ไม่มี VAT',
                                    inputValue: '0'
                                }
                            ]
                        }
                    ]
                }
            ]
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
    ]
});