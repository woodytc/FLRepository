/*
 * File: app/model/InformationForIndication.js
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

Ext.define('TabUserInformation.model.InformationForIndication', {
    extend: 'Ext.data.Model',
    alias: 'model.informationforindication',

    requires: [
        'Ext.data.field.Integer',
        'Ext.data.field.Date',
        'TabUserInformation.model.Approval'
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
            type: 'date',
            name: 'RequestDate',
            dateWriteFormat: 'MS'
        },
        {
            name: 'PrimaryJob'
        },
        {
            type: 'int',
            name: 'IndustryCode'
        },
        {
            type: 'int',
            name: 'MarketingCode'
        },
        {
            type: 'int',
            name: 'Year'
        },
        {
            name: 'LeadId'
        },
        {
            type: 'int',
            name: 'Nationality'
        },
        {
            type: 'int',
            name: 'CustomerId'
        },
        {
            type: 'int',
            name: 'TypeCustomer'
        },
        {
            type: 'int',
            name: 'GroupCust'
        },
        {
            type: 'int',
            name: 'TitleNameTh'
        },
        {
            name: 'FirstNameTh'
        },
        {
            name: 'LastNameTh'
        },
        {
            type: 'int',
            name: 'TypeBusiness'
        },
        {
            name: 'Address'
        },
        {
            type: 'int',
            name: 'SubDistrict'
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
            name: 'Business'
        },
        {
            type: 'int',
            name: 'TypeFinance'
        },
        {
            name: 'SubLesseeSyndicated'
        },
        {
            type: 'boolean',
            name: 'UsedEquipment'
        },
        {
            type: 'boolean',
            name: 'SpecialProgram'
        },
        {
            type: 'int',
            name: 'EQPYear'
        },
        {
            type: 'int',
            name: 'ProgramName'
        },
        {
            type: 'int',
            name: 'Currency'
        },
        {
            type: 'float',
            name: 'ExchangeRate'
        },
        {
            type: 'int',
            name: 'SourceInformation'
        },
        {
            name: 'Remark'
        },
        {
            type: 'boolean',
            name: 'Approve'
        }
    ],

    hasMany: 'TabUserInformation.model.Approval'
});