﻿/*
 * File: app/view/Window/SignerWindow.js
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

Ext.define('TabUserInformation.view.Common.SignerWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowsignerwindow',

    requires: [
        'TabUserInformation.view.Common.SignerWindowViewModel',
        'TabUserInformation.view.Common.SignerWindowViewController',
        'Ext.form.Panel',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.column.RowNumberer',
        'Ext.form.FieldSet',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.form.field.TextArea',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button'
    ],

    controller: 'windowsignerwindow',
    viewModel: {
        type: 'windowsignerwindow'
    },
    autoShow: true,
    width: 1130,
    manageHeight: false,
    title: 'Signer',
    modal: true,

    items: [
        {
            xtype: 'form',
            bodyPadding: 10,
            titleCollapse: false,
            dockedItems: [
                {
                    xtype: 'panel',
                    dock: 'left',
                    width: 553,
                    manageHeight: false,
                    items: [
                        {
                            xtype: 'gridpanel',
                            autoScroll: true,
                            height: 450,
                            store: 'signers',
                            columns: [
                                {
                                    xtype: 'rownumberer',
                                    width: 53,
                                    dataIndex: 'No',
                                    text: 'No'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'TitleTh',
                                    text: 'Title'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'FirstNameTh',
                                    text: 'ชื่อ',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'LastNameTh',
                                    text: 'นามสกุล',
                                    flex: 1
                                }
                            ],
                            listeners: {
                                selectionchange: 'onGridpanelSelectionChange'
                            },
                            dockedItems: [
                            {
                                xtype: 'pagingtoolbar',
                                id: 'pagingtoolbar-signer',
                                dock: 'bottom',
                                ui: 'footer',
//                                width: 360,
                                displayInfo: true,
                                store: 'signers'
                            }
                        ]
                        },
                        {
                            xtype: 'panel',
                            bodyPadding: 10,
                            items: [
                                {
                                    xtype: 'fieldset',
                                    width: 525,
                                    title: 'ID Card',
                                    items: [
                                        {
                                            xtype: 'container',
                                            height: 30,
                                            layout: 'hbox',
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    width: 300,
                                                    name: 'IdCardNo',
                                                    fieldLabel: 'ID Number',
                                                    inputType: 'number',
                                                    allowBlank: false
                                                },
                                                {
                                                    xtype: 'combobox',
                                                    width: 200,
                                                    fieldLabel: 'Type',
                                                    labelAlign: 'right',
                                                    labelWidth: 50,
                                                    name: 'PassportType',
                                                    autoLoadOnValue: true,
                                                    allowBlank: false,
                                                    store: 'CommonData.cardTypes',
                                                    displayField: 'Name',
                                                    valueField: 'Id'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'datefield',
                                            name: 'ExpireDate',
                                            fieldLabel: 'Expire Date',
                                            allowBlank: false
                                        },
                                        {
                                            xtype: 'datefield',
                                            name: 'IssuedDate',
                                            fieldLabel: 'Receive Date',
                                            allowBlank: false
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'form',
                    items: [
                        {
                            xtype: 'hiddenfield',
                            name: 'CustomerId',
                            reference: 'CustomerId'
                        },
                        {
                            xtype: 'textfield',
                            reference: 'Id',
                            width: 180,
                            fieldLabel: '#',
                            labelAlign: 'right',
                            labelWidth: 140,
                            name: 'Id',
                            readOnly: true
                        },
                        {
                            xtype: 'container',
                            margin: '0 0 5 0 ',
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'combobox',
                                    width: 220,
                                    fieldLabel: 'Name Eng',
                                    labelAlign: 'right',
                                    labelWidth: 140,
                                    store: 'CommonData.titleNameEns',
                                    displayField: 'Name',
                                    valueField: 'Id',
                                    name: 'TitleEng',
                                    autoLoadOnValue: true
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'FirstNameEng',
                                    labelAlign: 'right',
                                    width: 140
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'LastNameEng',
                                    labelAlign: 'right',
                                    width: 140
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            margin: '0 0 5 0 ',
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'textfield',
                                    width: 500,
                                    fieldLabel: 'Position Eng',
                                    name: 'PositionEng',
                                    labelAlign: 'right',
                                    labelWidth: 140
                                }
                            ]
                        },
                        {
                            xtype: 'textareafield',
                            width: 500,
                            fieldLabel: 'Address Eng',
                            name: 'AddressEng',
                            labelAlign: 'right',
                            labelWidth: 140
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    items: [
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'combobox',
                                    margin: '0 0 5 0 ',
                                    width: 220,
                                    fieldLabel: 'Name Thai',
                                    labelAlign: 'right',
                                    labelWidth: 140,
                                    store: 'CommonData.titleNameThs',
                                    displayField: 'Name',
                                    valueField: 'Id',
                                    name: 'TitleTh',
                                    autoLoadOnValue: true,
                                    allowBlank: false
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'FirstNameTh',
                                    width: 140,
                                    allowBlank: false
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'LastNameTh',
                                    labelAlign: 'right',
                                    width: 140,
                                    allowBlank: false
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'textfield',
                                    margin: '0 0 5 0 ',
                                    width: 500,
                                    fieldLabel: 'Position Thai',
                                    name: 'PositionTh',
                                    labelAlign: 'right',
                                    labelWidth: 140
                                }
                            ]
                        },
                        {
                            xtype: 'textareafield',
                            width: 500,
                            fieldLabel: 'Address Thai',
                            name: 'AddressTh',
                            labelAlign: 'right',
                            labelWidth: 140,
                            allowBlank: false
                        },
                        {
                            xtype: 'combobox',
                            reference: 'province',
                            colspan: 2,
                            width: 500,
                            fieldLabel: 'Sub District',
                            labelAlign: 'right',
                            labelWidth: 140,
                            name: 'SubDistrictId',
                            allowBlank: false,
                            autoLoadOnValue: true,
                            tpl: [
                                '<ul class="x-list-plain">',
                                    '<tpl for=".">',
                                        '<li class="x-boundlist-item">',
                                            '{ProvinceName} {DistrictName} {SubdistrictName} {Zipcode}',
                                        '</li>',
                                    '</tpl>',
                                '</ul>'
                            ],
                            displayTpl: [
                                    '<tpl for=".">',
                                            '{ProvinceName} {DistrictName} {SubdistrictName} {Zipcode}',
                                    '</tpl>',
                            ],
                            minChars: 3,
                            store: 'CommonData.provinces',
                            valueField: 'SubdistrictId',
                            queryMode: 'local',
                            doQuery: function (queryString, forceAll) {
                                if(queryString.length>2){
                                    this.expand();
                                    this.store.clearFilter(!forceAll);
                                    if (!forceAll) {

                                        var filters = [
                                             new Ext.util.Filter({
                                                 filterFn: function (item) {
                                                     //allmatch
                                                     //return item.get('ProvinceName') == queryString || item.get('DistrictName') == queryString || item.get('SubdistrictName') == queryString || item.get('Zipcode') == queryString;
                                                     //anymatch
                                                        return  new RegExp(queryString, "i").test(item.get('ProvinceName')) || new RegExp(queryString, "i").test(item.get('DistrictName')) || new RegExp(queryString, "i").test(item.get('SubdistrictName')) || new RegExp(queryString, "i").test(item.get('Zipcode'));
                                                 }
                                             })
                                        ];
                                        this.store.filter(filters);
                                    }  
                                }
                                
                            }
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    items: [
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'combobox',
                                    margin: '0 0 5 0 ',
                                    width: 220,
                                    fieldLabel: 'Spouse Name Eng',
                                    labelAlign: 'right',
                                    labelWidth: 140,
                                    store: 'CommonData.titleNameEns',
                                    displayField: 'Name',
                                    valueField: 'Id',
                                    name: 'SpouseTitleEng',
                                    autoLoadOnValue: true
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'SpouseFirstNameEng',
                                    labelAlign: 'right',
                                    width: 140
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'SpouseLastNameEng',
                                    labelAlign: 'right',
                                    width: 140
                                }
                            ]
                        },
                        {
                            xtype: 'textareafield',
                            margin: '0 0 5 0 ',
                            width: 500,
                            fieldLabel: 'Spouse Address Eng',
                            name: 'SpouseAddressEng',
                            labelWidth: 140,
                            labelAlign: 'right',
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    items: [
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'combobox',
                                    margin: '0 0 5 0 ',
                                    width: 220,
                                    fieldLabel: 'Spouse Name Thai',
                                    labelWidth: 140,
                                    labelAlign: 'right',
                                    store: 'CommonData.titleNameThs',
                                    displayField: 'Name',
                                    valueField: 'Id',
                                    name: 'SpouseTitleTh',
                                    autoLoadOnValue: true
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'SpouseFirstNameTh',
                                    labelAlign: 'right',
                                    width: 140
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'SpouseLastNameTh',
                                    labelAlign: 'right',
                                    width: 140
                                }
                            ]
                        },
                        {
                            xtype: 'textareafield',
                            width: 500,
                            fieldLabel: 'Spouse Address Thai',
                            name: 'SpouseAddressTh',
                            labelAlign: 'right',
                            labelWidth: 140
                        },
                        {
                            xtype: 'combobox',
                            reference: 'sp_province',
                            colspan: 2,
                            width: 500,
                            fieldLabel: 'Sub District',
                            labelAlign: 'right',
                            labelWidth: 140,
                            name: 'SpouseSubDistrictId',
                            autoLoadOnValue: true,
                            tpl: [
                                '<ul class="x-list-plain">',
                                    '<tpl for=".">',
                                        '<li class="x-boundlist-item">',
                                            '{ProvinceName} {DistrictName} {SubdistrictName} {Zipcode}',
                                        '</li>',
                                    '</tpl>',
                                '</ul>'
                            ],
                            displayTpl: [
                                    '<tpl for=".">',
                                            '{ProvinceName} {DistrictName} {SubdistrictName} {Zipcode}',
                                    '</tpl>',
                            ],
                            minChars: 3,
                            //queryParam: 'text',
                            store: 'CommonData.provinces',
                            valueField: 'SubdistrictId',
                            queryMode: 'local',
                            doQuery: function (queryString, forceAll) {
                                if(queryString.length>2){
                                    this.expand();
                                    this.store.clearFilter(!forceAll);
                                    if (!forceAll) {

                                        var filters = [
                                             new Ext.util.Filter({
                                                 filterFn: function (item) {
                                                     //allmatch
                                                     //return item.get('ProvinceName') == queryString || item.get('DistrictName') == queryString || item.get('SubdistrictName') == queryString || item.get('Zipcode') == queryString;
                                                     //anymatch
                                                        return  new RegExp(queryString, "i").test(item.get('ProvinceName')) || new RegExp(queryString, "i").test(item.get('DistrictName')) || new RegExp(queryString, "i").test(item.get('SubdistrictName')) || new RegExp(queryString, "i").test(item.get('Zipcode'));
                                                 }
                                             })
                                        ];
                                        this.store.filter(filters);
                                    }  
                                }
                                
                            }
                        }
                    ]
                },
                {
                    xtype: 'textareafield',
                    height: 80,
                    width: 500,
                    fieldLabel: 'Remark',
                    name: 'Remark',
                    labelAlign: 'right',
                    labelWidth: 140
                },
                {
                    xtype: 'checkboxfield',
                    fieldLabel: 'Active',
                    name: 'Active',
                    labelAlign: 'right',
                    checked: true,
                    inputValue: 1,
                    labelWidth: 140
                }
            ]
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            ui: 'footer',
            items: [
                {
                    xtype: 'button',
                    text: 'New',
                    listeners: {
                        click: 'onButtonNewClick'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Save',
                    listeners: {
                        click: 'onButtonSaveClick'
                    }
                }
            ]
        }
    ]

});