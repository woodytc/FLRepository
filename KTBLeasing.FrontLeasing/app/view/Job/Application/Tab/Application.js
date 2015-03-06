/*
* File: app/view/Job/Application/Tab/Application.js
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

Ext.define('TabUserInformation.view.Job.Application.Tab.Application', {
    extend: 'Ext.form.Panel',
    alias: 'widget.jobapplicationtabapplication',

    requires: [
        'TabUserInformation.view.Job.Application.Tab.ApplicationViewModel',
        'TabUserInformation.view.Job.Application.Tab.ApplicationViewController',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.button.Button',
        'Ext.form.field.Display',
        'Ext.form.FieldSet',
        'Ext.toolbar.Toolbar',
        'Ext.toolbar.Spacer',
        'Ext.form.field.Number',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.form.trigger.Trigger',
        'Ext.grid.column.Number',
        'Ext.grid.feature.Summary',
        'Ext.grid.plugin.RowEditing',
        'Ext.form.Panel'
    ],

    controller: 'jobapplicationtabapplication',
    viewModel: {
        type: 'jobapplicationtabapplication'
    },

    id: 'jobapplicationapplicationdetail',
    autoScroll: true,
    bodyPadding: 10,
    title: 'Application',

    layout: {
        type: 'table',
        columns: 4
    },
    items: [
        {
            xtype: 'hiddenfield',
            name: 'Id'
        },
        {
            xtype: 'hiddenfield',
            name: 'Code'
        },
        {
            xtype: 'hiddenfield',
            name: 'Name'
        },
        {
            xtype: 'hiddenfield',
            name: 'Year'
        },
        {
            xtype: 'container',
            colspan: 2,
            layout: 'table',
            items: [
                {
                    xtype: 'textfield',
                    width: 250,
                    fieldLabel: 'Application #',
                    labelAlign: 'right',
                    labelWidth: 140,
                    name: 'ApplicationId'
                },
                {
                    xtype: 'combobox',
                    width: 100,
                    name: 'ApplicationType',
                    autoLoadOnValue: true,
                    displayField: 'Name',
                    store: 'CommonData.typeApplications',
                    valueField: 'Id'
                },
                {
                    xtype: 'datefield',
                    width: 150,
                    fieldLabel: 'Date',
                    labelAlign: 'right',
                    labelWidth: 40,
                    name: 'ApplicationDate'
                }
            ]
        },
        {
            xtype: 'textfield',
            width: 250,
            fieldLabel: 'Primary Job#',
            labelAlign: 'right',
            name: 'PrimaryJob'
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Industry Code',
            labelAlign: 'right',
            labelWidth: 140,
            name: 'IndustryCode',
            autoLoadOnValue: true,
            displayField: 'Name',
            store: 'CommonData.industryCodes',
            valueField: 'Id'
        },
        {
            xtype: 'textfield',
            colspan: 2,
            fieldLabel: 'Indication Line',
            labelAlign: 'right',
            labelWidth: 140,
            name: 'IndicationLine'
        },
        {
            xtype: 'combobox',
            colspan: 1,
            width: 250,
            fieldLabel: 'Status',
            labelAlign: 'right',
            name: 'Status',
            autoLoadOnValue: true,
            displayField: 'Name',
            store: 'CommonData.status',
            valueField: 'Id'
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Nature of Cus',
            labelAlign: 'right',
            labelWidth: 140,
            name: 'NatureCust',
            autoLoadOnValue: true,
            displayField: 'Name',
            store: 'CommonData.natureCusts',
            valueField: 'Id'
        },
        {
            xtype: 'textfield',
            colspan: 1,
            width: 250,
            fieldLabel: 'Agreement No',
            labelAlign: 'right',
            labelWidth: 140,
            name: 'AgreementNo'
        },
        {
            xtype: 'textfield',
            colspan: 1,
            width: 150,
            fieldLabel: 'Integral Part No',
            labelAlign: 'right',
            name: 'IntegralPartNo'
        },
        {
            xtype: 'textfield',
            colspan: 1,
            width: 200,
            fieldLabel: 'Schedule No',
            labelAlign: 'right',
            name: 'ScheduleNo'
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Group of Cus',
            labelAlign: 'right',
            labelWidth: 140,
            name: 'GroupCust',
            autoLoadOnValue: true,
            displayField: 'Name',
            store: 'CommonData.groupCusts',
            valueField: 'Id'
        },
        {
            xtype: 'container',
            colspan: 3,
            layout: 'table',
            items: [
                {
                    xtype: 'textfield',
                    width: 250,
                    fieldLabel: 'Customer Code',
                    labelAlign: 'right',
                    labelWidth: 140,
                    name: 'CustomerCode'
                }
            ]
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Type of Lease',
            labelAlign: 'right',
            labelWidth: 140,
            name: 'TypeLease',
            autoLoadOnValue: true,
            displayField: 'Name',
            store: 'CommonData.typeLease',
            valueField: 'Id'
        },
        {
            xtype: 'container',
            colspan: 3,
            layout: 'table',
            items: [
                {
                    xtype: 'textfield',
                    colspan: 3,
                    width: 670,
                    fieldLabel: 'Customer Name',
                    labelAlign: 'right',
                    labelWidth: 140,
                    name: 'CustomerName'
                },
                {
                    xtype: 'button',
                    margin: '0 0 0 5',
                    iconCls: 'x-form-search-trigger',
                    listeners: {
                        click: 'onButtonDefineAddressClick'
                    }
                }
            ]
        },
        {
            xtype: 'combobox',
            itemId: 'TypeEquipment',
            fieldLabel: 'Type of Equipment',
            labelAlign: 'right',
            labelWidth: 140,
            name: 'TypeEquipment',
            autoLoadOnValue: true,
            displayField: 'Name',
            store: 'CommonData.typeEquipment',
            valueField: 'Id'
        },
        {
            xtype: 'container',
            colspan: 3,
            layout: 'table',
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Telephone',
                    labelAlign: 'right',
                    labelWidth: 140,
                    name: 'Telephone',
                    inputType: 'tel'
                },
                {
                    xtype: 'textfield',
                    colspan: 2,
                    fieldLabel: 'Fax',
                    labelAlign: 'right',
                    labelWidth: 50,
                    name: 'Fax',
                    inputType: 'tel'
                }
            ]
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Type of Business',
            labelAlign: 'right',
            labelWidth: 140,
            name: 'TypeBusiness',
            autoLoadOnValue: true,
            displayField: 'Name',
            store: 'CommonData.typeBusiness',
            valueField: 'Id'
        },
        {
            xtype: 'textfield',
            colspan: 3,
            fieldLabel: 'Marketing Officer',
            labelAlign: 'right',
            labelWidth: 140,
            name: 'MarketingOfficer'
        },
        {
            xtype: 'combobox',
            colspan: 1,
            fieldLabel: 'Type of Customer',
            labelAlign: 'right',
            labelWidth: 140,
            name: 'TypeCustomer',
            autoLoadOnValue: true,
            displayField: 'Name',
            store: 'CommonData.typeCustomers',
            valueField: 'Id'
        },
        {
            xtype: 'textfield',
            colspan: 3,
            width: 600,
            fieldLabel: 'Business',
            labelAlign: 'right',
            labelWidth: 140,
            name: 'Business'
        },
        {
            xtype: 'fieldset',
            rowspan: 5,
            margin: '0 0 0 5',
            title: 'Rating Point',
            items: [
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: 'Rating',
                    labelAlign: 'right',
                    name: 'Rating',
                    readOnly: true
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: 'Exposure Limit',
                    labelAlign: 'right',
                    name: 'ExposureLimit',
                    readOnly: true
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: 'Rating detail',
                    labelAlign: 'right',
                    name: 'RatingDetail',
                    readOnly: true
                },
                {
                    xtype: 'datefield',
                    anchor: '100%',
                    fieldLabel: 'As Of Date',
                    labelAlign: 'right',
                    name: 'RatingDate',
                    readOnly: true
                }
            ]
        },
        {
            xtype: 'container',
            colspan: 3,
            layout: 'table',
            items: [
                {
                    xtype: 'combobox',
                    width: '100%',
                    fieldLabel: 'Source of Information',
                    labelAlign: 'right',
                    labelWidth: 140,
                    name: 'SourceInformation',
                    autoLoadOnValue: true,
                    displayField: 'Name',
                    store: 'CommonData.sourceInformations',
                    valueField: 'Id'
                },
                {
                    xtype: 'textfield',
                    width: '100%',
                    fieldLabel: 'Detail when others',
                    labelAlign: 'right',
                    labelWidth: 140,
                    name: 'Remark'
                }
            ]
        },
        {
            xtype: 'toolbar',
            colspan: 3,
            items: [
                {
                    xtype: 'button',
                    ui: 'default-small',
                    text: 'Signer In Agreement',
                    listeners: {
                        click: 'onButtonSignerClick'
                    }
                },
                {
                    xtype: 'button',
                    ui: 'default-small',
                    text: 'Signer in Schedule',
                    listeners: {
                        click: 'onButtonSignerClick2'
                    }
                },
                {
                    xtype: 'button',
                    ui: 'default-small',
                    text: 'KTBL Signer',
                    listeners: {
                        click: 'onButtonSignerClick3'
                    }
                },
                {
                    xtype: 'button',
                    ui: 'default-small',
                    text: 'Inf. Approve',
                    listeners: {
                        click: 'onButtonApprovalClick'
                    }
                }
            ]
        },
        {
            xtype: 'datefield',
            width: 250,
            fieldLabel: 'Approve Date',
            labelAlign: 'right',
            labelWidth: 140,
            name: 'ApproveDate'
        },
        {
            xtype: 'textfield',
            colspan: 2,
            width: '100%',
            fieldLabel: 'Delivery Date',
            labelAlign: 'right',
            labelWidth: 140,
            name: 'DeliveryDate'
        },
        {
            xtype: 'datefield',
            colspan: 1,
            width: 250,
            fieldLabel: 'Agreement Date',
            labelAlign: 'right',
            labelWidth: 140,
            name: 'AgreementDate'
        },
        {
            xtype: 'datefield',
            width: 250,
            fieldLabel: 'Execute Date',
            labelAlign: 'right',
            labelWidth: 140,
            name: 'ExecuteDate'
        },
        {
            xtype: 'datefield',
            width: 250,
            fieldLabel: 'Schedule Date',
            labelAlign: 'right',
            labelWidth: 140,
            name: 'ScheduleDate'
        },
        {
            xtype: 'tbspacer',
            colspan: 2
        },
        {
            xtype: 'container',
            colspan: 2,
            layout: 'table',
            items: [
                {
                    xtype: 'numberfield',
                    width: 100,
                    fieldLabel: 'Vat%',
                    labelAlign: 'right',
                    labelWidth: 40,
                    name: 'VAT',
                    hideTrigger: true
                },
                {
                    xtype: 'combobox',
                    width: 150,
                    fieldLabel: 'Currency',
                    labelAlign: 'right',
                    labelWidth: 60,
                    name: 'Currency',
                    displayField: 'Name',
                    store: 'CommonData.currency',
                    valueField: 'Id'
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Exchange Rate',
                    labelAlign: 'right',
                    name: 'ExchangeRate',
                    hideTrigger: true
                }
            ]
        },
        {
            xtype: 'gridpanel',
            itemId: 'equipmentLists-grid',
            colspan: 4,
            store: 'equipmentLists',
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'SellerName',
                    text: 'SellerName'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'Quantity',
                    text: 'Quantity',
                    editor: {
                        xtype: 'numberfield',
                        hideTrigger: true
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'EquipmentName',
                    text: 'EquipmentName',
                    flex: -1,
                    editor: {
                        xtype: 'textfield',
                        triggers: {
                            mytrigger1: {
                                handler: function (field, trigger, e) {
                                    var grid = field.up('grid'),
                                        record = grid.getSelection()[0],
                                        rowedit = grid.getPlugin('rowedit'),
                                        value = grid.ownerCt.down('#TypeEquipment').getRawValue();

                                    if (value) {
                                        if (e.type == 'click') {
                                            var popup = Ext.create('widget.jobapplicationwindowequipmentdetail', {
                                                listeners: {
                                                    beforerender: function (panel, eOpts) {
                                                        panel.getController().HideAndShow(value);
                                                    },
                                                    close: function (panel, eOpts) {
                                                        //                 var record2 = panel.down('grid').getSelection()[0];
                                                        if (record) {
                                                            //                     for(var recordname in record2.data){
                                                            //                         if(recordname != 'Id'){
                                                            //                             record.set(recordname,record2.get(recordname));
                                                            //                         }
                                                            //                         if(recordname == 'PolicyNo'){

                                                            //                         }
                                                            //                     }
                                                            grid.view.refresh();
                                                            rowedit.cancelEdit();
                                                        }
                                                    }
                                                }
                                            });
                                            popup.center();
                                            popup.show();
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'UnitPrice',
                    text: 'UnitPrice',
                    editor: {
                        xtype: 'numberfield',
                        hideTrigger: true
                    }
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'Total',
                    text: 'Total',
                    editor: {
                        xtype: 'numberfield',
                        hideTrigger: true
                    }
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'VAT',
                    text: 'VAT',
                    editor: {
                        xtype: 'numberfield',
                        hideTrigger: true
                    }
                }
            ],
            features: [
                {
                    ftype: 'summary'
                }
            ],
            plugins: [
                {
                    ptype: 'rowediting',
                    pluginId: 'rowedit'
                }
            ],
            listeners: {
                selectionchange: 'onGridpanelSelectionChange'
            }
        }
    ],
    dockedItems: [
        {
            xtype: 'form',
            dock: 'bottom',
            bodyPadding: 10,
            layout: {
                type: 'table',
                columns: 2
            },
            items: [
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Deposit / Down Payment',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'DepositDownPayment',
                    hideTrigger: true
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Equipment Cost BHT',
                    labelAlign: 'right',
                    labelWidth: 140,
                    name: 'EquipmentCost',
                    hideTrigger: true
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'VAT',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'DepositDownVat',
                    hideTrigger: true
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'VAT',
                    labelAlign: 'right',
                    labelWidth: 140,
                    name: 'EquipmentVAT',
                    hideTrigger: true
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Total',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'DepositDownTotal',
                    hideTrigger: true
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Total',
                    labelAlign: 'right',
                    labelWidth: 140,
                    name: 'EquipmentTotal',
                    hideTrigger: true
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Deposit Equivalent To',
                    labelAlign: 'right',
                    labelWidth: 150,
                    name: 'DepositEquivalent',
                    hideTrigger: true
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Cost Equivalent To',
                    labelAlign: 'right',
                    labelWidth: 140,
                    name: 'CostEquivalent',
                    hideTrigger: true
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    colspan: 4,
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            ui: 'default-small',
                            text: 'New Line',
                            listeners: {
                                click: 'onButtonNewLineClick'
                            }
                        },
                        {
                            xtype: 'button',
                            ui: 'default-small',
                            text: 'Delete Line',
                            listeners: {
                                click: 'onButtonDeleteLineClick'
                            }
                        }
                    ]
                }
            ]
        }
    ]

});