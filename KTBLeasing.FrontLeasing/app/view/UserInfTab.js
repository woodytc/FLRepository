/*
 * File: app/view/UserInfTab.js
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

Ext.define('TabUserInformation.view.UserInfTab', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.userinftab',

    requires: [
        'TabUserInformation.view.UserInfTabViewModel',
        'TabUserInformation.view.UserInfTabViewController',
        'Ext.form.field.Text',
        'Ext.button.Button',
        'Ext.form.RadioGroup',
        'Ext.form.field.Radio',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.column.Column',
        'Ext.grid.plugin.RowEditing',
        'Ext.toolbar.Paging',
        'Ext.form.Panel'
    ],

    controller: 'userinftab',
    viewModel: {
        type: 'userinftab'
    },
    width: '100%',
    title: 'User Information',

    items: [
        {
            xtype: 'panel',
            height: 84,
            bodyPadding: '',
            title: 'ค้นหา',
            layout: {
                type: 'hbox',
                align: 'middle'
            },
            items: [
                {
                    xtype: 'textfield',
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
                },
                {
                    xtype: 'radiogroup',
                    width: '100%',
                    layout: {
                        type: 'checkboxgroup',
                        autoFlex: false
                    },
                    items: [
                        {
                            xtype: 'radiofield',
                            boxLabel: 'Order By Code'
                        },
                        {
                            xtype: 'radiofield',
                            margin: '0 0 0 5',
                            boxLabel: 'Order by Name'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'gridpanel',
            autoScroll: true,
            height: 500,
            title: 'User Information',
            store: 'userInformations',
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'id',
                    text: 'Id'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'Code',
                    text: 'Code'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'Title',
                    text: 'Title'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'Name',
                    text: 'Name'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'Position',
                    text: 'Position'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'MarketingGroup',
                    text: 'MarketingGroup'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'MarketingCode',
                    text: 'MarketingCode'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'Department',
                    text: 'Department'
                }
            ],
            plugins: [
                {
                    ptype: 'rowediting'
                }
            ],
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    width: 360,
                    displayInfo: true,
                    store: 'userInformations'
                }
            ]
        },
        {
            xtype: 'form',
            height: 214,
            bodyPadding: 10,
            waitTitle: '',
            items: [
                {
                    xtype: 'textfield',
                    width: 500,
                    fieldLabel: 'Address'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Telephone',
                    inputType: 'tel'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Fax'
                },
                {
                    xtype: 'textfield',
                    width: 400,
                    fieldLabel: 'Email',
                    inputType: 'email'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Exit',
                            listeners: {
                                exit: 'onButtonExit1'
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'New',
                            listeners: {
                                click: 'onButtonNewClick'
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'Edit',
                            listeners: {
                                click: 'onButtonEditClick'
                            }
                        }
                    ]
                }
            ]
        }
    ]

});