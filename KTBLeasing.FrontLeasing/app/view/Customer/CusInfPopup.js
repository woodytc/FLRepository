/*
 * File: app/view/Customer/CusInfPopup.js
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
    alias: 'widget.customercusinfpopup',

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
        'Ext.grid.column.Column'
    ],

    controller: 'customercusinfpopup',
    viewModel: {
        type: 'customercusinfpopup'
    },
    width: 800,
    layout: 'anchor',
    title: 'Customer Information',
    modal: true,

    items: [
        {
            xtype: 'panel',
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
                        }
                    ]
                },
                {
                    xtype: 'gridpanel',
                    autoScroll: true,
                    height: 500,
                    store: 'customerInformations',
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
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'CustomerCode',
                            text: 'CustomerCode'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'CustomerEngType',
                            text: 'CustomerEngType'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'CustomerEngName',
                            text: 'CustomerEngName',
                            flex: -1
                        }
                    ],
                    listeners: {
                        itemdblclick: 'onGridpanelItemDblClick'
                    }
                }
            ]
        }
    ]

});