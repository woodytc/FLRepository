/*
 * File: app/view/Job/Application/Tab/TermAndCondition.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
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

Ext.define('TabUserInformation.view.Job.Application.Tab.TermAndCondition', {
    extend: 'Ext.form.Panel',
    alias: 'widget.jobapplicationtabtermandcondition',

    requires: [
        'TabUserInformation.view.Job.Application.Tab.TermAndConditionViewModel',
        'TabUserInformation.view.Job.Application.Tab.TermAndConditionViewController',
        'Ext.form.field.ComboBox',
        'Ext.form.CheckboxGroup',
        'Ext.form.field.Checkbox',
        'Ext.button.Button',
        'Ext.form.FieldSet',
        'Ext.toolbar.Toolbar',
        'Ext.form.Panel',
        'Ext.form.field.Display',
        'Ext.form.field.Number',
        'Ext.form.field.Date'
    ],

    controller: 'jobapplicationtabtermandcondition',
    viewModel: {
        type: 'jobapplicationtabtermandcondition'
    },
    id: 'jobapptermcondition',
    bodyPadding: 10,
    title: 'Term Condition',

    items: [
        {
            xtype: 'fieldcontainer',
            height: 120,
            layout: {
                type: 'table',
                columns: 3
            },
            items: [
                {
                    xtype: 'hiddenfield',
                    name: 'Id'
                },
                {
                    xtype: 'textfield',
                    width: 250,
                    fieldLabel: 'Lease Term (Months)',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'LeaseTerm'
                },
                {
                    xtype: 'combobox',
                    colspan: 2,
                    fieldLabel: 'Payment',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'PaymentId',
                    autoLoadOnValue: true,
                    displayField: 'Name',
                    store: 'CommonData.payment',
                    valueField: 'Id'
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Type',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'TypeId',
                    autoLoadOnValue: true,
                    displayField: 'Name',
                    store: 'CommonData.types',
                    valueField: 'Id'
                },
                {
                    xtype: 'textfield',
                    colspan: 2,
                    width: 450,
                    fieldLabel: 'Syndicate/Sub Lease',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'SyndicateSubLease'
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Advance/Arrear',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'AdvanceArrearId',
                    autoLoadOnValue: true,
                    displayField: 'Name',
                    store: 'CommonData.advanceArrear',
                    valueField: 'Id'
                },
                {
                    xtype: 'combobox',
                    colspan: 2,
                    width: 450,
                    fieldLabel: 'Type of Finance',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'TypeFinanceId',
                    displayField: 'Name',
                    store: 'CommonData.typeFinances',
                    valueField: 'Id'
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Rate Type',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'RateTypeId',
                    autoLoadOnValue: true,
                    displayField: 'Name',
                    store: 'CommonData.rateTypes',
                    valueField: 'Id'
                },
                {
                    xtype: 'checkboxgroup',
                    rowspan: 2,
                    margin: '0 0 0 50',
                    width: 250,
                    hideLabel: true,
                    columns: 2,
                    layout: {
                        type: 'checkboxgroup',
                        autoFlex: false
                    },
                    items: [
                        {
                            xtype: 'checkboxfield',
                            name: 'Irregular',
                            boxLabel: 'Irregular'
                        },
                        {
                            xtype: 'checkboxfield',
                            reference: 'perUnitEqual',
                            name: 'PerUnitEqual',
                            boxLabel: 'Per Unit Equal'
                        },
                        {
                            xtype: 'checkboxfield',
                            reference: 'abnormalRental',
                            name: 'AbnormalRental',
                            boxLabel: 'Abnormal Rental'
                        }
                    ]
                },
                {
                    xtype: 'button',
                    rowspan: 2,
                    text: 'Additional Equipment Details',
                    listeners: {
                        click: 'onButtonAdditionalEQPDetailsClick'
                    }
                },
                {
                    xtype: 'container',
                    layout: 'table',
                    items: [
                        {
                            xtype: 'textfield',
                            width: 200,
                            fieldLabel: 'Subsequence Due Day',
                            labelAlign: 'right',
                            labelWidth: 150,
                            name: 'SubsequenceDueDay'
                        },
                        {
                            xtype: 'button',
                            margin: '0 0 0 5',
                            iconCls: 'x-form-search-trigger',
                            listeners: {
                                click: 'onButtonDueDayClick'
                            }
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'fieldset',
            title: 'Finance Fee',
            layout: {
                type: 'table',
                columns: 2
            },
            items: [
                {
                    xtype: 'container',
                    colspan: 2,
                    layout: 'table',
                    items: [
                        {
                            xtype: 'textfield',
                            width: 700,
                            fieldLabel: 'Recieved from Company Name',
                            labelAlign: 'right',
                            labelWidth: 200,
                            name: 'ReceivedCompanyName'
                        },
                        {
                            xtype: 'button',
                            margin: '0 0 0 5',
                            iconCls: 'x-form-search-trigger',
                            listeners: {
                                click: 'onButtonThirdPartyClick'
                            }
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    colspan: 2,
                    fieldLabel: 'Amount',
                    labelAlign: 'right',
                    labelWidth: 200,
                    name: 'FinanceFeeAmount'
                },
                {
                    xtype: 'container',
                    colspan: 2,
                    layout: 'table',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: '% of Equipment Cost',
                            labelAlign: 'right',
                            labelWidth: 200,
                            name: 'PercentEquipmentCost'
                        },
                        {
                            xtype: 'combobox',
                            labelAlign: 'right',
                            labelWidth: 150,
                            name: 'PercentEquipmentCostTypeId',
                            autoLoadOnValue: true,
                            displayField: 'Name',
                            store: 'CommonData.percentEquipmentCostTypes',
                            valueField: 'Id'
                        }
                    ]
                },
                {
                    xtype: 'combobox',
                    colspan: 2,
                    width: 545,
                    fieldLabel: 'Payment Condition',
                    labelAlign: 'right',
                    labelWidth: 200,
                    name: 'PaymentConditionId',
                    autoLoadOnValue: true,
                    displayField: 'Name',
                    store: 'CommonData.paymentCondition',
                    valueField: 'Id'
                }
            ]
        },
        {
            xtype: 'fieldset',
            hidden: true,
            margin: '0 0 0 5',
            layout: 'table',
            title: 'Simulation',
            items: [
                {
                    xtype: 'combobox',
                    width: 350,
                    fieldLabel: 'Type of Simulation',
                    labelAlign: 'right',
                    labelWidth: 200,
                    name: 'TypeSimulation',
                    autoLoadOnValue: true,
                    displayField: 'Name',
                    store: 'CommonData.typeSimulations',
                    valueField: 'Id'
                },
                {
                    xtype: 'toolbar',
                    margin: '0 0 5 0',
                    width: 300,
                    items: [
                        {
                            xtype: 'button',
                            ui: 'default-small',
                            text: 'New'
                        },
                        {
                            xtype: 'button',
                            ui: 'default-small',
                            text: 'Write'
                        },
                        {
                            xtype: 'button',
                            ui: 'default-small',
                            text: 'View'
                        },
                        {
                            xtype: 'button',
                            ui: 'default-small',
                            text: 'Read'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'form',
            height: 135,
            itemId: 'DuePanel',
            bodyPadding: 10,
            layout: {
                type: 'table',
                columns: 4
            },
            bind: {
                disabled: '{!abnormalRental.checked}'
            },
            items: [
                {
                    xtype: 'displayfield',
                    margin: '-5 0 5 155',
                    width: 170,
                    name: 'head1',
                    value: 'Per Unit (Curr.)',
                    fieldCls: 'title-mini'
                },
                {
                    xtype: 'displayfield',
                    margin: '-5 0 5 5',
                    width: 170,
                    name: 'head2',
                    value: 'Total (Curr.)',
                    fieldCls: 'title-mini'
                },
                {
                    xtype: 'displayfield',
                    margin: '-5 0 5 5',
                    width: 170,
                    name: 'head3',
                    value: 'Equal To (BHT.)',
                    fieldCls: 'title-mini'
                },
                {
                    xtype: 'displayfield',
                    margin: '-5 0 5 5',
                    width: 170,
                    name: 'head4',
                    value: 'Vat Amount (Curr.)',
                    fieldCls: 'title-mini'
                },
                {
                    xtype: 'container',
                    layout: 'table',
                    items: [
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'First Due',
                            labelAlign: 'right',
                            labelWidth: 150
                        },
                        {
                            xtype: 'numberfield',
                            fieldLabel: '',
                            labelAlign: 'right',
                            labelWidth: 150,
                            name: 'FirstDuePerUnit',
                            hideTrigger: true,
                            bind: {
                                disabled: '{!perUnitEqual.checked}',
                                value: '{FirstDuePerUnit}'
                            }
                        }
                    ]
                },
                {
                    xtype: 'numberfield',
                    margin: '-5 0 0 5',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'FirstDueTotal',
                    hideTrigger: true,
                    bind: {
                        value: '{FirstDuePerUnit}'
                    }
                },
                {
                    xtype: 'numberfield',
                    margin: '-5 0 0 5',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'FirstDueEqualTo',
                    hideTrigger: true,
                    bind: {
                        value: '{FirstDuePerUnit}'
                    }
                },
                {
                    xtype: 'numberfield',
                    bind: '{FirstDueVatAmount}',
                    margin: '-5 0 0 5',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'FirstDueVatAmount',
                    hideTrigger: true
                },
                {
                    xtype: 'container',
                    layout: 'table',
                    items: [
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Second Due',
                            labelAlign: 'right',
                            labelWidth: 150
                        },
                        {
                            xtype: 'numberfield',
                            labelAlign: 'right',
                            labelWidth: 150,
                            name: 'SecondDuePerUnit',
                            hideTrigger: true,
                            bind: {
                                disabled: '{!perUnitEqual.checked}',
                                value: '{SecondDuePerUnit}'
                            }
                        }
                    ]
                },
                {
                    xtype: 'numberfield',
                    margin: '-5 0 0 5',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'SecondDueTotal',
                    hideTrigger: true,
                    bind: {
                        value: '{SecondDuePerUnit}'
                    }
                },
                {
                    xtype: 'numberfield',
                    margin: '-5 0 0 5',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'SecondDueEqualTo',
                    hideTrigger: true,
                    bind: {
                        value: '{SecondDuePerUnit}'
                    }
                },
                {
                    xtype: 'numberfield',
                    bind: '{SecondDueVatAmount}',
                    margin: '-5 0 0 5',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'SecondDueVatAmount',
                    hideTrigger: true
                },
                {
                    xtype: 'container',
                    layout: 'table',
                    items: [
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Last Due',
                            labelAlign: 'right',
                            labelWidth: 150
                        },
                        {
                            xtype: 'numberfield',
                            labelAlign: 'right',
                            labelWidth: 150,
                            name: 'LastDuePerUnit',
                            hideTrigger: true,
                            bind: {
                                disabled: '{!perUnitEqual.checked}',
                                value: '{LastDuePerUnit}'
                            }
                        }
                    ]
                },
                {
                    xtype: 'numberfield',
                    margin: '-5 0 0 5',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'LastDueTotal',
                    hideTrigger: true,
                    bind: {
                        value: '{LastDuePerUnit}'
                    }
                },
                {
                    xtype: 'numberfield',
                    margin: '-5 0 0 5',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'LastDueEqualTo',
                    hideTrigger: true,
                    bind: {
                        value: '{LastDuePerUnit}'
                    }
                },
                {
                    xtype: 'numberfield',
                    bind: '{LastDueVatAmount}',
                    margin: '-5 0 0 5',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'LastDueVatAmount',
                    hideTrigger: true
                }
            ]
        },
        {
            xtype: 'panel',
            bodyBorder: false,
            bodyPadding: 10,
            layout: {
                type: 'table',
                columns: 3
            },
            items: [
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Net Rate',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'NetRate',
                    hideTrigger: true
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Gross Rate',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'GrossRate',
                    hideTrigger: true
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Gross Rate (Account)',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'GrossRateAccount',
                    hideTrigger: true
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Average Life (Year)',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'AverageLife',
                    hideTrigger: true
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Rental + MA',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'RentalMA',
                    hideTrigger: true
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Number of Payment',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'NumberPayment',
                    hideTrigger: true
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'First Due Date',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'FirstDueDate'
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'Last Due Date',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'LastDueDate'
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'R.V.Due Date (ACCT)',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'RVDueDate'
                }
            ]
        },
        {
            xtype: 'panel',
            bodyPadding: 10,
            layout: {
                type: 'table',
                columns: 3
            },
            items: [
                {
                    xtype: 'displayfield',
                    margin: '-5 0 5 155',
                    width: 170,
                    name: 'head5',
                    value: 'Per Unit (Curr.)',
                    fieldCls: 'title-mini'
                },
                {
                    xtype: 'displayfield',
                    margin: '-5 0 5 5',
                    width: 170,
                    name: 'head6',
                    value: 'Total (Curr.)',
                    fieldCls: 'title-mini'
                },
                {
                    xtype: 'displayfield',
                    margin: '-5 0 5 5',
                    width: 170,
                    name: 'head7',
                    value: 'Equal To (BHT.)',
                    fieldCls: 'title-mini'
                },
                {
                    xtype: 'container',
                    layout: 'table',
                    items: [
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Residual Value (R.V.)',
                            labelAlign: 'right',
                            labelWidth: 150
                        },
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'Residual Value (R.V.)',
                            hideLabel: true,
                            labelAlign: 'right',
                            labelWidth: 150,
                            name: 'ResidualValuePerUnit',
                            hideTrigger: true,
                            bind: {
                                disabled: '{!perUnitEqual.checked}',
                                value: '{ResidualValuePerUnit}'
                            }
                        }
                    ]
                },
                {
                    xtype: 'numberfield',
                    margin: '-5 0 0 5',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'ResidualValueTotal',
                    hideTrigger: true,
                    bind: {
                        value: '{ResidualValuePerUnit}'
                    }
                },
                {
                    xtype: 'numberfield',
                    margin: '-5 0 0 5',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'ResidualValueEqualTo',
                    hideTrigger: true,
                    bind: {
                        value: '{ResidualValuePerUnit}'
                    }
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'R.V.Due Date(Original)',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'RVDueDateOriginal'
                },
                {
                    xtype: 'numberfield',
                    colspan: 2,
                    margin: '-5 0 0 5',
                    fieldLabel: '% of E.Q.',
                    labelAlign: 'right',
                    labelWidth: 170,
                    name: 'PercentEQ',
                    hideTrigger: true
                },
                {
                    xtype: 'container',
                    layout: 'table',
                    items: [
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Total Receivable',
                            labelAlign: 'right',
                            labelWidth: 150
                        },
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'Total Receivable',
                            hideLabel: true,
                            labelAlign: 'right',
                            labelWidth: 150,
                            name: 'TotalReceivablePerUnit',
                            hideTrigger: true,
                            bind: {
                                disabled: '{!perUnitEqual.checked}',
                                value: '{TotalReceivablePerUnit}'
                            }
                        }
                    ]
                },
                {
                    xtype: 'numberfield',
                    margin: '-5 0 0 5',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'TotalReceivableTotal',
                    hideTrigger: true,
                    bind: {
                        value: '{TotalReceivablePerUnit}'
                    }
                },
                {
                    xtype: 'numberfield',
                    margin: '-5 0 0 5',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'TotalReceivableEqualTo',
                    hideTrigger: true,
                    bind: {
                        value: '{TotalReceivablePerUnit}'
                    }
                },
                {
                    xtype: 'container',
                    layout: 'table',
                    items: [
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Total Unearned',
                            labelAlign: 'right',
                            labelWidth: 150
                        },
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'Total Unearned',
                            hideLabel: true,
                            labelAlign: 'right',
                            labelWidth: 150,
                            name: 'TotalUnearnedPerUnit',
                            hideTrigger: true,
                            bind: {
                                disabled: '{!perUnitEqual.checked}',
                                value: '{TotalUnearnedPerUnit}'
                            }
                        }
                    ]
                },
                {
                    xtype: 'numberfield',
                    margin: '-5 0 0 5',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'TotalUnearnedTotal',
                    hideTrigger: true,
                    bind: {
                        value: '{TotalUnearnedPerUnit}'
                    }
                },
                {
                    xtype: 'numberfield',
                    margin: '-5 0 0 5',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'TotalUnearnedEqualTo',
                    hideTrigger: true,
                    bind: {
                        value: '{TotalUnearnedPerUnit}'
                    }
                }
            ]
        }
    ]

});