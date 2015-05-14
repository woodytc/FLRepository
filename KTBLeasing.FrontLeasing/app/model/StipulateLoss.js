/*
 * File: app/model/StipulateLoss.js
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

Ext.define('TabUserInformation.model.StipulateLoss', {
    extend: 'Ext.data.Model',
    alias: 'model.stipulateloss',

    requires: [
        'Ext.data.field.Integer',
        'Ext.data.field.Number'
    ],

    idProperty: 'Id',

    fields: [
        {
            type: 'int',
            name: 'Id'
        },
        {
            type: 'int',
            name: 'AppId'
        },
        {
            type: 'int',
            name: 'CLPerUnit'
        },
        {
            type: 'int',
            name: 'CLTotal'
        },
        {
            type: 'int',
            name: 'MDAmountFrom'
        },
        {
            type: 'float',
            name: 'MDAmountTo'
        },
        {
            type: 'float',
            name: 'MDPerUnit'
        },
        {
            type: 'float',
            name: 'MDTotal'
        },
        {
            type: 'float',
            name: 'MDAmountFrom2'
        },
        {
            type: 'float',
            name: 'MDAmountTo2'
        },
        {
            type: 'int',
            name: 'MDPerUnit2'
        },
        {
            type: 'int',
            name: 'MDTotal2'
        }
    ]
});