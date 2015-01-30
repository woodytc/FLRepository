/*
 * File: app/view/Job/Application/ApplicationTab.js
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

Ext.define('TabUserInformation.view.Job.Application.ApplicationTab', {
    extend: 'Ext.form.Panel',
    alias: 'widget.jobapplicationapplicationtab',

    requires: [
        'TabUserInformation.view.Job.Application.ApplicationTabViewModel',
        'TabUserInformation.view.Job.Application.ApplicationTabViewController',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.feature.Grouping',
        'Ext.grid.column.Column',
        'Ext.button.Button',
        'Ext.toolbar.Paging'
    ],

    controller: 'jobapplicationapplicationtab',
    viewModel: {
        type: 'jobapplicationapplicationtab'
    },
    title: 'Application',

    items: [
        {
            xtype: 'gridpanel',
            autoScroll: true,
            height: 768,
            hideHeaders: true,
            store: 'applications',
            viewConfig: {
                autoScroll: false
            },
            features: [
                {
                    ftype: 'grouping',
                    hideGroupedHeader: true
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
                    dataIndex: 'Name',
                    text: 'Name',
                    flex: -1
                }
            ],
            listeners: {
                itemdblclick: 'onGridpanelItemDblClick'
            },
            dockedItems: [
                {
                    xtype: 'toolbar',
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
            store: 'applications'
        }
    ]

});