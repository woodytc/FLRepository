/*
 * File: app/view/Job/Indication/IndicationForEquipmentWindow.js
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

Ext.define('TabUserInformation.view.Job.Indication.IndicationForEquipmentWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.jobindicationindicationforequipmentwindow',

    requires: [
        'TabUserInformation.view.Job.Indication.IndicationForEquipmentWindowViewModel',
        'TabUserInformation.view.Job.Indication.IndicationForEquipmentWindowViewController',
        'Ext.form.Panel',
        'Ext.form.field.Date',
        'Ext.button.Button',
        'Ext.form.FieldSet',
        'Ext.form.field.ComboBox',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Column',
        'Ext.button.Segmented'
    ],

    controller: 'jobindicationindicationforequipmentwindow',
    viewModel: {
        type: 'jobindicationindicationforequipmentwindow'
    },
    bodyBorder: false,
    title: 'Indication for Equipment',
    maximized: true,
    modal: true,
    id: 'jobindicationindicationforequipmentwindow',

    items: [
        {
            xtype: 'form',
            height: 768,
            margin: '10 10 10 10',
            layout: 'card',
            bodyPadding: '',
            dockedItems: [
                {
                    xtype: 'form',
                    dock: 'top',
                    layout: 'auto',
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
                                    labelAlign: 'right',
                                    labelWidth: 140,
                                    name: 'IndicationId'
                                },
                                {
                                    xtype: 'datefield',
                                    format: 'd/m/Y',
                                    margin: '0 0 0 5',
                                    fieldLabel: 'Indication Date',
                                    labelAlign: 'right',
                                    name: 'IndicationDate'
                                },
                                {
                                    xtype: 'textfield',
                                    margin: '0 0 0 5',
                                    fieldLabel: 'Job #',
                                    labelAlign: 'right',
                                    name: 'JobId'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Ref Information Line #',
                                    labelAlign: 'right',
                                    labelWidth: 140,
                                    name: 'InformationId'
                                },
                                {
                                    xtype: 'textfield',
                                    margin: '0 0 0 5',
                                    fieldLabel: 'Request Type',
                                    labelAlign: 'right',
                                    name: 'RequestType'
                                },
                                {
                                    xtype: 'textfield',
                                    margin: '0 0 0 5',
                                    fieldLabel: 'Schedule No',
                                    labelAlign: 'right',
                                    name: 'ScheduleNo'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Lease Type',
                                    labelAlign: 'right',
                                    labelWidth: 140,
                                    name: 'LeaseType'
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
                                    layout: 'anchor',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            margin: '20 0 5 0',
                                            width: 415,
                                            fieldLabel: 'To',
                                            labelAlign: 'right',
                                            labelWidth: 50,
                                            name: 'CustomerId'
                                        },
                                        {
                                            xtype: 'container',
                                            layout: 'hbox',
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    reference: 'ContactPerson',
                                                    margin: '0 0 5 0',
                                                    width: 415,
                                                    fieldLabel: 'Attn.',
                                                    labelAlign: 'right',
                                                    labelWidth: 50,
                                                    name: 'ContactPerson'
                                                },
                                                {
                                                    xtype: 'button',
                                                    margin: '0 0 0 5',
                                                    iconCls: 'x-form-search-trigger',
                                                    listeners: {
                                                        click: 'onButtonContactPersonClick'
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'textfield',
                                            margin: '0 0 15 0',
                                            width: 415,
                                            fieldLabel: 'Fax',
                                            labelAlign: 'right',
                                            labelWidth: 50,
                                            name: 'CustomerFax'
                                        },
                                        {
                                            xtype: 'textfield',
                                            width: 415,
                                            fieldLabel: 'From Marketing Officer',
                                            labelAlign: 'right',
                                            labelWidth: 140,
                                            name: 'MarketingOfficer'
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
                                                    labelAlign: 'right',
                                                    labelWidth: 140
                                                },
                                                {
                                                    xtype: 'button',
                                                    margin: '0 0 0 5',
                                                    iconCls: 'x-form-search-trigger',
                                                    listeners: {
                                                        click: 'onButtonLesseeSignerClick'
                                                    }
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
                                                    fieldLabel: 'KTBL Signer',
                                                    labelAlign: 'right',
                                                    labelWidth: 140
                                                },
                                                {
                                                    xtype: 'button',
                                                    margin: '0 0 0 5',
                                                    iconCls: 'x-form-search-trigger',
                                                    listeners: {
                                                        click: 'onButtonKTBLSignerClick'
                                                    }
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
                                                            labelAlign: 'right',
                                                            labelWidth: 50,
                                                            name: 'ThirdPartyId'
                                                        },
                                                        {
                                                            xtype: 'button',
                                                            flex: 1,
                                                            margin: '0 0 0 5',
                                                            maxWidth: 25,
                                                            iconCls: 'x-form-search-trigger',
                                                            listeners: {
                                                                click: 'onButtonThirdPartyClick'
                                                            }
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
                                                            labelAlign: 'right',
                                                            labelWidth: 50,
                                                            name: 'ThirdPartyContactPerson'
                                                        },
                                                        {
                                                            xtype: 'button',
                                                            flex: 1,
                                                            margin: '5 0 0 5',
                                                            maxWidth: 25,
                                                            iconCls: 'x-form-search-trigger',
                                                            listeners: {
                                                                click: 'onButtonThirdPartyContactClick'
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    width: 365,
                                                    fieldLabel: 'Fax',
                                                    labelAlign: 'right',
                                                    labelWidth: 50,
                                                    name: 'ThirdPartyContactPersonFax'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            layout: 'table',
                                            items: [
                                                {
                                                    xtype: 'combobox',
                                                    width: 195,
                                                    fieldLabel: 'Currency',
                                                    labelAlign: 'right',
                                                    labelWidth: 80,
                                                    name: 'Currency',
                                                    autoLoadOnValue: true,
                                                    displayField: 'Name',
                                                    store: 'CommonData.currency',
                                                    valueField: 'Id'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    margin: '0 0 0 5',
                                                    width: 215,
                                                    fieldLabel: 'Exchange Rate',
                                                    labelAlign: 'right',
                                                    name: 'ExchangeRate'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'textfield',
                                            width: 415,
                                            fieldLabel: 'Position',
                                            labelAlign: 'right',
                                            labelWidth: 80
                                        },
                                        {
                                            xtype: 'textfield',
                                            width: 415,
                                            fieldLabel: 'Position',
                                            labelAlign: 'right',
                                            labelWidth: 80
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'form',
                    dock: 'bottom',
                    height: 150,
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
                                    fieldLabel: 'Rating',
                                    labelAlign: 'right',
                                    name: 'Rating'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: 'Exposure Limit',
                                    labelAlign: 'right',
                                    name: 'ExposureRate'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: 'Rating detail',
                                    labelAlign: 'right',
                                    name: 'ExposureLimit'
                                },
                                {
                                    xtype: 'datefield',
                                    format: 'd/m/Y',
                                    anchor: '100%',
                                    fieldLabel: 'As Of Date',
                                    labelAlign: 'right',
                                    name: 'RatingDate'
                                }
                            ]
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'gridpanel',
                    store: 'equipment',
                    viewConfig: {
                        listeners: {
                            itemdblclick: 'onViewItemDblClick'
                        }
                    },
                    dockedItems: [
                        {
                            xtype: 'pagingtoolbar',
                            dock: 'bottom',
                            ui: 'footer',
                            width: 360,
                            displayInfo: true,
                            store: 'equipment'
                        },
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'button',
                                    ui: 'default-small',
                                    text: 'New Line',
                                    listeners: {
                                        click: 'onButtonNewLineClick'
                                    }
                                },
                                {
                                    xtype: 'button',
                                    ui: 'default-small',
                                    text: 'Edit Line',
                                    listeners: {
                                        click: 'onButtonEditLineClick'
                                    }
                                },
                                {
                                    xtype: 'button',
                                    ui: 'default-small',
                                    text: 'Delete Line',
                                    listeners: {
                                        click: 'onButtonDeleteLineClick'
                                    }
                                }
                            ]
                        }
                    ],
                    columns: [
                        {
                            xtype: 'rownumberer',
                        },
                        {
                            xtype: 'hiddenfield',
                            dataIndex: 'Id'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 320,
                            dataIndex: 'EquipmentName',
                            locked: true,
                            text: 'Equipment'
                        },
                        {
                            xtype: 'datecolumn',
                            format: 'd/m/Y',
                            dataIndex: 'EquipmentDate',
                            text: 'EquipmentDate'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'Quantity',
                            text: 'Quantity'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'CostBHT',
                            text: 'CostBHT'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'CostCurrency',
                            text: 'CostCurrency'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'Term',
                            text: 'Term'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'Deposit',
                            text: 'Deposit'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'DepositAmount',
                            text: 'DepositAmount'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'RV',
                            text: 'RV'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'RVAmount',
                            text: 'RVAmount'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'IRRNet',
                            text: 'IRRNet'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'IRRGross',
                            text: 'IRRGross'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'AbnormalRental',
                            text: 'AbnormalRental'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'Rental',
                            text: 'Rental'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'TotalMA',
                            text: 'TotalMA'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'Payment',
                            text: 'Payment'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'AdvanceArrear',
                            text: 'AdvanceArrear'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'InsuranceBorne',
                            text: 'InsuranceBorne'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'ConditionLease',
                            text: 'ConditionLease'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'InsTerritory',
                            text: 'InsTerritory'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'InsRemark',
                            text: 'InsRemark'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'OtherCondition',
                            text: 'OtherCondition'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'Result',
                            text: 'Result'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'ResultQuantity',
                            text: 'ResultQuantity'
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
                    text: 'Save',
                    listeners: {
                        click: 'onSaveButtonClick'
                    }
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