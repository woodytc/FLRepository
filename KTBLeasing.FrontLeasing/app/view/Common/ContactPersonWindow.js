﻿/*
 * File: app/view/Window/ContactPersonWindow.js
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

Ext.define('TabUserInformation.view.Common.ContactPersonWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowcontactpersonwindow',

    requires: [
        'TabUserInformation.view.Common.ContactPersonWindowViewModel',
        'TabUserInformation.view.Common.ContactPersonWindowViewController',
        'Ext.form.Panel',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Column',
        'Ext.form.field.ComboBox',
        'Ext.form.field.TextArea',
        'Ext.form.field.Checkbox',
        'Ext.button.Button'
    ],

    controller: 'windowcontactpersonwindow',
    viewModel: {
        type: 'windowcontactpersonwindow'
    },
    width: 1128,
    title: 'Contact Person',

    items: [
        {
            xtype: 'form',
            bodyPadding: 10,
            dockedItems: [
                {
                    xtype: 'panel',
                    dock: 'left',
                    width: 553,
                    items: [
                        {
                            xtype: 'gridpanel',
                            autoScroll: true,
                            height: 400,
                            store: 'contactPersons',
                            dockedItems: [
                                {
                                    xtype: 'pagingtoolbar',
                                    dock: 'bottom',
                                    id: 'pagingtoolbar-contact',
                                    width: 360,
                                    displayInfo: true,
                                    store: 'contactPersons'
                                }
                            ],
                            columns: [
                                {
                                    xtype: 'rownumberer',
                                    text: 'Id'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'TitleTh',
                                    text: 'Title',
                                    flex: -1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'FirstNameTh',
                                    text: 'FirstNameTh',
                                    flex: -1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'LastNameTh',
                                    text: 'LastNameTh',
                                    flex: -1
                                }
                            ],
                            listeners: {
                                selectionchange: 'onGridpanelSelectionChange'
                            },
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'container',
                    layout: 'anchor',
                    items: [
                        {
                            xtype: 'panel',
                            items: [
                                {
                                    xtype: 'hiddenfield',
                                    reference: 'CustomerId',
                                    name: 'CustomerId'
                                },
                                {
                                    xtype: 'textfield',
                                    reference: 'Id',
                                    width: 140,
                                    fieldLabel: '#',
                                    labelAlign: 'right',
                                    readOnly: true,
                                    name: 'Id'
                                },
                                {
                                    xtype: 'container',
                                    margin: '0 0 5 0',
                                    layout: 'hbox',
                                    items: [
                                        {
                                            xtype: 'combobox',
                                            width: 220,
                                            fieldLabel: 'Name Eng',
                                            labelAlign: 'right',
                                            
                                            autoLoadOnValue: true,
                                            displayField: 'Name',
                                            store: 'CommonData.titleNameEns',
                                            valueField: 'Id',
                                            name: 'TitleEng'
                                        },
                                        {
                                            xtype: 'textfield',
                                            name: 'FirstNameEng',
                                            width: 140
                                        },
                                        {
                                            xtype: 'textfield',
                                            name: 'LastNameEng',
                                            width: 140
                                        }
                                    ]
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'PositionEng',
                                    width: 500,
                                    fieldLabel: 'Position Eng',
                                    labelAlign: 'right',
                                    
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            items: [
                                {
                                    xtype: 'container',
                                    margin: '0 0 5 0',
                                    layout: 'hbox',
                                    items: [
                                        {
                                            xtype: 'combobox',
                                            name: 'TitleTh',
                                            width: 220,
                                            fieldLabel: 'Name Thai',
                                            labelAlign: 'right',
                                            
                                            allowBlank: false,
                                            autoLoadOnValue: true,
                                            displayField: 'Name',
                                            store: 'CommonData.titleNameThs',
                                            valueField: 'Id'
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
                                            width: 140,
                                            allowBlank: false
                                        }
                                    ]
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'PositionTh',
                                    width: 500,
                                    fieldLabel: 'Position Thai',
                                    labelAlign: 'right',
                                    
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'Department',
                                    width: 500,
                                    fieldLabel: 'Department',
                                    labelAlign: 'right',
                                    
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'Telephone',
                                    width: 500,
                                    fieldLabel: 'Telephone',
                                    labelAlign: 'right',
                                    
                                    inputType: 'tel'
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'Fax',
                                    width: 500,
                                    fieldLabel: 'Fax',
                                    labelAlign: 'right',
                                    
                                    inputType: 'tel'
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'Email',
                                    width: 500,
                                    fieldLabel: 'Email',
                                    labelAlign: 'right',
                                    
                                    inputType: 'email'
                                }
                            ]
                        },
                        {
                            xtype: 'textareafield',
                            name: 'Remark',
                            height: 80,
                            width: 500,
                            fieldLabel: 'Remark',
                            labelAlign: 'right',
                            
                        },
                        {
                            xtype: 'checkboxfield',
                            fieldLabel: 'Active',
                            labelAlign: 'right',
                            
                            name: 'Active',
                            boxLabel: '',
                            checked: true,
                            inputValue: '1'
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