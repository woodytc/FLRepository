/*
 * File: app/view/Job/Application/Tab/OptionAtEnd.js
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

Ext.define('TabUserInformation.view.Job.Application.Tab.OptionAtEnd', {
    extend: 'Ext.form.Panel',
    alias: 'widget.jobapplicationtaboptionatend',

    requires: [
        'TabUserInformation.view.Job.Application.Tab.OptionAtEndViewModel',
        'TabUserInformation.view.Job.Application.Tab.OptionAtEndViewController',
        'Ext.form.field.Checkbox',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Number',
        'Ext.form.FieldSet',
        'Ext.button.Button'
    ],

    controller: 'jobapplicationtaboptionatend',
    viewModel: {
        type: 'jobapplicationtaboptionatend'
    },
    id: 'jobappoptionatend',
    bodyPadding: 10,
    title: 'Option at End of Leasing',

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
            xtype: 'checkboxfield',
            colspan: 3,
            name: 'PurchaseOption',
            boxLabel: 'Purchase Option'
        },
        {
            xtype: 'container',
            colspan: 3,
            layout: 'table',
            items: [
                {
                    xtype: 'combobox',
                    fieldLabel: 'Residual Value',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'ResidualValue',
                    autoLoadOnValue: true,
                    displayField: 'Name',
                    store: 'CommonData.residualValues',
                    valueField: 'Id'
                },
                {
                    xtype: 'numberfield',
                    width: 100,
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'ResidualValuePercent',
                    hideTrigger: true
                }
            ]
        },
        {
            xtype: 'textfield',
            colspan: 3,
            width: 425,
            fieldLabel: 'Others',
            labelAlign: 'right',
            labelWidth: 150,
            name: 'Others'
        },
        {
            xtype: 'checkboxfield',
            colspan: 3,
            name: 'Renewal',
            boxLabel: 'Renewal'
        },
        {
            xtype: 'numberfield',
            colspan: 3,
            fieldLabel: 'Term (Month)',
            labelAlign: 'right',
            labelWidth: 150,
            name: 'Term',
            hideTrigger: true
        },
        {
            xtype: 'fieldset',
            title: 'Total (Curr.)',
            layout: {
                type: 'table',
                columns: 1
            },
            items: [
                {
                    xtype: 'numberfield',
                    colspan: 1,
                    fieldLabel: 'Rental',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'RentalTotal',
                    hideTrigger: true
                },
                {
                    xtype: 'numberfield',
                    colspan: 1,
                    fieldLabel: 'Residual Value (R.V.)',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'ResidualValueTotal',
                    hideTrigger: true
                }
            ]
        },
        {
            xtype: 'fieldset',
            width: 200,
            title: 'Total (BHT.)',
            layout: {
                type: 'table',
                columns: 1
            },
            items: [
                {
                    xtype: 'numberfield',
                    labelAlign: 'right',
                    name: 'RentalTotalBHT',
                    hideTrigger: true
                },
                {
                    xtype: 'numberfield',
                    labelAlign: 'right',
                    name: 'ResidualValueTotalBHT',
                    hideTrigger: true
                }
            ]
        },
        {
            xtype: 'numberfield',
            colspan: 1,
            rowspan: 2,
            fieldLabel: '% of E.Q.',
            labelAlign: 'right',
            name: 'ResidualValuePercentEQ',
            hideTrigger: true
        },
        {
            xtype: 'checkboxfield',
            colspan: 3,
            name: 'Return',
            boxLabel: 'Return'
        },
        {
            xtype: 'fieldset',
            title: 'Total (Curr.)',
            layout: {
                type: 'table',
                columns: 1
            },
            items: [
                {
                    xtype: 'numberfield',
                    colspan: 1,
                    fieldLabel: 'Guarantee Buy Back At',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'GuaranteeBuyBackTotal',
                    hideTrigger: true
                }
            ]
        },
        {
            xtype: 'fieldset',
            width: 200,
            title: 'Total (BHT.)',
            layout: {
                type: 'table',
                columns: 1
            },
            items: [
                {
                    xtype: 'numberfield',
                    labelAlign: 'right',
                    name: 'GuaranteeBuyBackTotalBHT',
                    hideTrigger: true
                }
            ]
        },
        {
            xtype: 'numberfield',
            colspan: 1,
            fieldLabel: '% of E.Q.',
            labelAlign: 'right',
            name: 'GuaranteeBuyBackPercentEQ',
            hideTrigger: true
        },
        {
            xtype: 'container',
            layout: 'table',
            items: [
                {
                    xtype: 'textfield',
                    colspan: 3,
                    width: 500,
                    fieldLabel: 'Buyer Name',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'BuyerName'
                },
                {
                    xtype: 'button',
                    margin: '0 0 0 5',
                    iconCls: 'x-form-search-trigger',
                    listeners: {
                        click: 'onButtonBuyerClick'
                    }
                }
            ]
        }
    ]

});