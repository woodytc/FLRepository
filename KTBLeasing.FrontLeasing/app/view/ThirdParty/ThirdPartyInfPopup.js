/*
 * File: app/view/ThirdParty/ThirdPartyInfPopup.js
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

Ext.define('TabUserInformation.view.ThirdParty.ThirdPartyInfPopup', {
    extend: 'Ext.window.Window',
    alias: 'widget.thirdpartythirdpartyinfpopup',

    requires: [
        'TabUserInformation.view.ThirdParty.ThirdPartyInfPopupViewModel',
        'TabUserInformation.view.ThirdParty.ThirdPartyInfPopupViewController',
        'Ext.form.field.Text',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.column.Column',
        'Ext.toolbar.Paging'
    ],

    controller: 'thirdpartythirdpartyinfpopup',
    viewModel: {
        type: 'thirdpartythirdpartyinfpopup'
    },
    height: 600,
    id: 'thirdpartyinftab1',
    width: 800,
    layout: 'anchor',
    title: 'ThirdParty Information',
    titleCollapse: false,

    items: [
        {
            xtype: 'panel',
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
            autoScroll: true,
            forceFit: true,
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'Code',
                    text: 'Code'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'Name Eng',
                    text: 'Name Eng'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'Name Thai',
                    text: 'Name Thai'
                }
            ],
            listeners: {
                itemdblclick: 'onGridpanelItemDblClick'
            }
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
    ]

});