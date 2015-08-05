﻿/*
 * File: app/view/Restructure/RestructureWindow.js
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

Ext.define('TabUserInformation.view.Restructure.RestructureWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.restructurerestructurewindow',

    requires: [
        'TabUserInformation.view.Restructure.RestructureWindowViewModel',
        'TabUserInformation.view.Restructure.RestructureWindowViewController',
        'Ext.form.Panel',
        'Ext.form.field.Hidden',
        'Ext.form.field.Display',
        'Ext.form.field.Number',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.column.Date',
        'Ext.grid.column.Number',
        'Ext.toolbar.Paging',
        'Ext.grid.plugin.RowEditing',
        'Ext.button.Button'
    ],

    controller: 'restructurerestructurewindow',
    viewModel: {
        type: 'restructurerestructurewindow'
    },
    height: 600,
    width: 800,
    layout: 'border',
    //bodyPadding: 10,
    title: 'FL Restructure (Installment)',
    maximized: true,
    modal: true,
    session: true,
//    tools: [
//        {
//            itemId: 'refresh',
//            type: 'refresh',
//            callback: function() {
//                // do refresh
//            }
//        }
//    ],

    items: [
        {
            xtype: 'form',
            region: 'north',
            bodyPadding: 5,
            defaults: {
                margin: '5 5 5 5 ',
                labelWidth: 150,
                labelAlign: 'right'
            },
            layout: {
                type: 'table',
                columns: 2
            },
            items: [
                {
                    xtype: 'hiddenfield',
                    name: 'flag'
                },
                {
                    xtype: 'hiddenfield',
                    name: 'save',
                    value: 'N'
                },
                {
                    xtype: 'hiddenfield',
                    name: 'Rate',
                    value: 'false'
                },
                {
                    xtype: 'hiddenfield',
                    name: 'CopyAgreement'
                },
                {
                    xtype: 'hiddenfield',
                    fieldLabel: 'ID',
                    name: 'Id'
                },
                {
                    xtype: 'hiddenfield',
                    fieldLabel: 'SEQ',
                    name: 'SEQ'
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Agreement',
                    name: 'Agreement'
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Customer',
                    name: 'Customer'
                },
                {
                    xtype: 'displayfield',
                    renderer: function (value, displayField) {
                        return Ext.Date.format(value, 'd/m/Y');
                    },
                    fieldLabel: 'Restructure Date',
                    name: 'RestructureDate'
                },
                {
                    xtype: 'hiddenfield',
                    name: 'OS_PR'
                },
                {
                    xtype: 'hiddenfield',
                    name: 'New_OS_PR'
                },
                {
                    xtype: 'hiddenfield',
                    name: 'FlatRate'
                },
                {
                    xtype: 'hiddenfield',
                    name: 'Day'
                },
                {
                    xtype: 'hiddenfield',
                    name: 'Interest'
                },
                {
                    xtype: 'hiddenfield',
                    name: 'UnpaidVAT'
                },
                {
                    xtype: 'hiddenfield',
                    name: 'Penalty'
                },
                {
                    xtype: 'hiddenfield',
                    name: 'DebitNote'
                },
                {
                    xtype: 'hiddenfield',
                    name: 'NewFlatRate'
                },
                {
                    xtype: 'hiddenfield',
                    name: 'NewFirstDueDate'
                },
                {
                    xtype: 'hiddenfield',
                    name: 'SubsequentDueDay'
                },
                {
                    xtype: 'hiddenfield',
                    name: 'NewTerm'
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Effective Rate',
                    name: 'EffectiveRateDisplay',
                    decimalPrecision: 4,
                    step: 0.0001,
                    allowBlank: false
                },
                {
                    xtype: 'hiddenfield',
                    name: 'EffectiveRate'
                },
                {
                    xtype: 'hiddenfield',
                    name: 'NewCheck'
                },
                {
                    xtype: 'hiddenfield',
                    name: 'CreateBy'
                }
            ]
        },
        {
            xtype: 'gridpanel',
            //height: 600,
            autoScroll: true,
            id: 'grid-installment',
            title: 'Installment',
            session: true,
            region: 'center',
            forceFit: true,
            columnLines: true,
            bind: {
                store: '{installments}'
            },
            viewConfig: {
                enableTextSelection: true
            },
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'InstallNo',
                    text: 'Install No',
                    //flex: 1
                },
                {
                    xtype: 'datecolumn',
                    dataIndex: 'InstallmentDate',
                    text: 'Date',
                    format: 'd/m/Y',
//                    width: 100
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'InstallmentBeforeVAT',
                    text: 'Installment Before Vat',
                    editor: {
                        xtype: 'numberfield',
                        selectOnFocus: true
                    },
                    //width: 200
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'VAT',
                    text: 'VAT',
//                    width: 100
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'Total',
                    text: 'Total',
//                    width: 100
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'Principle',
                    text: 'Principle',
//                    width: 100
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'Interest',
                    text: 'Int.',
//                    width: 100
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'OS_PR',
                    text: 'O/S Principle',
                    //width: 250
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
                            itemId: 'calculateButton',
                            margin: 5,
                            text: 'คำนวนหา Effective Rate ใหม่',
                            listeners: {
                                click: 'onCalculate'
                            }
                        },
                        {
                            xtype: 'button',
                            itemId: 'calculateEffectiveRateButton',
                            margin: 5,
                            text: 'คำนวณจาก Efferive Rate เดิม',
                            listeners: {
                                click: 'onCalculateEffectiveRate'
                            }
                        },
                        {
                            xtype: 'button',
                            itemId: 'saveButton',
                            margin: 5,
                            text: 'Save',
                            listeners: {
                                click: 'onSave'
                            }
                        },
                        {
                            xtype: 'button',
                            itemId: 'printButton',
                            margin: 5,
                            text: 'Print',
                            listeners: {
                                click: 'onPrint'
                            }
                        }
                    ]
                },
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    ui: 'footer',
                    width: 360,
                    displayInfo: true,
                    bind: {
                        store: '{installments}'
                    },
                    hidden: true
                }
            ],
            plugins: [
                {
                    ptype: 'cellediting',
                    pluginId: 'celledit'
                }
            ]
        }
    ],
    listeners: {
        beforeclose: 'onBeforeClose',
        close: 'onClose'
    }
});