/*
 * File: app/model/OptionEndLeaseTerm.js
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

Ext.define('TabUserInformation.model.OptionEndLeaseTerm', {
    extend: 'Ext.data.Model',
    alias: 'model.optionendleaseterm',

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
            name: 'AppId'
        },
        {
            type: 'boolean',
            name: 'PurchaseOption'
        },
        {
            type: 'int',
            name: 'ResidualValue'
        },
        {
            type: 'int',
            name: 'ResidualValuePercent'
        },
        {
            name: 'Others'
        },
        {
            type: 'int',
            name: 'Renewal'
        },
        {
            type: 'int',
            name: 'Term'
        },
        {
            type: 'boolean',
            name: 'Rental'
        },
        {
            type: 'int',
            name: 'RentalTotal'
        },
        {
            type: 'int',
            name: 'RentalTotalBHT'
        },
        {
            type: 'int',
            name: 'ResidualValueTotal'
        },
        {
            type: 'int',
            name: 'ResidualValueTotalBHT'
        },
        {
            type: 'int',
            name: 'ResidualValuePercentEQ'
        },
        {
            type: 'boolean',
            name: 'Return'
        },
        {
            type: 'int',
            name: 'GuaranteeBuyBackTotal'
        },
        {
            type: 'int',
            name: 'GuaranteeBuyBackTotalBHT'
        },
        {
            type: 'int',
            name: 'GuaranteeBuyBackPercentEQ'
        },
        {
            name: 'BuyerName'
        }
    ]
});