/*
 * File: app/model/BaseCommonData.js
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

Ext.define('TabUserInformation.model.BaseCommonData', {
    extend: 'Ext.data.Model',
    alias: 'model.basecommondata',

    requires: [
        'Ext.data.field.Integer',
        'Ext.data.field.Boolean'
    ],

    idProperty: 'Id',

    fields: [
        {
            type: 'int',
            name: 'Id'
        },
        {
            name: 'Code'
        },
        {
            name: 'Name'
        },
        {
            type: 'boolean',
            name: 'Active'
        },
        {
            type: 'string',
            name: 'IdAndName',
            convert: function (v, rec) {
                return rec.get('Id') + ' ' + rec.get('Name');
            },
            depends: ['Id', 'Name']
        }
    ]
});