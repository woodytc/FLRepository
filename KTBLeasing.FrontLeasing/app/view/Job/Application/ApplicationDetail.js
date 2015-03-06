/*
 * File: app/view/Job/Application/ApplicationDetail.js
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

Ext.define('TabUserInformation.view.Job.Application.ApplicationDetail', {
    extend: 'Ext.window.Window',
    alias: 'widget.jobapplicationapplicationdetail',

    requires: [
        'TabUserInformation.view.Job.Application.ApplicationDetailViewModel',
        'TabUserInformation.view.Job.Application.ApplicationDetailViewController',
        'TabUserInformation.view.Job.Application.Tab.Application',
        'TabUserInformation.view.Job.Application.Tab.Seller',
        'TabUserInformation.view.Job.Application.Tab.PurchaseOrder',
        'TabUserInformation.view.Job.Application.Tab.ControlPaymentAdvice',
        'TabUserInformation.view.Job.Application.Tab.OptionAtEnd',
        'TabUserInformation.view.Job.Application.Tab.Insurance',
        'TabUserInformation.view.Job.Application.Tab.Commission',
        'TabUserInformation.view.Job.Application.Tab.AnnualTax',
        'TabUserInformation.view.Job.Application.Tab.Maintenances',
        'TabUserInformation.view.Job.Application.Tab.MethodPayment',
        'TabUserInformation.view.Job.Application.Tab.StampDuty',
        'TabUserInformation.view.Job.Application.Tab.WaiveDocument',
        'TabUserInformation.view.Job.Application.Tab.Guarantor',
        'TabUserInformation.view.Job.Application.Tab.StipulateLoss',
        'TabUserInformation.view.Job.Application.Tab.CollectionSchedule',
        'TabUserInformation.view.Job.Application.Tab.Funding',
        'TabUserInformation.view.Job.Application.Tab.Document',
        'Ext.form.Panel',
        'Ext.tab.Panel',
        'Ext.tab.Tab',
        'Ext.toolbar.Toolbar'
    ],

    controller: 'jobapplicationapplicationdetail',
    viewModel: {
        type: 'jobapplicationapplicationdetail'
    },
    autoShow: true,
    title: 'Application',
    maximized: true,

    items: [
        {
            xtype: 'form',
            items: [
                {
                    xtype: 'tabpanel',
                    height: 768,
                    activeTab: 0,
                    tabPosition: 'left',
                    tabRotation: 0,
                    items: [
                        {
                            xtype: 'jobapplicationtabapplication',
                            height: 768,
                            tabConfig: {
                                xtype: 'tab',
                                textAlign: 'right'
                            }
                        },
                        {
                            xtype: 'jobapplicationtabseller',
                            height: 768,
                            itemId: 'seller',
                            tabConfig: {
                                xtype: 'tab',
                                textAlign: 'right'
                            }
                        },
                        {
                            xtype: 'jobapplicationtabpurchaseorder',
                            height: 768,
                            tabConfig: {
                                xtype: 'tab',
                                textAlign: 'right'
                            }
                        },
                        {
                            xtype: 'jobapplicationtabcontrolpaymentadvice',
                            height: 768,
                            tabConfig: {
                                xtype: 'tab',
                                textAlign: 'right'
                            }
                        },
                        {
                            xtype: 'jobapplicationtaboptionatend',
                            height: 768,
                            tabConfig: {
                                xtype: 'tab',
                                textAlign: 'right'
                            }
                        },
                        {
                            xtype: 'jobapplicationtabinsurance',
                            height: 500,
                            tabConfig: {
                                xtype: 'tab',
                                textAlign: 'right'
                            }
                        },
                        {
                            xtype: 'jobapplicationtabcommission',
                            height: 768,
                            tabConfig: {
                                xtype: 'tab',
                                textAlign: 'right'
                            }
                        },
                        {
                            xtype: 'jobapplicationtabannualtax',
                            height: 768,
                            tabConfig: {
                                xtype: 'tab',
                                textAlign: 'right'
                            }
                        },
                        {
                            xtype: 'jobapplicationtabmaintenances',
                            height: 768,
                            tabConfig: {
                                xtype: 'tab',
                                textAlign: 'right'
                            }
                        },
                        {
                            xtype: 'jobapplicationtabmethodpayment',
                            height: 768,
                            tabConfig: {
                                xtype: 'tab',
                                textAlign: 'right'
                            }
                        },
                        {
                            xtype: 'jobapplicationtabstampduty',
                            height: 768,
                            tabConfig: {
                                xtype: 'tab',
                                textAlign: 'right'
                            }
                        },
                        {
                            xtype: 'jobapplicationtabwaivedocument',
                            height: 768,
                            tabConfig: {
                                xtype: 'tab',
                                textAlign: 'right'
                            }
                        },
                        {
                            xtype: 'jobapplicationtabguarantor',
                            height: 768,
                            tabConfig: {
                                xtype: 'tab',
                                textAlign: 'right'
                            }
                        },
                        {
                            xtype: 'jobapplicationtabstipulateloss',
                            height: 768,
                            tabConfig: {
                                xtype: 'tab',
                                textAlign: 'right'
                            }
                        },
                        {
                            xtype: 'jobapplicationtabcollectionschedule',
                            height: 768,
                            tabConfig: {
                                xtype: 'tab',
                                textAlign: 'right'
                            }
                        },
                        {
                            xtype: 'jobapplicationtabfunding',
                            tabConfig: {
                                xtype: 'tab',
                                textAlign: 'right'
                            }
                        },
                        {
                            xtype: 'jobapplicationtabdocument',
                            tabConfig: {
                                xtype: 'tab',
                                textAlign: 'right'
                            }
                        }
                    ],
                    listeners: {
                        beforerender: 'onTabpanelBeforeRender'
                    }
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
                    text: 'Save',
                    listeners: {
                        click: 'onButtonSaveClick'
                    }
                }
            ]
        }
    ]

});