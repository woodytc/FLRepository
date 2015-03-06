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

    fields: [
        {
            type: 'int',
            name: 'CustomerCode'
        },
        {
            name: 'CustomerEngType'
        },
        {
            name: 'CustomerThaiType'
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
            name: 'VAT'
        },
        {
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
        }
    ]
});