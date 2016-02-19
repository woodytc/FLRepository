﻿/*
 * File: app/view/Home/MainTab.js
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

Ext.define('TabUserInformation.view.Home.MainTab', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.homemaintab',

    requires: [
        'TabUserInformation.view.ThirdParty.ThirdPartyInfTab',
        'TabUserInformation.view.Role.UserInRoleTab',
        'TabUserInformation.view.User.UserInfTab',
        'TabUserInformation.view.Customer.CusInfTab',
        'TabUserInformation.view.VisitCalling.VisitCallingTab',
        'TabUserInformation.view.Job.JobTab',
        'TabUserInformation.view.Authorize.AuthorizeTab',
        'Ext.panel.Panel',
        'Ext.tab.Tab',
        'TabUserInformation.view.Home.MainTabViewModel'
    ],

    viewModel: {
        type: 'homemaintab'
    },
    border: false,
    itemId: 'tabmanagement',
    iconAlign: 'top',
    titleAlign: 'right',
    activeTab: 1,
    header: {
        titlePosition: 0,
        layout: {
            type: 'hbox',
            align: 'top',
            pack: 'start'
        },
        items: [
            {
                xtype: 'label',
                itemId: 'titleShowName',
                margin: '0 10 0 0'
            },
            {
                xtype: 'button',
                padding: 5,
                //ui: 'plain-toolbar-small',
                glyph: 'xf08b@FontAwesome',
                text: 'Logout',
                listeners: {
                    click: 'onButtonLogoutClick'
                }
            }
        ]
    },

    items: [
    ]

});