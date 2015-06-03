/*
 * File: app/view/Job/Indication/IndicationDetail.js
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

Ext.define('TabUserInformation.view.Job.Indication.IndicationDetail', {
    extend: 'Ext.window.Window',
    alias: 'widget.jobindicationindicationdetail',

    requires: [
        'TabUserInformation.view.Job.Indication.IndicationDetailViewModel',
        'TabUserInformation.view.Job.Indication.IndicationDetailViewController',
        'Ext.form.Panel',
        'Ext.form.field.Date',
        'Ext.form.FieldSet',
        'Ext.form.field.ComboBox',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.form.field.Display',
        'Ext.form.RadioGroup',
        'Ext.form.field.Radio'
    ],

    controller: 'jobindicationindicationdetail',
    viewModel: {
        type: 'jobindicationindicationdetail'
    },
    width: 750,
    bodyPadding: 10,
    title: 'Indication Detail',
    modal: true,

    items: [
        {
            xtype: 'form',
            layout: {
                type: 'table',
                columns: 1
            },
            items: [
                {
                    xtype: 'displayfield',
                    colspan: 1,
                    width: 200,
                    fieldLabel: '#',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'Id'
                },
                {
                    xtype: 'textfield',
                    width: 500,
                    fieldLabel: 'Equipment',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'EquipmentName'
                },
                {
                    xtype: 'datefield',
                    colspan: 1,
                    fieldLabel: 'Equipment Date',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'EquipmentDate'
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'table',
                        columns: 2
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            colspan: 1,
                            fieldLabel: 'Quantity',
                            labelAlign: 'right',
                            labelWidth: 150,
                            name: 'Quantity'
                        },
                        {
                            xtype: 'fieldset',
                            colspan: 1,
                            rowspan: 4,
                            height: 120,
                            margin: '0 0 0 5',
                            title: 'Simulation',
                            items: [
                                {
                                    xtype: 'combobox',
                                    width: 350,
                                    labelAlign: 'right',
                                    labelWidth: 150
                                },
                                {
                                    xtype: 'toolbar',
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
                            xtype: 'textfield',
                            colspan: 2,
                            fieldLabel: 'Cost (BHT)',
                            labelAlign: 'right',
                            labelWidth: 150,
                            name: 'Cost'
                        },
                        {
                            xtype: 'textfield',
                            colspan: 2,
                            fieldLabel: 'Cost (Curr.)',
                            labelAlign: 'right',
                            labelWidth: 150,
                            name: 'Cost'
                        },
                        {
                            xtype: 'textfield',
                            colspan: 2,
                            fieldLabel: 'Team (Months)',
                            labelAlign: 'right',
                            labelWidth: 150,
                            name: 'Term'
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Deposit %',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'Deposit'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Deposit Amount',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'DepositAmount'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'RV %',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'RV'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'RV Amount',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'RVAmount'
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'MIN IRR %',
                    labelAlign: 'right',
                    labelWidth: 150
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'IRR% (Net)',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'IRRNet'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'IRR% (Gross)',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'IRRGross'
                },
                {
                    xtype: 'checkboxfield',
                    fieldLabel: 'Abnormal Rental',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'AbnormalRental'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Rental',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'Rental'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Total (+MA)',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'TotalMA'
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Payment',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'Payment',
                    autoLoadOnValue: true,
                    displayField: 'Name',
                    store: 'CommonData.payment',
                    valueField: 'Id'
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Advance/Arrear',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'AdvanceArrear',
                    autoLoadOnValue: true,
                    displayField: 'Name',
                    store: 'CommonData.advanceArrear',
                    valueField: 'Id'
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Insurance Borne',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'InsuranceBorne',
                    autoLoadOnValue: true,
                    displayField: 'Name',
                    store: 'CommonData.InsuranceBorne',
                    valueField: 'Id'
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Condition of Lease',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'ConditionLease',
                    autoLoadOnValue: true,
                    displayField: 'Name',
                    store: 'CommonData.conditionLease',
                    valueField: 'Id'
                },
                {
                    xtype: 'combobox',
                    width: 700,
                    fieldLabel: 'Ins. Territory',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'InsTerritory',
                    autoLoadOnValue: true,
                    displayField: 'Name',
                    store: 'CommonData.InsTerritory',
                    valueField: 'Id'
                },
                {
                    xtype: 'textfield',
                    width: 700,
                    fieldLabel: 'Ins. Remark',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'InsRemark'
                },
                {
                    xtype: 'textfield',
                    width: 700,
                    fieldLabel: 'Other Condition',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'OtherCondition'
                },
                {
                    xtype: 'radiogroup',
                    width: 300,
                    fieldLabel: 'Result',
                    labelAlign: 'right',
                    labelWidth: 150,
                    items: [
                        {
                            xtype: 'radiofield',
                            name: 'Result',
                            boxLabel: 'Accept'
                        },
                        {
                            xtype: 'radiofield',
                            name: 'Result',
                            boxLabel: 'Reject'
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Result Quantity',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'ResultQuantity'
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
                },
                '->',
                {
                    xtype: 'button',
                    text: 'New Application',
                    listeners: {
                        click: 'onButtonNewClick'
                    }
                }
            ]
        }
    ]

});