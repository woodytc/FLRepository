/*
* File: app/view/Window/AddressWindow.js
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

Ext.define('TabUserInformation.view.Window.AddressWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowaddresswindow',

    requires: [
        'TabUserInformation.view.Window.AddressWindowViewModel',
        'TabUserInformation.view.Window.AddressWindowViewController',
        'Ext.form.Panel',
        'Ext.grid.Panel',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.View',
        'Ext.form.field.TextArea',
        'Ext.form.field.ComboBox',
        'Ext.grid.plugin.RowEditing',
        'Ext.toolbar.Paging',
        'Ext.button.Button'
    ],

    controller: 'windowaddresswindow',
    viewModel: {
        type: 'windowaddresswindow'
    },
    autoShow: true,
    width: 1025,
    title: 'Address',
    modal: true,

    items: [
        {
            xtype: 'form',
            id: 'address-form',
            bodyPadding: 10,
            items: [
                {
                    xtype: 'textfield',
                    margin: '5 0 5 20',
                    fieldLabel: 'Customer Code',
                    readOnly: true,
                    name: 'CustomerCode'
                },
                {
                    xtype: 'textfield',
                    id: 'address-customername-textfield',
                    margin: '0 0 5 20',
                    width: 639,
                    fieldLabel: 'Customer Name',
                    readOnly: true,
                    name: 'CustomerThaiName'
                }
            ]
        },
        {
            xtype: 'gridpanel',
            height: 400,
            id: 'addressgrid',
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
                    dataIndex: 'AddressEn',
                    text: 'AddressEng',
                    editor: {
                        xtype: 'textareafield'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'AddressTh',
                    text: 'AddressThai',
                    editor: {
                        xtype: 'textareafield'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'Province',
                    text: 'Province',
                    flex: -1,
                    editor: {
                        xtype: 'combobox',
                        autoShow: true,
                        displayField: 'Name',
                        store: 'CommonData.provinces',
                        valueField: 'Id',
                        autoLoadOnValue: true

                    }
                }
            //                ,
            //                {
            //                    xtype: 'gridcolumn',
            //                    width: 74,
            //                    dataIndex: 'Zip',
            //                    text: 'Zip',
            //                    editor: {
            //                        xtype: 'textfield'
            //                    }
            //                },
            //                {
            //                    xtype: 'gridcolumn',
            //                    width: 120,
            //                    dataIndex: 'Telephone',
            //                    text: 'Telephone',
            //                    editor: {
            //                        xtype: 'textfield'
            //                    }
            //                },
            //                {
            //                    xtype: 'gridcolumn',
            //                    width: 120,
            //                    dataIndex: 'Fax',
            //                    text: 'Fax',
            //                    flex: -1,
            //                    editor: {
            //                        xtype: 'textfield'
            //                    }
            //                }
            ],
            plugins: [
                {
                    ptype: 'rowediting',
                    pluginId: 'rowediting'
                }
            ],
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    ui: 'footer',
                    width: 360,
                    displayInfo: true,
                    store: 'addresses'
                }
            ]
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            id: 'addresstoolbar',
            ui: 'footer',
            items: [
                {
                    xtype: 'button',
                    id: 'new',
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
                },
                {
                    xtype: 'button',
                    id: 'delete',
                    text: 'Delete',
                    listeners: {
                        click: 'onButtonDeleteClick'
                    }
                },
                {
                    xtype: 'button',
                    hidden: true,
                    id: 'select',
                    text: 'Select'
                }
            ]
        }
    ]

});