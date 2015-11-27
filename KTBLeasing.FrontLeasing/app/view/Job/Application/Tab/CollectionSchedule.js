/*
 * File: app/view/Job/Application/Tab/CollectionSchedule.js
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

Ext.define('TabUserInformation.view.Job.Application.Tab.CollectionSchedule', {
    extend: 'Ext.form.Panel',
    alias: 'widget.jobapplicationtabcollectionschedule',

    requires: [
        'TabUserInformation.view.Job.Application.Tab.CollectionScheduleViewModel',
        'TabUserInformation.view.Job.Application.Tab.CollectionScheduleViewController',
        'Ext.form.field.Date',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.feature.Summary',
        'Ext.grid.column.Number',
        'Ext.form.field.Number',
        'Ext.grid.plugin.RowEditing',
        'Ext.toolbar.Paging'
    ],

    controller: 'jobapplicationtabcollectionschedule',
    viewModel: {
        type: 'jobapplicationtabcollectionschedule'
    },
    id: 'jobappcollectionschedule',
    layout: 'auto',
    bodyPadding: 10,
    title: 'Collection Schedule',

    items: [
        {
            xtype: 'hiddenfield',
            name: 'Id'
        },
        {
            xtype: 'datefield',
            format: 'd/m/Y',
            fieldLabel: 'As Date',
            labelAlign: 'right',
            name: 'CollectionDate'
        },
        {
            xtype: 'gridpanel',
            store: 'collectionSchedules',
//            bind: {
//                store: '{collectionSchedules}'
//            },
            features: [
                {
                    ftype: 'summary'
                }
            ],
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'Collection',
                    text: 'Collection',
                    flex: -1
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'Principal',
                    text: 'Principal',
                    editor: {
                        xtype: 'numberfield',
                        name: 'Principal',
                        hideTrigger: true
                    }
                },
                {
                    xtype: 'numbercolumn',
                    summaryType: 'sum',
                    dataIndex: 'Receivable',
                    text: 'Receivable',
                    editor: {
                        xtype: 'numberfield',
                        name: 'Receivable',
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
    ],
    dockedItems: [
        {
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            ui: 'footer',
            width: 360,
            displayInfo: true,
            store: 'collectionSchedules'
//            bind: {
//                store: '{collectionSchedules}'
//            }
        }
    ]

});