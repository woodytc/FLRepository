/*
* File: app/view/Job/Application/Tab/Maintenances.js
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

Ext.define('TabUserInformation.view.Job.Application.Tab.Maintenances', {
    extend: 'Ext.form.Panel',
    alias: 'widget.jobapplicationtabmaintenances',

    requires: [
        'TabUserInformation.view.Job.Application.Tab.MaintenancesViewModel',
        'TabUserInformation.view.Job.Application.Tab.MaintenancesViewController',
        'Ext.form.FieldSet',
        'Ext.button.Button',
        'Ext.form.field.ComboBox',
        'Ext.form.FieldContainer',
        'Ext.form.field.Number',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.toolbar.Toolbar',
        'Ext.grid.column.Column'
    ],

    controller: 'jobapplicationtabmaintenances',
    viewModel: {
        type: 'jobapplicationtabmaintenances'
    },
    id: 'jobappmaintenance',
    bodyPadding: 10,
    title: 'Maintenance',

    items: [
        {
            xtype: 'fieldset',
            items: [
                {
                    xtype: 'hiddenfield',
                    name: 'Id'
                },
                {
                    xtype: 'container',
                    margin: '10 0 0 0 ',
                    layout: 'table',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Pay To',
                            labelAlign: 'right',
                            labelWidth: 150,
                            name: 'PayTo'
                        },
                        {
                            xtype: 'button',
                            margin: '0 0 0 5',
                            iconCls: 'x-form-search-trigger',
                            listeners: {
                                click: 'onButtonThirdPartyClick'
                            }
                        }
                    ]
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Payment Condition',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'PaymentCondition',
                    autoLoadOnValue: true,
                    displayField: 'Name',
                    store: 'CommonData.paymentCondition',
                    valueField: 'Id'
                },
                {
                    xtype: 'radiogroup',
                    fieldLabel: 'Pattern',
                    labelAlign: 'right',
                    labelWidth: 150,
                    layout: 'anchor',
                    items: [
                        {
                            xtype: 'radiofield',
                            boxLabel: 'Pattern 1',
                            name: 'pattern',
                            checked: true,
                            inputValue: '1'
                        },
                        {
                            xtype: 'radiofield',
                            boxLabel: 'Pattern 2',
                            name: 'pattern',
                            inputValue: '2'
                        }
                    ],
                    listeners: {
                        change: 'onRadiogroupChange'
                    }
                }
            ]
        },
        {
            xtype: 'fieldcontainer',
            height: 120,
            itemId: 'pattern1',
            items: [
                {
                    xtype: 'numberfield',
                    fieldLabel: 'First Due',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'FirstDue',
                    hideTrigger: true
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: '2nd Due Onwards',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'SecondDue',
                    hideTrigger: true
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Last Due',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'LastDue',
                    hideTrigger: true
                }
            ]
        },
        {
            xtype: 'gridpanel',
            height: 300,
            itemId: 'pattern2',
            //store: 'maintenanceLists',
            bind: {
                store: '{maintenanceLists}'
            },

            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'Yearly',
                    text: 'Yearly',
                    editor: {
                        xtype: 'numberfield',
                        hideTrigger: true
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'Month',
                    text: 'Month',
                    editor: {
                        xtype: 'numberfield',
                        hideTrigger: true
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'Amount',
                    text: 'Amount',
                    editor: {
                        xtype: 'numberfield',
                        hideTrigger: true
                    }
                }
            ],
            plugins: [
                {
                    ptype: 'rowediting'
                }
            ]
        },
        {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'button',
                            ui: 'default-small',
                            text: 'Add',
                            listeners: {
                                click: 'onButtonAddClick'
                            }
                        },
                        {
                            xtype: 'button',
                            ui: 'default-small',
                            text: 'Insert',
                            listeners: {
                                click: 'onButtonInsertClick'
                            }
                        },
                        {
                            xtype: 'button',
                            ui: 'default-small',
                            text: 'Delete',
                            listeners: {
                                click: 'onButtonDeleteClick'
                            }
                        }
                    ]
                }
            ]
        }
    ],
    listeners: {
        beforerender: 'onJobappmaintenanceBeforeRender'
    }

});