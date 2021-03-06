/*
 * File: app/view/Job/Application/Window/InsurancePolicy.js
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

Ext.define('TabUserInformation.view.Job.Application.Window.InsurancePolicy', {
    extend: 'Ext.window.Window',
    alias: 'widget.jobapplicationwindowinsurancepolicy',

    requires: [
        'TabUserInformation.view.Job.Application.Window.InsurancePolicyViewModel',
        'TabUserInformation.view.Job.Application.Window.InsurancePolicyViewController',
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.column.Column',
        'Ext.toolbar.Paging'
    ],

    controller: 'jobapplicationwindowinsurancepolicy',
    viewModel: {
        type: 'jobapplicationwindowinsurancepolicy'
    },
    autoShow: true,
    height: 600,
    width: 800,
    title: 'Insurance Policy',

    items: [
        {
            xtype: 'form',
            layout: 'auto',
            bodyPadding: 10,
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Policy No',
                    labelAlign: 'right'
                }
            ],
            dockedItems: [
                {
                    xtype: 'gridpanel',
                    dock: 'bottom',
                    autoScroll: true,
                    manageHeight: false,
                    store: 'insurancePolicies',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'PolicyNo',
                            text: 'PolicyNo',
                            flex: -1
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'ReceiveDate',
                            text: 'ReceiveDate'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'PayDate',
                            text: 'PayDate'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'Amount',
                            text: 'Amount'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'Rate',
                            text: 'Rate'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'ContactNo',
                            text: 'ContactNo'
                        }
                    ],
                    listeners: {
                        itemdblclick: 'onGridpanelItemDblClick'
                    }
                }
            ]
        }
    ],
    dockedItems: [
        {
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            ui: 'footer',
            width: 360,
            displayInfo: true,
            store: 'insurancePolicies'
        }
    ]

});