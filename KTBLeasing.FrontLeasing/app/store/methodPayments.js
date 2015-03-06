/*
 * File: app/store/methodPayments.js
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

Ext.define('TabUserInformation.store.methodPayments', {
    extend: 'Ext.data.Store',
    alias: 'store.methodpayments',

    requires: [
        'TabUserInformation.model.MethodPayment',
        'Ext.data.proxy.Memory'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'methodPayments',
            model: 'TabUserInformation.model.MethodPayment',
            data: [
                {
                    Id: 53,
                    CustomerCode: 'doloremque',
                    MethodPayment: 979,
                    BankCharges: 7,
                    ChequeAmount: 894.55
                },
                {
                    Id: 16,
                    CustomerCode: 'fugit',
                    MethodPayment: 714,
                    BankCharges: 191,
                    ChequeAmount: 27.06
                },
                {
                    Id: 870,
                    CustomerCode: 'impedit',
                    MethodPayment: 17,
                    BankCharges: 532,
                    ChequeAmount: 937.48
                }
            ],
            proxy: {
                type: 'memory'
            }
        }, cfg)]);
    }
});