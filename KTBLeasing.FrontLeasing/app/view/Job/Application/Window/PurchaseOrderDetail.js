/*
 * File: app/view/Job/Application/Window/PurchaseOrderDetail.js
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

Ext.define('TabUserInformation.view.Job.Application.Window.PurchaseOrderDetail', {
    extend: 'Ext.window.Window',
    alias: 'widget.jobapplicationwindowpurchaseorderdetail',

    requires: [
        'TabUserInformation.view.Job.Application.Window.PurchaseOrderDetailViewModel',
        'TabUserInformation.view.Job.Application.Window.PurchaseOrderDetailViewController',
        'Ext.form.Panel',
        'Ext.form.field.Date',
        'Ext.form.field.ComboBox',
        'Ext.button.Button',
        'Ext.form.field.TextArea',
        'Ext.toolbar.Toolbar',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.column.Column',
        'Ext.form.field.Number',
        'Ext.grid.plugin.RowEditing'
    ],

    controller: 'jobapplicationwindowpurchaseorderdetail',
    viewModel: {
        type: 'jobapplicationwindowpurchaseorderdetail'
    },
    autoShow: true,
    height: 600,
    width: 800,
    title: 'Purchase Order Detail',
    modal: true,

    items: [
        {
            xtype: 'form',
            bodyPadding: 10,
            layout: {
                type: 'table',
                columns: 2
            },
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'PO No',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'PONo'
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'Po Date',
                    labelAlign: 'right',
                    name: 'PODate'
                },
                {
                    xtype: 'combobox',
                    colspan: 2,
                    width: 500,
                    fieldLabel: 'Seller',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'SellerId',
                    autoLoadOnValue: true,
                    displayField: 'Name',
                    store: 'CommonData.sellers',
                    valueField: 'Id'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Quotation No. 1',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'QuotationNo1'
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'Quotation Date',
                    labelAlign: 'right',
                    name: 'QuotationDate1'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Quotation No. 2',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'QuotationNo2'
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'Quotation Date',
                    labelAlign: 'right',
                    name: 'QuotationDate2'
                },
                {
                    xtype: 'combobox',
                    colspan: 2,
                    fieldLabel: 'Po Type',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'POType',
                    autoLoadOnValue: true,
                    displayField: 'Name',
                    store: 'CommonData.purchaseOrders',
                    valueField: 'Id'
                },
                {
                    xtype: 'container',
                    colspan: 2,
                    margin: '',
                    layout: 'table',
                    items: [
                        {
                            xtype: 'textfield',
                            colspan: 1,
                            fieldLabel: 'Signer Name',
                            labelAlign: 'right',
                            labelWidth: 150,
                            name: 'SignerName'
                        },
                        {
                            xtype: 'button',
                            margin: '0 0 0 5',
                            ui: 'default-small',
                            iconCls: 'x-form-search-trigger',
                            listeners: {
                                click: 'onButtonSignerClick'
                            }
                        }
                    ]
                },
                {
                    xtype: 'textareafield',
                    colspan: 2,
                    width: 600,
                    fieldLabel: 'Ref PO',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'RefPO'
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
                    ui: 'default-small',
                    text: 'Add',
                    listeners: {
                        click: 'onButtonAddClick'
                    }
                },
                {
                    xtype: 'button',
                    ui: 'default-small',
                    text: 'Insert',
                    listeners: {
                        click: 'onButtonInsertClick'
                    }
                },
                {
                    xtype: 'button',
                    ui: 'default-small',
                    text: 'Delete',
                    listeners: {
                        click: 'onButtonDeleteClick'
                    }
                }
            ]
        },
        {
            xtype: 'gridpanel',
            dock: 'bottom',
            height: 250,
            store: 'equipmentLists',
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'Quantity',
                    text: 'Quantity',
                    editor: {
                        xtype: 'numberfield',
                        name: 'Quantity',
                        inputType: 'number',
                        hideTrigger: true
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'EquipmentName',
                    text: 'EquipmentName',
                    flex: -1,
                    editor: {
                        xtype: 'textfield',
                        name: 'EquipmentName'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'UnitPrice',
                    text: 'UnitPrice',
                    editor: {
                        xtype: 'numberfield',
                        name: 'UnitPrice',
                        inputType: 'number',
                        hideTrigger: true
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'Total',
                    text: 'Total',
                    editor: {
                        xtype: 'numberfield',
                        name: 'Total',
                        inputType: 'number',
                        hideTrigger: true
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'VAT',
                    text: 'VAT',
                    editor: {
                        xtype: 'numberfield',
                        name: 'VAT',
                        inputType: 'number',
                        hideTrigger: true
                    }
                }
            ],
            plugins: [
                {
                    ptype: 'rowediting'
                }
            ]
        }
    ]

});