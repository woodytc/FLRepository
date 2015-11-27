/*
 * File: app/store/appDetails.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
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

Ext.define('TabUserInformation.store.appDetails', {
    extend: 'Ext.data.Store',
    alias: 'store.appdetails',

    requires: [
        'TabUserInformation.model.AppDetail',
        'Ext.data.proxy.Memory'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'appDetails',
            model: 'TabUserInformation.model.AppDetail',
            data: [
                {
                    Id: "jobappapplication",
                    Name: "ApplicationDetail"
                },
                {
                    Id: 'jobappwaivedocument',
                    Name: 'WaiveDocument'
                },
                {
                    Id: 'jobappguarantor',
                    Name: 'Guarantor'
                },
                {
                    Id: 'jobappfunding',
                    Name: 'Funding'
                },
                {
                    Id: 'jobappstipulateloss',
                    Name: 'StipulateLoss'
                },
                {
                    Id: 'jobappoptionatend',
                    Name: 'OptionEndLeaseTerm'
                },
                {
                    Id: 'jobappcommission',
                    Name: 'Commission'
                },
                {
                    Id: 'jobappmaintenance',
                    Name: 'Maintenance'
                },
                {
                    Id: 'jobappinsurance',
                    Name: 'Insurance'
                },
                {
                    Id: 'jobappcollectionschedule',
                    Name: 'CollectionSchedule'
                },
                {
                    Id: 'jobappstampduty',
                    Name: 'StampDuty'
                },
                {
                    Id: 'jobappmethodpayment',
                    Name: 'MethodPayment'
                },
                {
                    Id: 'jobapptermcondition',
                    Name: 'TermCondition'
                },
                {
                    Id: 'jobappregistrationform',
                    Name: 'RegistrationForm'
                }
//                {
//                    Id: 'jobappseller',
//                    Name: 'Seller'
//                },
//                {
//                    Id: 'jobapppurchaseorder',
//                    Name: 'PurchaseOrder'
//                },
//                {
//                    Id: 'jobappannualtax',
//                    Name: 'AnnualTax'
//                },
//                {
//                    Id: 'jobappcontrolpaymentadvice',
//                    Name: 'ControlPaymentAdvice'
//                }
            ],
            proxy: {
                type: 'memory'
            }
        }, cfg)]);
    }
});