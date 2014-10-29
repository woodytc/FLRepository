/*
 * File: app/view/Window/PowerOfAttorneyWindow.js
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

Ext.define('TabUserInformation.view.Window.PowerOfAttorneyWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowpowerofattorneywindow',

    requires: [
        'TabUserInformation.view.AffidavitWindowViewModel1',
        'TabUserInformation.view.AffidavitWindowViewController1',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.plugin.RowEditing',
        'Ext.toolbar.Paging',
        'Ext.grid.column.RowNumberer',
        'Ext.form.field.Date',
        'Ext.form.field.TextArea',
        'Ext.button.Button'
    ],

    controller: 'windowpowerofattorneywindow',
    viewModel: {
        type: 'windowpowerofattorneywindow'
    },
    width: 762,
    title: 'Power of Attorney',
    modal: true,

    items: [
        {
            xtype: 'gridpanel',
            height: 400,
            store: 'affidavits',
            plugins: [
                {
                    ptype: 'rowediting'
                }
            ],
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    ui: 'footer',
                    width: 360,
                    displayInfo: true,
                    store: 'affidavits'
                }
            ],
            columns: [
                {
                    xtype: 'rownumberer',
                    width: 51,
                    text: 'No'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'DocumentDate',
                    text: 'DocumentDate',
                    editor: {
                        xtype: 'datefield'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'ExpireDate',
                    text: 'ExpireDate',
                    editor: {
                        xtype: 'datefield'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'ReceivedDate',
                    text: 'ReceivedDate',
                    editor: {
                        xtype: 'datefield'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'Remark',
                    text: 'Remark',
                    flex: 1,
                    editor: {
                        xtype: 'textareafield'
                    }
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
                    text: 'New'
                },
                {
                    xtype: 'button',
                    text: 'Delete',
                    listeners: {
                        click: 'onButtonDeleteClick1'
                    }
                },
                {
                    xtype: 'button',
                    text: 'View Document'
                }
            ]
        }
    ]

});