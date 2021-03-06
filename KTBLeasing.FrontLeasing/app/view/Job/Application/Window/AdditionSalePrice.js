/*
 * File: app/view/Job/Application/Window/AdditionSalePrice.js
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

Ext.define('TabUserInformation.view.Job.Application.Window.AdditionSalePrice', {
    extend: 'Ext.window.Window',
    alias: 'widget.jobapplicationwindowadditionsaleprice',

    requires: [
        'TabUserInformation.view.Job.Application.Window.AdditionSalePriceViewModel',
        'TabUserInformation.view.Job.Application.Window.AdditionSalePriceViewController',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.column.Column',
        'Ext.form.Panel',
        'Ext.form.field.Number'
    ],

    controller: 'jobapplicationwindowadditionsaleprice',
    viewModel: {
        type: 'jobapplicationwindowadditionsaleprice'
    },
    height: 600,
    width: 800,
    title: 'Addition Sale Price',

    items: [
        {
            xtype: 'gridpanel',
            store: 'equipmentLists',
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'Quantity',
                    text: 'Quantity'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'EquipmentName',
                    text: 'EquipmentName',
                    flex: -1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'UnitPrice',
                    text: 'UnitPrice'
                }
            ],
            listeners: {
                selectionchange: 'onGridpanelSelectionChange'
            }
        }
    ],
    dockedItems: [
        {
            xtype: 'form',
            dock: 'bottom',
            bodyPadding: 10,
            layout: {
                type: 'table',
                columns: 2
            },
            items: [
                {
                    xtype: 'container',
                    rowspan: 3,
                    height: 90,
                    items: [
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'Guarantee Buy Back',
                            labelAlign: 'right',
                            labelWidth: 150,
                            name: 'GuaranteeBuyBack',
                            hideTrigger: true
                        }
                    ]
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Sale Price',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'UnitPrice',
                    hideTrigger: true
                },
                {
                    xtype: 'numberfield',
                    colspan: 2,
                    fieldLabel: 'VAT',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'VAT',
                    hideTrigger: true
                },
                {
                    xtype: 'numberfield',
                    colspan: 2,
                    fieldLabel: 'Total',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'Total',
                    hideTrigger: true
                }
            ]
        }
    ]

});