/*
 * File: app/view/AddressWindow.js
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

Ext.define('TabUserInformation.view.AddressWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.addresswindow',

    requires: [
        'TabUserInformation.view.AddressWindowViewModel',
        'TabUserInformation.view.AddressWindowViewController',
        'Ext.grid.Panel',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.View',
        'Ext.form.field.TextArea',
        'Ext.form.field.ComboBox',
        'Ext.grid.plugin.RowEditing',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button'
    ],

    controller: 'addresswindow',
    viewModel: {
        type: 'addresswindow'
    },
    height: 450,
    width: 1025,
    title: 'Address',
    modal: true,

    items: [
        {
            xtype: 'textfield',
            margin: '5 0 5 20',
            fieldLabel: 'Customer Code'
        },
        {
            xtype: 'textfield',
            margin: '0 0 5 20',
            width: 639,
            fieldLabel: 'Customer Name'
        },
        {
            xtype: 'gridpanel',
            height: 300,
            store: 'addresses',
            columns: [
                {
                    xtype: 'rownumberer',
                    width: 51,
                    text: 'No'
                },
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'AddressEng',
                    text: 'AddressEng',
                    editor: {
                        xtype: 'textareafield'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'AddressThai',
                    text: 'AddressThai',
                    editor: {
                        xtype: 'textareafield'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'Province',
                    text: 'Province',
                    editor: {
                        xtype: 'combobox'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 74,
                    dataIndex: 'Zip',
                    text: 'Zip',
                    editor: {
                        xtype: 'textfield'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 120,
                    dataIndex: 'Telephone',
                    text: 'Telephone',
                    editor: {
                        xtype: 'textfield'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 120,
                    dataIndex: 'Fax',
                    text: 'Fax',
                    flex: -1,
                    editor: {
                        xtype: 'textfield'
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
            xtype: 'toolbar',
            dock: 'bottom',
            items: [
                {
                    xtype: 'button',
                    text: 'New'
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
    ]

});