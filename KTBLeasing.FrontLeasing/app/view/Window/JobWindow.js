/*
 * File: app/view/Window/JobWindow.js
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

Ext.define('TabUserInformation.view.Window.JobWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowjobwindow',

    requires: [
        'TabUserInformation.view.Window.JobWindowViewModel',
        'TabUserInformation.view.Window.JobWindowViewController',
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.tree.Panel',
        'Ext.tree.View',
        'Ext.grid.Panel',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.grid.column.Boolean',
        'Ext.grid.View'
    ],

    controller: 'windowjobwindow',
    viewModel: {
        type: 'windowjobwindow'
    },
    autoShow: true,
    title: 'Job Tree',
    maximized: true,
    modal: true,

    items: [
        {
            xtype: 'form',
            layout: 'auto',
            bodyPadding: 10,
            items: [
                {
                    xtype: 'textfield',
                    width: 200,
                    fieldLabel: 'Job #',
                    labelWidth: 120
                },
                {
                    xtype: 'textfield',
                    width: 500,
                    fieldLabel: 'Customer Name',
                    labelWidth: 120
                },
                {
                    xtype: 'textfield',
                    width: 500,
                    fieldLabel: 'Marketing Officer',
                    labelWidth: 120
                }
            ]
        },
        {
            xtype: 'panel',
            height: 500,
            layout: 'border',
            items: [
                {
                    xtype: 'treepanel',
                    collapseMode: 'header',
                    region: 'west',
                    width: 300,
                    collapseDirection: 'left',
                    collapsible: false,
                    title: 'Job Tree',
                    columnLines: false,
                    root: {
                        expanded: true,
                        text: 'Job',
                        children: [
                            {
                                text: 'Visiting & Calling',
                                children: [
                                    {
                                        text: '2014',
                                        children: [
                                            {
                                                text: 'VS2014000001',
                                                leaf: true
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                text: 'Information for Indication',
                                children: [
                                    {
                                        text: '2014',
                                        children: [
                                            {
                                                text: 'IF2014000001',
                                                leaf: true
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                text: 'Information for Equipment',
                                children: [
                                    {
                                        text: '2014',
                                        children: [
                                            {
                                                text: 'ID2014000001',
                                                leaf: true
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                text: 'Application',
                                children: [
                                    {
                                        text: '2014',
                                        children: [
                                            {
                                                text: '14-0001-01',
                                                leaf: true
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    viewConfig: {
                        listeners: {
                            itemdblclick: 'onViewItemDblClick'
                        }
                    }
                },
                {
                    xtype: 'gridpanel',
                    region: 'center',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'string',
                            text: 'String'
                        },
                        {
                            xtype: 'numbercolumn',
                            dataIndex: 'number',
                            text: 'Number'
                        },
                        {
                            xtype: 'datecolumn',
                            dataIndex: 'date',
                            text: 'Date'
                        },
                        {
                            xtype: 'booleancolumn',
                            dataIndex: 'bool',
                            text: 'Boolean'
                        }
                    ]
                }
            ]
        }
    ]

});