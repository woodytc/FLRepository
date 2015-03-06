/*
 * File: app/view/Job/Application/Tab/StampDuty.js
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

Ext.define('TabUserInformation.view.Job.Application.Tab.StampDuty', {
    extend: 'Ext.form.Panel',
    alias: 'widget.jobapplicationtabstampduty',

    requires: [
        'TabUserInformation.view.Job.Application.Tab.StampDutyViewModel',
        'Ext.form.FieldContainer',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Number'
    ],

    viewModel: {
        type: 'jobapplicationtabstampduty'
    },
    id: 'jobappstampduty',
    bodyPadding: 10,
    title: 'Stamp Duty',

    items: [
        {
            xtype: 'fieldcontainer',
            height: 120,
            items: [
                {
                    xtype: 'combobox',
                    fieldLabel: 'Borne By',
                    labelAlign: 'right',
                    name: 'BorneBy',
                    autoLoadOnValue: true,
                    displayField: 'Name',
                    store: 'CommonData.borneBy',
                    valueField: 'Id'
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Amount',
                    labelAlign: 'right',
                    name: 'Amount',
                    hideTrigger: true
                }
            ]
        }
    ]

});