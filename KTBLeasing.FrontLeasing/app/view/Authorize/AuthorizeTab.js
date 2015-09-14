/*
 * File: app/view/Tab/AuthorizeTab.js
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

Ext.define('TabUserInformation.view.Authorize.AuthorizeTab', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.tabauthorizetab',

    requires: [
        'TabUserInformation.view.Authorize.AuthorizeTabViewModel',
        'TabUserInformation.view.Authorize.AuthorizeTabViewController',
        'Ext.form.field.Text',
        'Ext.button.Button',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.plugin.RowEditing',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Column',
        'Ext.grid.feature.Grouping'
    ],

    controller: 'tabauthorizetab',
    viewModel: {
        type: 'tabauthorizetab'
    },
    title: 'Authorize',
    layout: 'border',
   
    items: [
        {
            xtype: 'panel',
            region: 'north',
            bodyPadding: 10,
            layout: {
                type: 'hbox',
                align: 'middle'
            },
            items: [
                {
                    xtype: 'textfield',
                    id: 'search-text',
                    fieldLabel: 'Search by UserID',
                    labelAlign: 'right',
                    labelWidth: 150,
                    width: 500
                },
                {
                    xtype: 'button',
                    margin: '0 0 0 5',
                    text: 'Search',
                    listeners: {
                        click: 'onButtonSearchClick'
                    }
                }
            ]
        },
        {
            xtype: 'gridpanel',
            region: 'center',
            id: 'grid',
            store: 'authorizes',
            selModel: Ext.create('Ext.selection.CheckboxModel'),
            autoScroll: true,
            plugins: [
                {
                    ptype: 'rowediting',
                    pluginId: 'rowediting',
                    clicksToMoveEditor: 1
                }
            ],
            features: [
                {
                    ftype: 'grouping',
                    hideGroupedHeader: true
                }
            ],
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    id: 'authorizes-pagingtoolbar',
                    ui: 'footer',
                    width: 360,
                    store: 'authorizes',
                    displayInfo: true
                },
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            id: 'btnadd',
                            text: 'Add',
                            listeners: {
                                click: 'onButtonAddClick'
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'Save',
                            listeners: {
                                click: 'onButtonSaveClick'
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'Delete',
                            listeners: {
                                click: 'onButtonDeleteClick'
                            }
                        }
                    ]
                }
            ],
            columns: [
                {
                    xtype: 'rownumberer'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'UserId',
                    flex: -1,
                    text: 'User',
                    editor: {
                        xtype: 'textfield',
                        allowBlank: false,
                        regex: /^[a-zA-Z]\S*.[_].[{2,}a-zA-Z]$/,
                        emptyText: '[��͡������]'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'DepCode',
                    text: 'DepCode',
                    flex: -1,
                    editor: {
                        xtype: 'textfield',
                        allowBlank: false,
                        emptyText: '[��͡������]'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'Active',
                    text: 'Active',
                    flex: -1,
                    editor: {
                        xtype: 'checkboxfield'
                    }
                }
            ],
            listeners: {
                //beforeedit: 'onBeforeEditGrid',
                //edit:'onEditGrid',
                //cancelEdit: 'onCancelEdit'
            }
        }
    ]

});