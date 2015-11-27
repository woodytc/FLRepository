/*
 * File: app/view/Popup/CusInfPopup.js
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

Ext.define('TabUserInformation.view.Customer.CusInfPopup', {
    extend: 'Ext.window.Window',
    alias: 'widget.popupcusinfpopup',

    requires: [
        'TabUserInformation.view.Customer.CusInfPopupViewModel',
        'TabUserInformation.view.Customer.CusInfPopupViewController',
        'Ext.form.field.Text',
        'Ext.button.Button',
        'Ext.form.RadioGroup',
        'Ext.form.field.Radio',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Column',
        'Ext.grid.plugin.RowExpander',
        'Ext.XTemplate'
    ],

    controller: 'customercusinfpopup',
    viewModel: {
        type: 'customercusinfpopup'
    },
    //width: 800,
    layout: 'anchor',
    title: 'Customer Information',
    modal: true,

    requires: [
        'TabUserInformation.view.Customer.CusInfPopupViewModel',
        'TabUserInformation.view.Customer.CusInfPopupViewController',
        'Ext.form.field.Date',
        'Ext.grid.Panel',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.grid.column.Boolean',
        'Ext.grid.View',
        'Ext.toolbar.Paging',
        'Ext.grid.plugin.RowExpander',
        'Ext.XTemplate',
        'Ext.tab.Panel',
        'Ext.tab.Tab',
        'Ext.form.Panel',
        'Ext.form.field.TextArea',
        'Ext.form.FieldSet',
        'Ext.form.CheckboxGroup',
        'Ext.form.field.Checkbox',
        'Ext.form.field.Number'
    ],

    controller: 'popupcusinfpopup',
    viewModel: {
        type: 'popupcusinfpopup'
    },
    //width: Ext.getBody().getViewSize().width*0.8,
    layout: 'anchor',
    title: 'Customer Information',
    modal: true,
    resizable: false,
    items: [
        {
            xtype: 'panel',
            id: 'cusinftab2',
            titleCollapse: false,
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
                            width: 300,
                            layout: {
                                type: 'checkboxgroup',
                                autoFlex: false
                            },
                            items: [
                                {
                                    xtype: 'radiofield',
                                    boxLabel: 'Code'
                                },
                                {
                                    xtype: 'radiofield',
                                    margin: '0 0 0 5',
                                    boxLabel: 'English Name'
                                },
                                {
                                    xtype: 'radiofield',
                                    margin: '0 0 0 5',
                                    boxLabel: 'Thai Name'
                                }
                            ]
                        },
                        {
                            xtype: 'checkboxfield',
                            flex: 0,
                            boxLabel: 'Partial'
                        }
                    ]
                },
                {
                    xtype: 'gridpanel',
                    autoScroll: true,
                    height: 500,
                    width: '100%',
                    store: 'CommonData.cusinfopopup',
                    columnLines: true,
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'CustomerCode',
                            locked   : true,
                            text: 'Code',
                            width: 50

                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'TitleNameTh',
                            locked   : true,
                            text: 'Title name',
                            width: 100
                        }, 
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'NameEng',
                            locked   : true,
                            text: 'Name Eng',
                            width: 150
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'NameTh',
                            locked   : true,
                            text: 'Name Thai',
                            width: 150
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'MarketingOfficer',
                            locked   : true,
                            text: 'Marketing Officer',
                            width: 100
                        },
                        {
                            xtype: 'gridcolumn',
                            text: 'Contact infomation',
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'SubdistrictId',
                                    text: 'CustomerEngType',
                                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                        return record.get('AddressTh') +' '+record.get('ProvinceName') +' '+record.get('DistrictName') +' '+record.get('SubdistrictName') +' '+record.get('Zipcode');
                                    },
                                    width:250
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'ContactTitleTh',
                                    text: 'Contact Person',
                                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                        return record.get('ContactTitleTh') +record.get('ContactPersonFirstName') +' '+record.get('ContactPersonLastName') ;
                                    },
                                    width: 200
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'Telephone',
                                    text: 'PhoneNo'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'FaxNo',
                                    text: 'Fax'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'Email',
                                    text: 'E-Mail',
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
                            store: 'customerInformations'
                        }
                    ],
                    listeners: {
                        itemdblclick: 'onItemDblClick'
                    }
                },
                {
                    xtype: 'toolbar',
                    ui: 'footer',
                    itemId: 'custinf-toolbar',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Edit',
                            listeners: {
                                click: 'onButtonEditClick1'
                            }
                        }
                    ]
                }
            ]
        }
    ],
    listeners: {
        beforerender: 'onCusinftabBeforeRender'
    }

});
