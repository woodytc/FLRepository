/*
 * File: app/view/Popup/ContactPersonPopup.js
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

Ext.define('TabUserInformation.view.Popup.ContactPersonPopup', {
    extend: 'Ext.window.Window',
    alias: 'widget.popupcontactpersonpopup',

    requires: [
        'TabUserInformation.view.Popup.ContactPersonPopupViewModel',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.column.RowNumberer',
        'Ext.toolbar.Paging'
    ],

    viewModel: {
        type: 'popupcontactpersonpopup'
    },
    id: 'contactpersonwindow2',
    width: 1128,
    title: 'Contact Person',
    modal: true,

    items: [
        {
            xtype: 'gridpanel',
            autoScroll: true,
            height: 400,
            id: 'contactperson-grid1',
            store: 'signers',
            columns: [
                {
                    xtype: 'rownumberer',
                    width: 53,
                    dataIndex: 'No',
                    text: 'No'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'Title',
                    text: 'Title'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'Name Eng',
                    text: 'Name Eng',
                    flex: 1
                }
            ],
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    ui: 'footer',
                    width: 360,
                    displayInfo: true
                }
            ]
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            ui: 'footer'
        }
    ]

});