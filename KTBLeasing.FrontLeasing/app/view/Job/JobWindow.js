/*
 * File: app/view/Job/JobWindow.js
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

Ext.define('TabUserInformation.view.Job.JobWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.jobjobwindow',

    requires: [
        'TabUserInformation.view.Job.JobWindowViewModel',
        'TabUserInformation.view.Job.Lead.LeadTab',
        'TabUserInformation.view.Job.Information.InformationForIndicationTab',
        'TabUserInformation.view.Job.Indication.IndicationForEquipmentTab',
        'TabUserInformation.view.Job.Application.ApplicationTab',
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.tab.Panel',
        'Ext.tab.Tab'
    ],

    viewModel: {
        type: 'jobjobwindow'
    },
    autoShow: true,
    height: 768,
    title: 'Job Tree',
    maximized: true,
    modal: true,

    items: [
        {
            xtype: 'form',
            layout: 'auto',
            bodyPadding: 10,
            items: [
                {
                    xtype: 'textfield',
                    width: 200,
                    fieldLabel: 'Job #',
                    labelAlign: 'right',
                    labelWidth: 120
                },
                {
                    xtype: 'textfield',
                    width: 500,
                    fieldLabel: 'Customer Name',
                    labelAlign: 'right',
                    labelWidth: 120
                },
                {
                    xtype: 'textfield',
                    width: 500,
                    fieldLabel: 'Marketing Officer',
                    labelAlign: 'right',
                    labelWidth: 120
                },
                {
                    xtype: 'tabpanel',
                    height: 768,
                    activeTab: 0,
                    items: [
                        {
                            xtype: 'jobleadleadtab'
                        },
                        {
                            xtype: 'jobinformationinformationforindicationtab'
                        },
                        {
                            xtype: 'jobindicationindicationforequipmenttab'
                        },
                        {
                            xtype: 'jobapplicationapplicationtab'
                        }
                    ]
                }
            ]
        }
    ]

});