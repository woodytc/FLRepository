/*
 * File: app/model/StipulateLoss.js
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
            name: 'Id'
        },
        {
            name: 'AppId'
        },
        {
            type: 'int',
            name: 'CommencementLeasePerUnit'
        },
        {
            type: 'int',
            name: 'CommencementLeaseTotal'
        },
        {
            type: 'int',
            name: 'MonthlyDiminishingAmountFrom'
        },
        {
            type: 'float',
            name: 'MonthlyDiminishingAmountTo'
        },
        {
            type: 'float',
            name: 'MonthlyDiminishingPerUnit'
        },
        {
            type: 'float',
            name: 'MonthlyDiminishingTotal'
        },
        {
            type: 'float',
            name: 'MonthlyDiminishingAmountFrom2'
        },
        {
            type: 'float',
            name: 'MonthlyDiminishingAmountTo2'
        },
        {
            type: 'int',
            name: 'MonthlyDiminishingPerUnit2'
        },
        {
            type: 'int',
            name: 'MonthlyDiminishingTotal2'
        }
    ]
});