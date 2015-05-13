/*
 * File: app/store/termConditions.js
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

Ext.define('TabUserInformation.store.termConditions', {
    extend: 'Ext.data.Store',
    alias: 'store.termconditions',

    requires: [
        'TabUserInformation.model.TermCondition',
        'Ext.data.proxy.Memory'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'termConditions',
            model: 'TabUserInformation.model.TermCondition',
//            data: [
//                {
//                    Id: 95,
//                    AppId: 490,
//                    LeaseTerm: 307,
//                    PaymentId: 839,
//                    TypeId: 733,
//                    SyndicateSubLease: 'eligendi',
//                    AdvanceArrearId: 47,
//                    TypeFinanceId: 89,
//                    RateTypeId: 382,
//                    SubsequenceDueDay: 763,
//                    Irregular: true,
//                    PerUnitEqual: false,
//                    AbnormalRental: false,
//                    ReceivedCompanyName: 'illo',
//                    FinanceFeeAmount: 649.39,
//                    PercentEquipmentCost: 806.33,
//                    PercentEquipmentCostTypeId: 426.19,
//                    PaymentConditionId: 666,
//                    FirstDue: 367.68,
//                    SecondDue: 582.37,
//                    LastDue: 751.12,
//                    NetRate: 63.32,
//                    GrossRate: 204.95,
//                    GrossRateAccount: 541.61,
//                    AverageLife: 348.48,
//                    RentalMA: 993.56,
//                    NumberPayment: 134.44,
//                    FirstDueDate: '3/20/2007',
//                    LastDueDate: '4/5/2009',
//                    RVDueDate: '12/25/2003',
//                    ResidualValue: 364.66,
//                    RVDueDateOriginal: '2/25/2004',
//                    TotalReceivable: 287.91,
//                    TotalUnearned: 733.71
//                }
//            ],
            proxy: {
                type: 'memory'
            }
        }, cfg)]);
    }
});