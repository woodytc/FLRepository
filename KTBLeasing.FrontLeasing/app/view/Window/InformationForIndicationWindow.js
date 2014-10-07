/*
 * File: app/view/Window/InformationForIndicationWindow.js
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

Ext.define('TabUserInformation.view.Window.InformationForIndicationWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowinformationforindicationwindow',

    requires: [
        'TabUserInformation.view.Window.InformationForIndicationWindowViewModel',
        'TabUserInformation.view.Window.InformationForIndicationWindowViewController',
        'Ext.form.Panel',
        'Ext.form.field.Date',
        'Ext.form.field.ComboBox',
        'Ext.button.Button',
        'Ext.form.field.TextArea',
        'Ext.form.FieldSet',
        'Ext.form.field.Number',
        'Ext.form.CheckboxGroup',
        'Ext.form.field.Checkbox',
        'Ext.button.Segmented',
        'Ext.toolbar.Toolbar'
    ],

    controller: 'windowinformationforindicationwindow',
    viewModel: {
        type: 'windowinformationforindicationwindow'
    },
    autoShow: true,
    width: 900,
    title: 'Information for Indication',
    modal: true,

    items: [
        {
            xtype: 'form',
            layout: 'auto',
            bodyPadding: 10,
            items: [
                {
                    xtype: 'container',
                    margin: '0 0 5 0',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'textfield',
                            flex: 1,
                            fieldLabel: 'Information #'
                        },
                        {
                            xtype: 'datefield',
                            flex: 1,
                            margin: '0 0 0 5',
                            fieldLabel: 'Inf.Date',
                            labelWidth: 50
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            margin: '0 0 0 5',
                            fieldLabel: 'Primary Job #'
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            margin: '0 0 0 5',
                            maxWidth: 150,
                            fieldLabel: 'Industry Code'
                        },
                        {
                            xtype: 'combobox',
                            flex: 1,
                            margin: '0 0 0 5'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'textfield',
                            width: 350,
                            fieldLabel: 'Marketing Officer',
                            labelWidth: 105
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 0 0 5',
                            width: 250,
                            fieldLabel: 'Visit/Calling #'
                        },
                        {
                            xtype: 'button',
                            flex: 1,
                            margin: '0 0 0 5',
                            maxWidth: 25,
                            iconCls: 'x-form-search-trigger',
                            listeners: {
                                click: 'onButtonClick'
                            }
                        },
                        {
                            xtype: 'combobox',
                            flex: 1,
                            margin: '0 0 0 5',
                            fieldLabel: 'Nature of Cus'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    margin: '5 0 5 0',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'textfield',
                            width: 200,
                            fieldLabel: 'Customer Code'
                        },
                        {
                            xtype: 'button',
                            margin: '0 0 0 5',
                            iconCls: 'x-form-search-trigger',
                            listeners: {
                                click: 'onButtonCusInfClick1'
                            }
                        },
                        {
                            xtype: 'combobox',
                            flex: 1,
                            margin: '0 0 0 5',
                            maxWidth: 250,
                            fieldLabel: 'Type of Customer',
                            labelWidth: 120
                        },
                        {
                            xtype: 'combobox',
                            flex: 1,
                            margin: '0 0 0 5',
                            fieldLabel: 'Group of Cus'
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
                            width: 200,
                            fieldLabel: 'Name'
                        },
                        {
                            xtype: 'textfield',
                            width: 350
                        },
                        {
                            xtype: 'combobox',
                            flex: 1,
                            margin: '0 0 0 5',
                            fieldLabel: 'Type of Business',
                            labelWidth: 120
                        }
                    ]
                },
                {
                    xtype: 'container',
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
                            fieldLabel: 'Address'
                        },
                        {
                            xtype: 'button',
                            colspan: 2,
                            margin: '0 0 0 5',
                            iconCls: 'x-form-search-trigger',
                            listeners: {
                                click: 'onButtonAddressClick1'
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
                    xtype: 'container',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'combobox',
                            width: 200,
                            fieldLabel: 'Province'
                        },
                        {
                            xtype: 'numberfield',
                            margin: '0 0 0 5',
                            width: 100,
                            fieldLabel: 'Zip',
                            labelWidth: 30,
                            hideTrigger: true
                        }
                    ]
                },
                {
                    xtype: 'container',
                    margin: '5 0 0 0',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'textfield',
                            width: 280,
                            fieldLabel: 'Telephone',
                            labelWidth: 80,
                            inputType: 'tel'
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 0 0 5',
                            width: 280,
                            fieldLabel: 'Fax',
                            labelWidth: 80,
                            inputType: 'tel'
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 0 0 5',
                            width: 280,
                            fieldLabel: 'Email',
                            labelWidth: 80,
                            inputType: 'email'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'form',
            bodyPadding: 10,
            collapsible: false,
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
                            margin: '0 0 5 0',
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'textfield',
                                    width: 725,
                                    fieldLabel: 'Business',
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
                            xtype: 'fieldcontainer',
                            colspan: 3,
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'datefield',
                                    width: 250,
                                    fieldLabel: 'Establishment',
                                    labelWidth: 150
                                },
                                {
                                    xtype: 'numberfield',
                                    flex: 1,
                                    margin: '0 0 0 5',
                                    width: 180,
                                    fieldLabel: 'Rating',
                                    labelWidth: 50
                                },
                                {
                                    xtype: 'datefield',
                                    flex: 1,
                                    margin: '0 0 0 5',
                                    width: 150,
                                    fieldLabel: 'As Of',
                                    labelWidth: 50
                                },
                                {
                                    xtype: 'textfield',
                                    flex: 1,
                                    margin: '0 0 0 5',
                                    width: 235,
                                    fieldLabel: 'Rating detail'
                                }
                            ]
                        },
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'Register Capital',
                            labelWidth: 150
                        },
                        {
                            xtype: 'textfield',
                            colspan: 2,
                            width: 505,
                            fieldLabel: ''
                        },
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'Sales',
                            labelWidth: 150
                        },
                        {
                            xtype: 'container',
                            colspan: 2,
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'textfield',
                                    margin: '0 0 0 5',
                                    width: 180,
                                    fieldLabel: 'Year',
                                    labelWidth: 50
                                },
                                {
                                    xtype: 'textfield',
                                    flex: 1,
                                    margin: '0 0 0 5'
                                }
                            ]
                        },
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'Profit (Loss)',
                            labelWidth: 150
                        },
                        {
                            xtype: 'container',
                            colspan: 2,
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'textfield',
                                    margin: '0 0 0 5',
                                    width: 180,
                                    fieldLabel: 'Year',
                                    labelWidth: 50
                                },
                                {
                                    xtype: 'textfield',
                                    flex: 1,
                                    margin: '0 0 0 5'
                                }
                            ]
                        },
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'Shareholder\'s Equity',
                            labelWidth: 150
                        },
                        {
                            xtype: 'container',
                            colspan: 2,
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'textfield',
                                    margin: '0 0 0 5',
                                    width: 180,
                                    fieldLabel: 'Year',
                                    labelWidth: 50
                                },
                                {
                                    xtype: 'textfield',
                                    flex: 1,
                                    margin: '0 0 0 5'
                                }
                            ]
                        },
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'Outstanding Amount',
                            labelWidth: 150
                        },
                        {
                            xtype: 'datefield',
                            colspan: 2,
                            margin: '0 0 0 5',
                            width: 180,
                            fieldLabel: 'As Of',
                            labelWidth: 50
                        },
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'Exposure Limit',
                            labelWidth: 150
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
                                    width: 161,
                                    fieldLabel: 'As Of',
                                    labelWidth: 50
                                },
                                {
                                    xtype: 'combobox',
                                    flex: 1,
                                    margin: '0 0 0 5',
                                    fieldLabel: 'Committed'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    width: 925,
                    layout: {
                        type: 'table',
                        columns: 2
                    },
                    items: [
                        {
                            xtype: 'fieldset',
                            height: 140,
                            width: 566,
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
                                            width: 250,
                                            fieldLabel: 'Type of Finance',
                                            labelWidth: 120
                                        },
                                        {
                                            xtype: 'textareafield',
                                            rowspan: 2,
                                            fieldLabel: 'Sub Lessee Syndicated'
                                        },
                                        {
                                            xtype: 'checkboxgroup',
                                            width: 269,
                                            layout: {
                                                type: 'checkboxgroup',
                                                autoFlex: false
                                            },
                                            items: [
                                                {
                                                    xtype: 'checkboxfield',
                                                    boxLabel: 'Used Equipment'
                                                },
                                                {
                                                    xtype: 'checkboxfield',
                                                    margin: '0 0 0 10',
                                                    boxLabel: 'Special Program'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    margin: '0 0 5 0',
                                    layout: 'hbox',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            width: 100,
                                            fieldLabel: 'Year',
                                            labelWidth: 50
                                        },
                                        {
                                            xtype: 'combobox',
                                            margin: '0 0 0 5',
                                            fieldLabel: 'Program Name'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            height: 140,
                            margin: '0 0 0 10',
                            width: 293,
                            anchorSize: 50,
                            layout: 'auto',
                            collapsible: true,
                            title: 'Currency',
                            items: [
                                {
                                    xtype: 'combobox'
                                },
                                {
                                    xtype: 'textfield',
                                    width: 260,
                                    fieldLabel: 'Exchange Rate'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'container',
            items: [
                {
                    xtype: 'combobox',
                    width: 400,
                    fieldLabel: 'Source of Information',
                    labelWidth: 130
                },
                {
                    xtype: 'textfield',
                    width: 600,
                    fieldLabel: 'Detail when others',
                    labelWidth: 130
                }
            ]
        },
        {
            xtype: 'segmentedbutton',
            items: [
                {
                    ui: 'default-small',
                    text: 'Detail Requested Transactions'
                },
                {
                    ui: 'default-small',
                    text: 'Officer Comments'
                },
                {
                    ui: 'default-small',
                    text: 'For Management'
                },
                {
                    ui: 'default-small',
                    text: 'Requested fot Approve'
                }
            ]
        },
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
                    text: 'Edit'
                },
                {
                    xtype: 'button',
                    text: 'Save'
                }
            ]
        }
    ]

});