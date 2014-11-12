/*
 * File: app/view/MainTab.js
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

Ext.define('TabUserInformation.view.MainTab', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.maintab',

    requires: [
        'TabUserInformation.view.MainTabViewModel',
        'TabUserInformation.view.Tab.AuthorizeTab',
        'TabUserInformation.view.Tab.SetupTab',
        'TabUserInformation.view.Tab.UserInfTab',
        'TabUserInformation.view.Tab.CusInfTab',
        'TabUserInformation.view.Tab.VisitCallingTab',
        'TabUserInformation.view.Tab.JobTab',
        'TabUserInformation.view.Tab.RoleTab',
        'Ext.panel.Panel',
        'Ext.tab.Tab'
    ],

    viewModel: {
        type: 'maintab'
    },
    width: '100%',
    activeTab: 6,

    items: [
        {
            xtype: 'tabauthorizetab'
        },
        {
            xtype: 'tabsetuptab'
        },
        {
            xtype: 'tabuserinftab'
        },
        {
            xtype: 'tabcusinftab'
        },
        {
            xtype: 'tabvisitcallingtab'
        },
        {
            xtype: 'tabjobtab'
        },
        {
            xtype: 'tabroletab'
        }
    ]

});