/*
 * File: app/store/applications.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('TabUserInformation.store.applicationLists', {
    extend: 'Ext.data.Store',

    requires: [
        'TabUserInformation.model.ApplicationList',
        'Ext.data.proxy.Memory'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'applicationLists',
            model: 'TabUserInformation.model.ApplicationList',
            data: [
                {
                    Id: 1,
                    Year: 2014,
                    Name: '14-0001-01'
                },
                {
                    Id: 2,
                    Year: 2014,
                    Name: '14-0002-01'
                },
                {
                    Id: 3,
                    Year: 2015,
                    Name: '15-0001-01'
                }
            ],
            proxy: {
                type: 'memory'
            }
        }, cfg)]);
    }
});