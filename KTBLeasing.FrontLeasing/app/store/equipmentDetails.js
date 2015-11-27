/*
 * File: app/store/equipmentDetails.js
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

Ext.define('TabUserInformation.store.equipmentDetails', {
    extend: 'Ext.data.Store',
    alias: 'store.equipmentdetails',

    requires: [
        'TabUserInformation.model.EquipmentDetail',
        'Ext.data.proxy.Memory'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'equipmentDetails',
            model: 'TabUserInformation.model.EquipmentDetail',
//            autoLoad: true,
            proxy: {
                type: 'rest',
                url: 'api/ApplicationDetail',
                reader: {
                    type: 'json'
                },
                writer: {
                    type: 'json',
                    writeAllFields: true
                },
                api: {
                    create: 'api/ApplicationDetail/Post'
                }
            },
            sorters: [{
                property: 'Id',
                direction: 'ASC'
            }]
        }, cfg)]);
    }
});