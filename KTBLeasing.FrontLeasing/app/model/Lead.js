/*
 * File: app/model/Lead.js
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

Ext.define('TabUserInformation.model.Lead', {
    extend: 'Ext.data.Model',
    alias: 'model.lead',
    requires: [
        'Ext.data.field.Integer',
        'Ext.data.field.Date'
    ],

    fields: [
        {
            type: 'int',
            name: 'Id'
        },
        {
            type: 'int',
            defaultValue: 2014,
            name: 'Year'
        },
        {
            name: 'VSCode'
        },
        {
            name: 'Status'
        },
        {
            type: 'date',
            name: 'RequestDate'
        },
        {
            name: 'MarketingCode'
        },
        {
            name: 'Method'
        },
        {
            name: 'CustomerId'
        },
        {
            name: 'TypeCustomer'
        },
        {
            name: 'TitleNameTh'
        },
        {
            name: 'FirstNameTh'
        },
        {
            name: 'LastNameTh'
        },
        {
            name: 'Address'
        },
        {
            name: 'Telephone'
        },
        {
            name: 'Fax'
        },
        {
            name: 'Email'
        },
        {
            type: 'int',
            name: 'SubDistrict'
        },
        {
            name: 'ContactPersonTitleNameTh'
        },
        {
            name: 'ContactPersonFirstNameTh'
        },
        {
            name: 'ContactPersonLastNameTh'
        },
        {
            name: 'Position'
        },
        {
            name: 'Business'
        },
        {
            type: 'date',
            name: 'Establishment'
        },
        {
            name: 'SourceInformation'
        },
        {
            name: 'Remark'
        },
        {
            name: 'FinancialPolicy'
        },
        {
            name: 'TypeEQP'
        },
        {
            name: 'EQPAmount'
        },
        {
            name: 'PlanSchedule'
        },
        {
            name: 'Result'
        },
        {
            name: 'OtherComment'
        }
    ]
});