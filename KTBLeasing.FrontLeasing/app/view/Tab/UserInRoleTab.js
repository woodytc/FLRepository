/*
 * File: app/view/Tab/UserInRoleTab.js
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

Ext.define('TabUserInformation.view.Tab.UserInRoleTab', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.tabuserinroletab',

    requires: [
        'TabUserInformation.view.Tab.UserInRoleTabViewModel',
        'TabUserInformation.view.Tab.UserInRoleTabViewController',
        'Ext.form.field.Text',
        'Ext.button.Button',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Column',
        'Ext.grid.plugin.RowEditing'
    ],

    controller: 'tabuserinroletab',
    viewModel: {
        type: 'tabuserinroletab'
    },
    title: 'User Role',

    items: [
        {
            xtype: 'panel',
            bodyPadding: 10,
            layout: {
                type: 'hbox',
                align: 'middle'
            },
            items: [
                {
                    xtype: 'textfield',
                    id: 'userinrole-search-text',
                    fieldLabel: 'Search Text',
                    labelAlign: 'right'
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
            id: 'userinrole-grid',
            forceFit: true,
            store: 'userInRoles',
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
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
                },
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    id: 'userinrole-pagingtoolbar',
                    ui: 'footer',
                    width: 360,
                    store: 'userInRoles',
                    displayInfo: true
                }
            ],
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'Id',
                    text: 'ID'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'RoleName',
                    text: 'ROLEID',
                    allowBlank: false,
                    editor: {
                        xtype: 'combobox',
                        id: 'userinrole-role-combobox',
                        store: 'roles',
                        queryMode: 'local',
                       // autoLoad: true,
                        valueField: 'Id',
                        displayField: 'RoleName'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'UserId',
                    text: 'USER_ID'
                }
            ],
            plugins: [
                {
                    ptype: 'rowediting',
                    pluginId: 'rowediting',
                    clicksToMoveEditor: 1
                }
            ],
            listeners: {
                //                afterrender: function (r,combo) {
                //                    console.log(r);
                //                    combo.store.Load();
                //                }
            }
        }
    ]

});