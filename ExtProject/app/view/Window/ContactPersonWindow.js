/*
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

Ext.define('TabUserInformation.view.Window.ContactPersonWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowcontactpersonwindow',

    requires: [
        'TabUserInformation.view.ContachPersonWindowViewModel',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.column.RowNumberer',
        'Ext.form.FieldSet',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.form.field.TextArea'
    ],

    viewModel: {
        type: 'windowcontactpersonwindow'
    },
    height: 754,
    id: 'contactpersonwindow1',
    width: 1128,
    bodyPadding: 20,
    title: 'Contact Person',

    dockedItems: [
        {
            xtype: 'panel',
            dock: 'left',
            height: 780,
            id: 'contactperson',
            width: 553,
            items: [
                {
                    xtype: 'gridpanel',
                    autoScroll: true,
                    height: 535,
                    id: 'contactperson-grid',
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
                            dataIndex: 'Title',
                            text: 'Title'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'Name Eng',
                            text: 'Name Eng',
                            flex: 1
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    id: 'idcardform',
                    bodyPadding: 20,
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
                                            fieldLabel: 'ID Number'
                                        },
                                        {
                                            xtype: 'combobox',
                                            width: 200,
                                            fieldLabel: 'Type',
                                            labelAlign: 'right',
                                            labelWidth: 50
                                        }
                                    ]
                                },
                                {
                                    xtype: 'datefield',
                                    fieldLabel: 'Expire Date'
                                },
                                {
                                    xtype: 'datefield',
                                    fieldLabel: 'Receive Date'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'toolbar',
            dock: 'bottom',
            ui: 'footer',
            items: [
                {
                    xtype: 'button',
                    text: 'New'
                },
                {
                    xtype: 'button',
                    text: 'Delete'
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'container',
            id: 'contactperson-container',
            items: [
                {
                    xtype: 'panel',
                    items: [
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'textfield',
                                    width: 180,
                                    fieldLabel: '#',
                                    labelWidth: 140
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'combobox',
                                    width: 220,
                                    fieldLabel: 'Name Eng',
                                    labelWidth: 140
                                },
                                {
                                    xtype: 'textfield',
                                    width: 140
                                },
                                {
                                    xtype: 'textfield',
                                    width: 140
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'textfield',
                                    width: 320,
                                    fieldLabel: 'Position Eng',
                                    labelWidth: 140
                                },
                                {
                                    xtype: 'textfield',
                                    width: 180
                                }
                            ]
                        },
                        {
                            xtype: 'textareafield',
                            width: 500,
                            fieldLabel: 'Address Eng',
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
                                    width: 220,
                                    fieldLabel: 'Name Thai',
                                    labelWidth: 140
                                },
                                {
                                    xtype: 'textfield',
                                    width: 140
                                },
                                {
                                    xtype: 'textfield',
                                    width: 140
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'textfield',
                                    width: 320,
                                    fieldLabel: 'Position Thai',
                                    labelWidth: 140
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'positionthaifield',
                                    width: 180
                                }
                            ]
                        },
                        {
                            xtype: 'textareafield',
                            width: 500,
                            fieldLabel: 'Address Thai',
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
                                    width: 250,
                                    fieldLabel: 'Spouse Name Eng',
                                    labelWidth: 140
                                },
                                {
                                    xtype: 'textfield',
                                    width: 250
                                }
                            ]
                        },
                        {
                            xtype: 'textareafield',
                            width: 500,
                            fieldLabel: 'Spouse Address Eng',
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
                                    width: 250,
                                    fieldLabel: 'Spouse Name Thai',
                                    labelWidth: 140
                                },
                                {
                                    xtype: 'textfield',
                                    width: 250
                                }
                            ]
                        },
                        {
                            xtype: 'textareafield',
                            width: 500,
                            fieldLabel: 'Spouse Address Thai',
                            labelWidth: 140
                        }
                    ]
                },
                {
                    xtype: 'textareafield',
                    height: 80,
                    id: 'remark',
                    width: 500,
                    fieldLabel: 'Remark',
                    labelWidth: 140
                }
            ]
        }
    ]

});