/*
 * File: app/view/Common/ContactPersonPopup.js
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

Ext.define('TabUserInformation.view.Common.ContactPersonPopup', {
    extend: 'Ext.window.Window',
    alias: 'widget.commoncontactpersonpopup',

    requires: [
        'TabUserInformation.view.Common.ContactPersonPopupViewModel',
        'TabUserInformation.view.Common.ContactPersonPopupViewController',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Column'
    ],

    controller: 'commoncontactpersonpopup',
    viewModel: {
        type: 'commoncontactpersonpopup'
    },
    id: 'contactpersonwindow2',
    width: 800,
    title: 'Contact Person',
    modal: true,

    items: [
        {
            xtype: 'gridpanel',
            autoScroll: true,
            autoLoad: true,
            height: 400,
            store: 'contactPersons',
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    ui: 'footer',
                    width: 360,
                    displayInfo: true,
                    store: 'contactPersons'
                }
            ],
            listeners: {
                itemdblclick: 'onGridpanelItemDblClick'
            },
            columns: [
                {
                    xtype: 'rownumberer',
                    text: 'Id'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'TitleTh',
                    text: 'Title',
                    flex: -1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'FirstNameTh',
                    text: 'FirstNameTh',
                    flex: -1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'LastNameTh',
                    text: 'LastNameTh',
                    flex: -1
                }
            ]
        }
    ]

});