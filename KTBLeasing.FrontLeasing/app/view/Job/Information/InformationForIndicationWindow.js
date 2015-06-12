/*
* File: app/view/Job/Information/InformationForIndicationWindow.js
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

Ext.define('TabUserInformation.view.Job.Information.InformationForIndicationWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.jobinformationinformationforindicationwindow',

    requires: [
        'TabUserInformation.view.Job.Information.InformationForIndicationWindowViewModel',
        'TabUserInformation.view.Job.Information.InformationForIndicationWindowViewController',
        'Ext.form.Panel',
        'Ext.form.field.Date',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Display',
        'Ext.button.Button',
        'Ext.form.field.TextArea',
        'Ext.form.FieldSet',
        'Ext.form.field.Number',
        'Ext.form.CheckboxGroup',
        'Ext.form.field.Checkbox',
        'Ext.button.Segmented',
        'Ext.toolbar.Toolbar'
    ],

    controller: 'jobinformationinformationforindicationwindow',
    viewModel: {
        type: 'jobinformationinformationforindicationwindow'
    },
    autoShow: true,
    title: 'Information for Indication',
    modal: true,
    maximized: true,
    bodyPadding: 10,
    type: 'form',

    items: [
        {
            xtype: 'form',
            reference: 'form-header',
            bodyPadding: 10,
            layout: {
                type: 'table',
                columns: 4
            },
            items: [
                {
                    xtype: 'container',
                    colspan: 3,
                    layout: 'table',
                    width: 800,
                    items: [
                        {
                            xtype: 'hiddenfield',
                            name: 'Id'
                        },
                        {
                            xtype: 'textfield',
                            width: 300,
                            fieldLabel: 'Information #',
                            labelAlign: 'right',
                            labelWidth: 150,
                            name: 'InformationId'
                        },
                        {
                            xtype: 'datefield',
                            format: 'd/m/Y',
                            width: 220,
                            fieldLabel: 'Inf.Date',
                            labelAlign: 'right',
                            labelWidth: 100,
                            name: 'RequestDate'
                        },
                        {
                            xtype: 'textfield',
                            colspan: 2,
                            width: 200,
                            fieldLabel: 'Primary Job #',
                            labelAlign: 'right',
                            name: 'PrimaryJob'
                        }
                    ]
                },
                {
                    xtype: 'combobox',
                    colspan: 1,
                    fieldLabel: 'Industry Code',
                    labelAlign: 'right',
                    name: 'IndustryCode',
                    autoLoadOnValue: true,
                    displayField: 'Name',
                    store: 'CommonData.industryCodes',
                    valueField: 'Id'
                },
                {
                    xtype: 'textfield',
                    colspan: 1,
                    width: 350,
                    fieldLabel: 'Marketing Officer',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'MarketingCode'
                },
                {
                    xtype: 'container',
                    colspan: 2,
                    layout: 'table',
                    items: [
                        
                        {
                            xtype: 'displayfield',
                            width: 300,
                            fieldLabel: 'Visit/Calling #',
                            labelAlign: 'right',
                            labelWidth: 120,
                            name: 'LeadId'
                        },
                        {
                            xtype: 'button',
                            margin: '0 0 0 5',
                            maxWidth: 25,
                            iconCls: 'x-form-search-trigger',
                            listeners: {
                                click: 'onButtonLeadClick'
                            }
                        }
                    ]
                },
                {
                    xtype: 'combobox',
                    colspan: 1,
                    fieldLabel: 'Nationality',
                    labelAlign: 'right',
                    name: 'Nationality',
                    autoLoadOnValue: true,
                    displayField: 'Name',
                    store: 'CommonData.natureCusts',
                    valueField: 'Id'
                },
                {
                    xtype: 'container',
                    colspan: 2,
                    layout: 'table',
                    items: [
                        {
                            xtype: 'textfield',
                            width: 300,
                            fieldLabel: 'Customer Code',
                            labelAlign: 'right',
                            labelWidth: 150,
                            name: 'CustomerId'
                        },
                        {
                            xtype: 'button',
                            margin: '0 0 0 5',
                            iconCls: 'x-form-search-trigger',
                            listeners: {
                                click: 'onButtonCusInfClick'
                            }
                        }
                    ]
                },
                {
                    xtype: 'combobox',
                    colspan: 1,
                    fieldLabel: 'Type of Customer',
                    labelWidth: 120,
                    name: 'TypeCustomer',
                    autoLoadOnValue: true,
                    displayField: 'Name',
                    store: 'CommonData.typeCustomers',
                    valueField: 'Id'
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Group of Cus',
                    labelAlign: 'right',
                    name: 'GroupCust',
                    autoLoadOnValue: true,
                    displayField: 'Name',
                    store: 'CommonData.groupCusts',
                    valueField: 'Id'
                },
                {
                    xtype: 'container',
                    colspan: 3,
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'combobox',
                            width: 250,
                            fieldLabel: 'Name',
                            labelAlign: 'right',
                            labelWidth: 150,
                            name: 'TitleNameTh',
                            autoLoadOnValue: true,
                            displayField: 'Name',
                            store: 'CommonData.titleNameThs',
                            valueField: 'Id'
                        },
                        {
                            xtype: 'textfield',
                            width: 175,
                            name: 'FirstNameTh'
                        },
                        {
                            xtype: 'textfield',
                            width: 175,
                            name: 'LastNameTh'
                        }
                    ]
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'TypeBusiness',
                    labelAlign: 'right',
                    name: 'TypeBusiness',
                    autoLoadOnValue: true,
                    displayField: 'Name',
                    store: 'CommonData.typeBusiness',
                    valueField: 'Id'
                },
                {
                    xtype: 'container',
                    colspan: 4,
                    layout: {
                        type: 'table',
                        columns: 5
                    },
                    items: [
                        {
                            xtype: 'textareafield',
                            colspan: 3,
                            rowspan: 4,
                            height: 120,
                            width: 550,
                            fieldLabel: 'Address',
                            labelAlign: 'right',
                            labelWidth: 150,
                            name: 'Address'
                        },
                        {
                            xtype: 'button',
                            colspan: 2,
                            margin: '0 0 0 5',
                            iconCls: 'x-form-search-trigger',
                            listeners: {
                                click: 'onButtonAddressClick'
                            }
                        },
                        {
                            xtype: 'fieldset',
                            height: 90,
                            margin: '0 0 0 5',
                            checkboxToggle: true,
                            title: 'Unquoted',
                            items: [
                                {
                                    xtype: 'textfield',
                                    height: 60,
                                    labelAlign: 'top'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'combobox',
                    reference: 'province',
                    colspan: 4,
                    width: 500,
                    fieldLabel: 'Sub District',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'SubDistrict',
                    allowBlank: false,
                    triggerAction: 'last',
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
                    queryParam: 'text',
                    store: 'CommonData.provinces',
                    valueField: 'SubdistrictId'
                },
                {
                    xtype: 'container',
                    colspan: 4,
                    layout: 'table',
                    items: [
                        {
                            xtype: 'textfield',
                            width: 380,
                            fieldLabel: 'Telephone',
                            labelAlign: 'right',
                            labelWidth: 150,
                            name: 'Telephone',
                            inputType: 'tel'
                        },
                        {
                            xtype: 'textfield',
                            width: 280,
                            fieldLabel: 'Fax',
                            labelAlign: 'right',
                            labelWidth: 50,
                            name: 'Fax',
                            inputType: 'tel'
                        },
                        {
                            xtype: 'textfield',
                            width: 280,
                            fieldLabel: 'Email',
                            labelAlign: 'right',
                            labelWidth: 50,
                            name: 'Email',
                            inputType: 'email',
                            vtype: 'email'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'form',
            reference: 'form-background',
            items: [
                {
                    xtype: 'fieldset',
                    margin: '',
                    collapsible: true,
                    title: 'Background',
                    layout: {
                        type: 'table',
                        columns: 3
                    },
                    items: [
                        {
                            xtype: 'container',
                            colspan: 3,
                            layout: 'table',
                            items: [
                                {
                                    xtype: 'textfield',
                                    itemId: 'Business',
                                    width: 800,
                                    fieldLabel: 'Business',
                                    labelAlign: 'right',
                                    labelWidth: 150,
                                    name: 'Business'
                                },
                                {
                                    xtype: 'button',
                                    margin: '0 0 0 5',
                                    text: 'Shareholder\'s',
                                    listeners: {
                                        click: 'onShareholderClick'
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'datefield',
                            format: 'd/m/Y',
                            fieldLabel: 'Establishment',
                            labelAlign: 'right',
                            labelWidth: 150,
                            name: 'Establishment'
                        },
                        {
                            xtype: 'fieldcontainer',
                            colspan: 2,
                            layout: 'table',
                            items: [
                                {
                                    xtype: 'numberfield',
                                    width: 150,
                                    fieldLabel: 'Rating',
                                    labelAlign: 'right',
                                    labelWidth: 50,
                                    name: 'Rating'
                                },
                                {
                                    xtype: 'datefield',
                                    format: 'd/m/Y',
                                    width: 180,
                                    fieldLabel: 'As Of',
                                    labelAlign: 'right',
                                    labelWidth: 50,
                                    name: 'RatingDate'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Rating detail',
                                    labelAlign: 'right',
                                    labelWidth: 80,
                                    name: 'RatingDetail'
                                }
                            ]
                        },
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'Register Capital',
                            labelAlign: 'right',
                            labelWidth: 150,
                            name: 'RegisterCapital'
                        },
                        {
                            xtype: 'textfield',
                            colspan: 2,
                            width: 505,
                            fieldLabel: '',
                            name: 'RegisterCapitalDetail'
                        },
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'Sales',
                            labelAlign: 'right',
                            labelWidth: 150,
                            name: 'Sales'
                        },
                        {
                            xtype: 'container',
                            colspan: 2,
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'datefield',
                                    format: 'd/m/Y',
                                    width: 180,
                                    fieldLabel: 'As Of',
                                    labelAlign: 'right',
                                    labelWidth: 50,
                                    name: 'SalesDate'
                                },
                                {
                                    xtype: 'textfield',
                                    flex: 1,
                                    margin: '0 0 0 5',
                                    name: 'SalesDetail'
                                }
                            ]
                        },
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'Profit (Loss)',
                            labelAlign: 'right',
                            labelWidth: 150,
                            name: 'ProfitLoss'
                        },
                        {
                            xtype: 'container',
                            colspan: 2,
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'datefield',
                                    format: 'd/m/Y',
                                    width: 180,
                                    fieldLabel: 'As Of',
                                    labelAlign: 'right',
                                    labelWidth: 50,
                                    name: 'ProfitLossDate'
                                },
                                {
                                    xtype: 'textfield',
                                    flex: 1,
                                    margin: '0 0 0 5',
                                    name: 'ProfitLossDetail'
                                }
                            ]
                        },
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'Shareholder\'s Equity',
                            labelAlign: 'right',
                            labelWidth: 150,
                            name: 'ShareholderEquity'
                        },
                        {
                            xtype: 'container',
                            colspan: 2,
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'datefield',
                                    format: 'd/m/Y',
                                    width: 180,
                                    fieldLabel: 'As Of',
                                    labelAlign: 'right',
                                    labelWidth: 50,
                                    name: 'ShareholderEquityDate'
                                },
                                {
                                    xtype: 'textfield',
                                    flex: 1,
                                    margin: '0 0 0 5',
                                    name: 'ShareholderEquityDetail'
                                }
                            ]
                        },
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'Outstanding Amount',
                            labelAlign: 'right',
                            labelWidth: 150,
                            name: 'OutstandingAmount'
                        },
                        {
                            xtype: 'datefield',
                            format: 'd/m/Y',
                            colspan: 2,
                            width: 180,
                            fieldLabel: 'As Of',
                            labelAlign: 'right',
                            labelWidth: 50,
                            name: 'OutstandingAmountDate'
                        },
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'Exposure Limit',
                            labelAlign: 'right',
                            labelWidth: 150,
                            name: 'ExposureLimit'
                        },
                        {
                            xtype: 'container',
                            colspan: 2,
                            layout: 'table',
                            items: [
                                {
                                    xtype: 'datefield',
                                    format: 'd/m/Y',
                                    width: 180,
                                    fieldLabel: 'As Of',
                                    labelAlign: 'right',
                                    labelWidth: 50,
                                    name: 'ExposureLimitDate'
                                },
                                {
                                    xtype: 'combobox',
                                    fieldLabel: 'Committed',
                                    labelAlign: 'right',
                                    name: 'Committed',
                                    autoLoadOnValue: true,
                                    displayField: 'Name',
                                    store: 'CommonData.committed',
                                    valueField: 'Id'
                                }
                            ]
                        }
                    ],
                    listeners: {
                        beforerender: 'onFieldsetBeforeRender'
                    }
                }
            ]
        },
        {
            xtype: 'form',
            reference: 'form-footer',
            width: 925,
            layout: {
                type: 'table',
                columns: 2
            },
            items: [
                {
                    xtype: 'fieldset',
                    collapsible: true,
                    title: 'Type of Conditions',
                    items: [
                        {
                            xtype: 'container',
                            margin: '0 0 5 0',
                            layout: {
                                type: 'table',
                                columns: 2
                            },
                            items: [
                                {
                                    xtype: 'combobox',
                                    width: 300,
                                    fieldLabel: 'Type of Finance',
                                    labelAlign: 'right',
                                    labelWidth: 150,
                                    name: 'TypeFinance',
                                    autoLoadOnValue: true,
                                    displayField: 'Name',
                                    store: 'CommonData.typeFinances',
                                    valueField: 'Id'
                                },
                                {
                                    xtype: 'textareafield',
                                    rowspan: 2,
                                    disabled: true,
                                    fieldLabel: 'Sub Lessee Syndicated',
                                    labelAlign: 'right',
                                    name: 'SubLesseeSyndicated'
                                },
                                {
                                    xtype: 'checkboxgroup',
                                    margin: '0 0 0 50',
                                    width: 269,
                                    items: [
                                        {
                                            xtype: 'checkboxfield',
                                            name: 'UsedEquipment',
                                            boxLabel: 'Used Equipment',
                                            listeners: {
                                                change: 'onCheckboxfieldChange'
                                            }
                                        },
                                        {
                                            xtype: 'checkboxfield',
                                            name: 'SpecialProgram',
                                            boxLabel: 'Special Program',
                                            listeners: {
                                                change: 'onCheckboxfieldChange1'
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: 'table',
                            items: [
                                {
                                    xtype: 'textfield',
                                    reference: 'eqpyear',
                                    disabled: true,
                                    width: 200,
                                    fieldLabel: 'Year',
                                    labelAlign: 'right',
                                    labelWidth: 150,
                                    name: 'EQPYear'
                                },
                                {
                                    xtype: 'combobox',
                                    reference: 'programname',
                                    disabled: true,
                                    fieldLabel: 'Program Name',
                                    labelAlign: 'right',
                                    labelWidth: 150,
                                    name: 'ProgramName',
                                    autoLoadOnValue: true,
                                    displayField: 'Name',
                                    store: 'CommonData.specialPrograms',
                                    valueField: 'Id'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    margin: '0 0 0 10',
                    anchorSize: 50,
                    layout: 'auto',
                    collapsible: true,
                    title: 'Currency',
                    items: [
                        {
                            xtype: 'combobox',
                            name: 'Currency',
                            autoLoadOnValue: true,
                            displayField: 'Name',
                            store: 'CommonData.currency',
                            valueField: 'Id'
                        },
                        {
                            xtype: 'textfield',
                            width: 260,
                            fieldLabel: 'Exchange Rate',
                            labelAlign: 'right',
                            name: 'ExchangeRate'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    colspan: 2,
                    items: [
                        {
                            xtype: 'combobox',
                            width: 400,
                            fieldLabel: 'Source of Information',
                            labelAlign: 'right',
                            labelWidth: 150,
                            name: 'SourceInformation',
                            autoLoadOnValue: true,
                            displayField: 'Name',
                            store: 'CommonData.sourceInformations',
                            valueField: 'Id'
                        },
                        {
                            xtype: 'textfield',
                            width: 600,
                            fieldLabel: 'Detail when others',
                            labelAlign: 'right',
                            labelWidth: 150,
                            name: 'Remark'
                        }
                    ]
                },
                {
                    xtype: 'segmentedbutton',
                    colspan: 2,
                    layout: 'table',
                    items: [
                        {
                            ui: 'default-small',
                            text: 'Detail Requested Transactions',
                            listeners: {
                                click: 'onButtonLeadRequestedTransactionsClick'
                            }
                        },
                        {
                            ui: 'default-small',
                            text: 'Officer Comments'
                        },
                        {
                            ui: 'default-small',
                            text: 'For Management',
                            listeners: {
                                click: 'onButtonForManagementClick'
                            }
                        },
                        {
                            ui: 'default-small',
                            text: 'Requested fot Approve'
                        }
                    ]
                },
                {
                    xtype: 'segmentedbutton',
                    colspan: 2,
                    layout: 'table',
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
                        click: 'onButtonSaveClick'
                    }
                }
            ]
        }
    ]

});