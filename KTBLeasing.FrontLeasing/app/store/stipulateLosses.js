/*
 * File: app/store/stipulateLosses.js
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

Ext.define('TabUserInformation.store.stipulateLosses', {
    extend: 'Ext.data.Store',
    alias: 'store.stipulatelosses',

    requires: [
        'TabUserInformation.model.StipulateLoss',
        'Ext.data.proxy.Memory'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'stipulateLosses',
            model: 'TabUserInformation.model.StipulateLoss',
            data: [
                {
                    Id: 1,
                    AppId: 1,
                    CLPerUnit: 167,
                    CLTotal: 736,
                    MDAmountFrom: 765,
                    MDAmountTo: 871.97,
                    MDPerUnit: 595.14,
                    MDTotal: 996.28,
                    MDAmountFrom2: 412.85,
                    MDAmountTo2: 153.23,
                    MDPerUnit2: 737,
                    MDTotal2: 513
                }
            ],
            proxy: {
                type: 'memory'
            }
        }, cfg)]);
    }
});