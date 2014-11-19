/*
* File: app/store/userInRoles.js.js
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

Ext.define('TabUserInformation.store.userInRoles', {
    extend: 'Ext.data.Store',
    alias: 'store.userInRoles',

    requires: [
        'TabUserInformation.model.UserInRole',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json'
    ],

    config: {
        id: 'userInRoles'
    },

    constructor: function (cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'userInRoles',
            model: 'TabUserInformation.model.UserInRole',
            autoLoad: true,
            pageSize: 16,
            proxy: {
                type: 'rest',
                url: 'api/role',
                reader: {
                    type: 'json',
                    rootProperty: 'items',
					totalProperty:'totalProperty'
                }
            }
        }, cfg)]);
    }
});

