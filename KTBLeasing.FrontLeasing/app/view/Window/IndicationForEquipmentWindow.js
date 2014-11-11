/*
 * File: app/view/Window/IndicationForEquipmentWindow.js
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

Ext.define('TabUserInformation.view.Window.IndicationForEquipmentWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowindicationforequipmentwindow',

    requires: [
        'TabUserInformation.view.Window.IndicationForEquipmentWindowViewModel',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Checkbox',
        'Ext.button.Button',
        'Ext.form.FieldSet',
        'Ext.grid.Panel',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.grid.column.Boolean',
        'Ext.grid.View',
        'Ext.toolbar.Paging',
        'Ext.button.Segmented'
    ],

    viewModel: {
        type: 'windowindicationforequipmentwindow'
    },
    autoScroll: true,
    title: 'Indication for Equipment',
    maximized: true,
    modal: true,

    items: [
        {
            xtype: 'form',
            bodyPadding: 10,
            items: [
                {
                    xtype: 'container',
                    layout: {
                        type: 'table',
                        columns: 3
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Indication #',
                            labelWidth: 140
                        },
                        {
                            xtype: 'combobox',
                            margin: '0 0 0 5',
                            fieldLabel: 'Indication Date'
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 0 0 5',
                            fieldLabel: 'Job #'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Ref Information Line #',
                            labelWidth: 140
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 0 0 5',
                            fieldLabel: 'Request Type'
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 0 0 5',
                            fieldLabel: 'Schedule No'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Lease Type',
                            labelWidth: 140
                        },
                        {
                            xtype: 'checkboxfield',
                            margin: '0 0 0 5',
                            boxLabel: 'Thai'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'table',
                        columns: 2
                    },
                    items: [
                        {
                            xtype: 'container',
                            height: 210,
                            width: 450,
                            items: [
                                {
                                    xtype: 'textfield',
                                    margin: '20 0 5 0',
                                    width: 415,
                                    fieldLabel: 'To',
                                    labelWidth: 50
                                },
                                {
                                    xtype: 'container',
                                    layout: 'hbox',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            margin: '0 0 5 0',
                                            width: 415,
                                            fieldLabel: 'Attn.',
                                            labelWidth: 50
                                        },
                                        {
                                            xtype: 'button',
                                            margin: '0 0 0 5',
                                            iconCls: 'x-form-search-trigger'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'textfield',
                                    margin: '0 0 15 0',
                                    width: 415,
                                    fieldLabel: 'Fax',
                                    labelWidth: 50
                                },
                                {
                                    xtype: 'textfield',
                                    width: 415,
                                    fieldLabel: 'From Marketing Officer',
                                    labelWidth: 140
                                },
                                {
                                    xtype: 'container',
                                    layout: 'hbox',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            margin: '0 0 5 0',
                                            width: 415,
                                            fieldLabel: 'Lessee Signer',
                                            labelWidth: 140
                                        },
                                        {
                                            xtype: 'button',
                                            margin: '0 0 0 5',
                                            iconCls: 'x-form-search-trigger'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    layout: 'hbox',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            width: 415,
                                            fieldLabel: 'KTIBJ Signer',
                                            labelWidth: 140
                                        },
                                        {
                                            xtype: 'button',
                                            margin: '0 0 0 5',
                                            iconCls: 'x-form-search-trigger'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            width: 550,
                            items: [
                                {
                                    xtype: 'fieldset',
                                    width: 420,
                                    title: 'Third Party',
                                    items: [
                                        {
                                            xtype: 'container',
                                            layout: 'hbox',
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    width: 365,
                                                    fieldLabel: 'To',
                                                    labelWidth: 50
                                                },
                                                {
                                                    xtype: 'button',
                                                    flex: 1,
                                                    margin: '0 0 0 5',
                                                    maxWidth: 25,
                                                    iconCls: 'x-form-search-trigger'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            layout: 'hbox',
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    margin: '5 0 5 0',
                                                    width: 365,
                                                    fieldLabel: 'Attn.',
                                                    labelWidth: 50
                                                },
                                                {
                                                    xtype: 'button',
                                                    flex: 1,
                                                    margin: '5 0 0 5',
                                                    maxWidth: 25,
                                                    iconCls: 'x-form-search-trigger'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'textfield',
                                            width: 365,
                                            fieldLabel: 'Fax',
                                            labelWidth: 50
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    margin: '0 0 5 0',
                                    layout: 'hbox',
                                    items: [
                                        {
                                            xtype: 'combobox',
                                            width: 195,
                                            fieldLabel: 'Currency',
                                            labelWidth: 80
                                        },
                                        {
                                            xtype: 'textfield',
                                            margin: '0 0 0 5',
                                            width: 215,
                                            fieldLabel: 'Exchange Rate'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'textfield',
                                    width: 415,
                                    fieldLabel: 'Position',
                                    labelWidth: 80
                                },
                                {
                                    xtype: 'textfield',
                                    width: 415,
                                    fieldLabel: 'Position',
                                    labelWidth: 80
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'gridpanel',
            height: 400,
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
            ],
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    ui: 'footer',
                    width: 360,
                    displayInfo: true
                },
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Add'
                        },
                        {
                            xtype: 'button',
                            text: 'Delete'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'form',
            bodyPadding: 10,
            layout: {
                type: 'table',
                columns: 2
            },
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Output Document',
                    items: [
                        {
                            xtype: 'combobox',
                            width: 415
                        },
                        {
                            xtype: 'segmentedbutton',
                            margin: '0 0 5 0',
                            items: [
                                {
                                    text: 'Create Document'
                                },
                                {
                                    text: 'Write Document'
                                },
                                {
                                    text: 'View Document'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    margin: '0 0 0 5',
                    title: 'Rating Point',
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Rating'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Exposure Limit'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Rating detail'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'As Of Date'
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
                    text: 'Save'
                },
                {
                    xtype: 'button',
                    text: 'Reset'
                },
                {
                    xtype: 'button',
                    text: 'Unuse Indication'
                }
            ]
        }
    ]

});