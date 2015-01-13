/*
 * File: app/store/CommonData/industryCodes.js
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

Ext.define('TabUserInformation.store.CommonData.industryCodes', {
    extend: 'Ext.data.Store',
    alias: 'store.industrycodes',

    requires: [
        'TabUserInformation.model.BaseCommonData',
        'Ext.data.proxy.Memory'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'CommonData.industryCodes',
            model: 'TabUserInformation.model.BaseCommonData',
            data: [
                {
                    Id: 550,
                    Code: 'asperiores',
                    Name: 'optio',
                    Active: false
                },
                {
                    Id: 806,
                    Code: 'cupiditate',
                    Name: 'sit',
                    Active: true
                }
            ],
            proxy: {
                type: 'memory'
            }
        }, cfg)]);
    }
});