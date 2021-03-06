/*
 * File: app/model/Restructure.js
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

Ext.define('TabUserInformation.model.ARCard', {
    extend: 'Ext.data.Model',
    alias: 'model.arcard',

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
            name: 'Agreement'
        },
        {
            name: 'Customer'
        },
        {
            type: 'date',
            name: 'RestructureDate'
        },
        {
            type: 'float',
            name: 'OS_PR'
        },
        {
            type: 'float',
            name: 'FlatRate'
        },
        {
            type: 'int',
            name: 'Day'
        },
        {
            type: 'float',
            name: 'Interest'
        },
        {
            type: 'float',
            name: 'UnpaidVAT'
        },
        {
            type: 'float',
            name: 'Penalty'
        },
        {
            type: 'float',
            name: 'DebitNote'
        },
        {
            type: 'float',
            name: 'NewFlatRate'
        },
        {
            type: 'date',
            name: 'NewFirstDueDate'
        },
        {
            type: 'int',
            name: 'SubsequentDueDay'
        },
        {
            type: 'int',
            name: 'NewTerm'
        },
        {
            type: 'float',
            name: 'EffectiveRate'
        }
    ]
});