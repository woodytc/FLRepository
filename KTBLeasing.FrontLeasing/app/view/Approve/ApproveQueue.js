/*
 * File: app/view/Approve/ApproveQueue.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('TabUserInformation.view.Approve.ApproveQueue', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.approveapprovequeue',

    requires: [
        'TabUserInformation.view.Approve.ApproveQueueViewModel',
        'TabUserInformation.view.Approve.ApproveQueueViewController',
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.grid.Panel',
        'Ext.view.Table',
        'Ext.grid.column.Date',
        'Ext.button.Button',
        'Ext.toolbar.Paging',
        'Ext.ux.grid.SubTable',
        'TabUserInformation.model.InformationForIndication',
        'TabUserInformation.model.Approval'
    ],

    id: 'approveapprovequeue',
    controller: 'approveapprovequeue',
    viewModel: {
        type: 'approveapprovequeue'
    },
    title: 'Approve Queue',

    dockedItems: [
        {
            xtype: 'form',
            dock: 'top',
            defaults: {
                labelAlign: 'right',
                
            },
            layout: 'auto',
            bodyPadding: 10,
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Search',
                    enableKeyEvents: true,
                    listeners: {
                        keyup: 'onTextfieldKeyup'
                    }
                }
            ]
        },
        {
            xtype: 'toolbar',
            dock: 'bottom',
            ui: 'footer',
            items: [
                {
                    xtype: 'button',
                    ui: 'default-small',
                    text: 'Approve',
                    listeners: {
                        click: 'onButtonApproveClick'
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
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            ui: 'footer',
            width: 360,
            displayInfo: true,
            store: 'informationForIndications'
        }
    ],
    items: [
        {
            xtype: 'gridpanel',
            forceFit: true,
            store: 'informationForIndications',
            columns: [
                {
                    xtype: 'datecolumn',
                    dataIndex: 'RequestDate',
                    text: 'Request Date',
                    format: 'm/j/Y'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'PrimaryJob',
                    text: 'Primary Job'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'IndustryCode',
                    text: 'Industry Code'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'MarketingCode',
                    text: 'Marketing Code'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'CustomerId',
                    text: 'Customer Id'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'TitleNameTh',
                    text: 'Title Name Th'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'FirstNameTh',
                    text: 'First Name Th'
                }
            ],
            listeners: {
                itemdblclick: 'onViewItemDblClick'
            },
//            plugins: {
//                ptype: 'subtable',
//                association: 'Approval',
//                headerWidth: 32,
//                columns: [{
//                    text: 'ApprovedBy',
//                    dataIndex: 'ApprovedBy',
//                    width: 100
//                }]
//            }
        }
    ]

});