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

Ext.define('TabUserInformation.view.Common.AddressWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowaddresswindow',

    requires: [
        'TabUserInformation.view.Common.AddressWindowViewModel',
        'TabUserInformation.view.Common.AddressWindowViewController',
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
    id: 'addresswindow',
    autoShow: true,
    width: 1025,
    title: 'Address',
    modal: true,
    session: true,

    items: [
        {
            xtype: 'hiddenfield',
            itemId: 'MasterPage',
        },
        {
            xtype: 'form',
            id: 'address-form',
            bodyPadding: 10,
            items: [
                {
                    xtype: 'displayfield',
                    margin: '5 0 5 20',
                    fieldLabel: 'Customer Code',
                    name: 'CustomerId'
                },
                {
                    xtype: 'displayfield',
                    id: 'address-customername-textfield',
                    margin: '0 0 5 20',
                    width: 639,
                    fieldLabel: 'Customer Name',
                    name: 'NameTh'
                }
            ]
        },
        {
            xtype: 'gridpanel',
            height: 400,
            reference: 'addressgrid',
            //store: 'addresses',
            bind: '{addresses}',
            viewConfig: {
                emptyText: '<span class="emptyText">No rows found.</span>'
            },
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
                    dataIndex: 'AddressTh',
                    text: 'AddressThai',
                    editor: {
                        xtype: 'textareafield'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'SubdistrictId',
                    text: 'Province',
                    flex: -1,
                    editor: {
                        xtype: 'combobox',
                        autoShow: true,
                        displayField: 'Name',
                        store: 'CommonData.provinces',
                        valueField: 'Id',
                        autoLoadOnValue: true

                    },
                    renderer: function (value) {
                        var result;

                        if (value) {
                            var record = Ext.getStore('CommonData.provinces').findRecord('SubdistrictId', value);
                            
                            result = record.get('ProvinceName') + ' ' + record.get('DistrictName') + ' ' + record.get('SubdistrictName') + ' ' + record.get('Zipcode');
                        }

                        return result;
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
            //            plugins: [
            //                {
            //                    ptype: 'rowediting',
            //                    pluginId: 'rowediting'
            //                }
            //            ],
            listeners: {
                itemdblclick: 'onItemDblClick'
            },
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    id: 'pagingtoolbar-address',
                    dock: 'bottom',
                    ui: 'footer',
                    width: 360,
                    displayInfo: true,
                    bind: {
                        store: '{addresses}'
                    },
                    //store: 'addresses'
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
                    glyph: 'xf067@FontAwesome',
                    text: 'New',
                    listeners: {
                        click: 'onButtonNewClick'
                    }
                },
                {
                    xtype: 'button',
                    id: 'delete',
                    glyph: 'xf014@FontAwesome',
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