/*
 * File: app/model/GuarantorList.js
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

Ext.define('TabUserInformation.model.GuarantorList', {
    extend: 'Ext.data.Model',
    alias: 'model.guarantorlist',

    requires: [
        'Ext.data.field.Integer',
        'Ext.data.field.String'
    ],

    idProperty: 'Id',

    fields: [
        {
            type: 'int',
            name: 'Id'
        },
        {
            type: 'int',
            name: 'GuarantorId'
        },
        {
            name: 'GuarantorType'
        },
        {
            name: 'Name'
        },
        {
            type: 'string',
            name: 'Address'
        },
        {
            name: 'Signer1'
        },
        {
            name: 'Signer2'
        },
        {
            name: 'Person1'
        },
        {
            name: 'Position'
        },
        {
            type: 'string',
            name: 'PersonAddress'
        },
        {
            name: 'ConsentSpouse'
        },
        {
            type: 'string',
            name: 'SpouseAddress'
        }
    ]
});