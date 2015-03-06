/*
 * File: app/store/commissions.js
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

Ext.define('TabUserInformation.store.commissions', {
    extend: 'Ext.data.Store',
    alias: 'store.commissions',

    requires: [
        'TabUserInformation.model.Commission',
        'Ext.data.proxy.Memory'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'commissions',
            model: 'TabUserInformation.model.Commission',
            data: [
                {
                    Id: 635,
                    PayCompanyName: 'magnam',
                    PayAmount: 398.13,
                    PayDetail: 'et',
                    PayPaymentCondition: 544.27,
                    ReceiveCompanyName: 'iusto',
                    ReceiveAmount: 357.36,
                    ReceiveDetail: 'consequatur',
                    ReceivePaymentCondition: 162
                }
            ],
            proxy: {
                type: 'memory'
            }
        }, cfg)]);
    }
});