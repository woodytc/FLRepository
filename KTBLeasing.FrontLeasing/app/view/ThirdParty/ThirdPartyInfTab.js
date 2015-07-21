/*
 * File: app/view/ThirdParty/ThirdPartyInfTab.js
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

Ext.define('TabUserInformation.view.ThirdParty.ThirdPartyInfTab', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.thirdpartythirdpartyinftab',

    requires: [
        'TabUserInformation.view.ThirdParty.ThirdPartyInfTabViewModel',
        'TabUserInformation.view.ThirdParty.ThirdPartyInfTabViewController',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.column.Column',
        'Ext.toolbar.Paging',
        'Ext.form.Panel',
        'Ext.form.field.Number',
        'Ext.form.field.ComboBox',
        'Ext.form.field.TextArea',
        'Ext.button.Button'
    ],

    controller: 'thirdpartythirdpartyinftab',
    viewModel: {
        type: 'thirdpartythirdpartyinftab'
    },
    layout: 'border',
    title: 'ThirdParty Information',
    titleCollapse: false,

    items: [
        {
            xtype: 'panel',
            region: 'north',
            layout: 'table',
            bodyPadding: 10,
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Search Text',
                    labelAlign: 'right'
                }
            ]
        },
        {
            xtype: 'gridpanel',
            region: 'center',
            autoScroll: true,
            height: 768,
            forceFit: true,
            store: 'thirdParties',
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'ThirdPartyCode',
                    text: 'Code'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'NameEn',
                    text: 'Name Eng'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'NameTh',
                    text: 'Name Thai'
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
                itemdblclick: 'onGridpanelItemDblClick'
            }
        },
        {
            xtype: 'form',
            hidden: true,
            width: 150,
            bodyPadding: 10,
            layout: {
                type: 'table',
                columns: 2
            },
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Telephone',
                    labelWidth: 120,
                    inputType: 'tel'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Fax',
                    labelWidth: 120,
                    inputType: 'tel'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Email',
                    labelWidth: 120,
                    inputType: 'email'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Home Page',
                    labelWidth: 120
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Tag',
                    labelWidth: 120
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'VAT',
                    labelWidth: 120
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Payment Method',
                    labelWidth: 120
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Payment Condition',
                    labelWidth: 120
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Bank(1)',
                    labelWidth: 120
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Bank(2)',
                    labelWidth: 120
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Branch(1)',
                    labelWidth: 120
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Branch(2)',
                    labelWidth: 120
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Account Type(1)',
                    labelWidth: 120
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Account Type(2)',
                    labelWidth: 120
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Account No(1)',
                    labelWidth: 120
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Account No(2)',
                    labelWidth: 120
                },
                {
                    xtype: 'textareafield',
                    colspan: 2,
                    width: '80%',
                    fieldLabel: 'Other Remark',
                    labelWidth: 120
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
                    text: 'Add'
                },
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

});