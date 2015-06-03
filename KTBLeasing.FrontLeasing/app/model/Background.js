/*
 * File: app/model/Background.js
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

Ext.define('TabUserInformation.model.Background', {
    extend: 'Ext.data.Model',
    alias: 'model.background',

    requires: [
        'Ext.data.field.Integer',
        'Ext.data.field.Date',
        'Ext.data.field.Number'
    ],

    idProperty: 'Id',

    fields: [
        {
            type: 'int',
            name: 'Id'
        },
        {
            name: 'InformationId'
        },
        {
            name: 'Business'
        },
        {
            type: 'date',
            name: 'Establishment',
            dateWriteFormat: 'MS'
        },
        {
            type: 'float',
            name: 'Rating'
        },
        {
            type: 'date',
            name: 'RatingDate',
            dateWriteFormat: 'MS'
        },
        {
            name: 'RatingDetail'
        },
        {
            type: 'float',
            name: 'RegisterCapital'
        },
        {
            name: 'RegisterCapitalDetail'
        },
        {
            type: 'float',
            name: 'Sales'
        },
        {
            type: 'date',
            name: 'SalesDate',
            dateWriteFormat: 'MS'
        },
        {
            name: 'SalesDetail'
        },
        {
            type: 'float',
            name: 'ProfitLoss'
        },
        {
            type: 'date',
            name: 'ProfitLossDate',
            dateWriteFormat: 'MS'
        },
        {
            name: 'ProfitLossDetail'
        },
        {
            type: 'float',
            name: 'ShareholderEquity'
        },
        {
            type: 'date',
            name: 'ShareholderEquityDate',
            dateWriteFormat: 'MS'
        },
        {
            name: 'ShareholderEquityDetail'
        },
        {
            type: 'float',
            name: 'OutstandingAmount'
        },
        {
            type: 'date',
            name: 'OutstandingAmountDate',
            dateWriteFormat: 'MS'
        },
        {
            type: 'float',
            name: 'ExposureLimit'
        },
        {
            type: 'date',
            name: 'ExposureLimitDate',
            dateWriteFormat: 'MS'
        },
        {
            type: 'int',
            name: 'Committed'
        }
    ]
});