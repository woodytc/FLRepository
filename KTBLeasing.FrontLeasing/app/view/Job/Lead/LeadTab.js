/*
 * File: app/view/Job/Lead/LeadTab.js
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

Ext.define('TabUserInformation.view.Job.Lead.LeadTab', {
    extend: 'Ext.form.Panel',
    alias: 'widget.jobleadleadtab',

    requires: [
        'TabUserInformation.view.Job.Lead.LeadTabViewModel',
        'TabUserInformation.view.Job.Lead.LeadTabViewController',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.feature.Grouping',
        'Ext.button.Button',
        'Ext.grid.column.Column',
        'Ext.toolbar.Paging'
    ],

    controller: 'jobleadleadtab',
    viewModel: {
        type: 'jobleadleadtab'
    },
    title: 'Lead',

    items: [
        {
            xtype: 'gridpanel',
            autoScroll: true,
            header: false,
            overlapHeader: false,
            hideHeaders: true,
            store: 'leads',
            viewConfig: {
                autoScroll: false,
                height: 768
            },
            features: [
                {
                    ftype: 'grouping',
                    hideGroupedHeader: true
                }
            ],
            listeners: {
                itemdblclick: 'onGridpanelItemDblClick'
            },
            dockedItems: [
                {
                    xtype: 'toolbar',
                    hidden: true,
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            ui: 'default-small',
                            text: 'New',
                            listeners: {
                                click: 'onButtonNewClick'
                            }
                        }
                    ]
                }
            ],
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'Year',
                    text: 'Year'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'AddressTh',
                    text: 'Name',
                    flex: -1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'VisitNo',
                    text: 'VSCode',
                    flex: -1
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
            store: 'leads'
        }
    ]

});