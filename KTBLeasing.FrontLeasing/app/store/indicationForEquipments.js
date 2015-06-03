/*
 * File: app/store/indicationForEquipments.js
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

Ext.define('TabUserInformation.store.indicationForEquipments', {
    extend: 'Ext.data.Store',
    alias: 'store.indicationforequipment',

    requires: [
        'TabUserInformation.model.IndicationForEquipment',
        'Ext.data.proxy.Memory',
        'Ext.util.Grouper'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            groupField: 'Year',
            storeId: 'indicationForEquipments',
            model: 'TabUserInformation.model.IndicationForEquipment',
            autoLoad: true,
            proxy: {
                type: 'rest',
                url: 'api/indicationequipment',
                reader: {
                    type: 'json'
                },
                writer: {
                    type: 'json',
                    writeAllFields: true
                },
                api: {
                    create: 'api/indicationequipment/Post'
                }
            },
            sorters: [{
                property: 'Id',
                direction: 'ASC'
            }]
//            grouper: {
//                groupFn: function(item) {
//                    return Ext.Date.format(item.get('CreateDate'),'Y');
//                },
//                property: 'Year'
//            }
        }, cfg)]);
    }
});