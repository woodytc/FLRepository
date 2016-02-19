/*
 * File: app/model/CustomerInformation.js
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

Ext.define('TabUserInformation.model.CustomerInformation', {
    extend: 'Ext.data.Model',
    alias: 'model.customerinformation',

    requires: [
        'Ext.data.field.Integer'
    ],

    idProperty: 'CustomerId',

    fields: [
        {
            type: 'int',
            name: 'CustomerCode'
        },
        {
            type: 'int',
            name: 'CustomerId'
        },
        {
            name: 'CustomerEngName'
        },
        {
            name: 'CustomerThaiName'
        },
        {
            name: 'TypeCustomer'
        },
        {
            name: 'ParentCompany'
        },
        {
            name: 'Telephone'
        },
        {
            name: 'Email'
        },
        {
            name: 'TaxNo'
        },
        {
            name: 'Fax'
        },
        {
            name: 'KTBIsicCode'
        },
        {
            name: 'KTBCustType'
        },
        {
            type: 'boolean',
            name: 'VAT'
        },
        {
            type: 'int',
            name: 'IndustryCode'
        },
        {
            name: 'NatureCust'
        },
        {
            name: 'GroupCust'
        },
        {
            name: 'TypeCust'
        },
        {
            type: 'int',
            name: 'CustomerEngType'
        },
        {
            type: 'int',
            name: 'CustomerThaiType'
        },
        {
            name: 'Position1'
        },
        {
            name: 'Position2'
        },
        {
            name: 'Address1'
        },
        {
            name: 'Address2'
        },
        {
            type: 'string',
            name: 'SSID'
        },
        {
            type: 'int',
            name: 'VATRegistration'
        },
        {
            type: 'float',
            name: 'CreditLimit'
        },
        {
            type: 'int',
            name: 'CreditLimitId'
        }
    ]
});