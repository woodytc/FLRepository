/*
* File: app/model/ApplicationDetail.js
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

Ext.define('TabUserInformation.model.ApplicationDetail', {
    extend: 'Ext.data.Model',
    alias: 'model.applicationdetail',

    requires: [
        'Ext.data.field.Integer',
        'Ext.data.field.Date',
        'Ext.data.field.String',
        'Ext.data.field.Number'
    ],

    idProperty: 'Id',

    fields: [
        {
            type: 'int',
            name: 'Id'
        },
        {
            name: 'Code'
        },
        {
            name: 'Name'
        },
        {
            type: 'int',
            defaultValue: 2014,
            name: 'Year'
        },
        {
            name: 'ApplicationId'
        },
        {
            name: 'ApplicationType'
        },
        {
            type: 'date',
            name: 'ApplicationDate'
        },
        {
            name: 'PrimaryJob'
        },
        {
            name: 'IndicationLine'
        },
        {
            name: 'Status'
        },
        {
            name: 'AgreementNo'
        },
        {
            name: 'IntegralPartNo'
        },
        {
            name: 'ScheduleNo'
        },
        {
            name: 'CustomerCode'
        },
        {
            name: 'CustomerName'
        },
        {
            type: 'string',
            name: 'Telephone'
        },
        {
            type: 'string',
            name: 'Fax'
        },
        {
            name: 'MarketingOfficer'
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
            name: 'TypeLease'
        },
        {
            name: 'TypeEquipment'
        },
        {
            name: 'TypeBusiness'
        },
        {
            name: 'TypeCustomer'
        },
        {
            name: 'Business'
        },
        {
            name: 'SourceInformation'
        },
        {
            name: 'Remark'
        },
        {
            type: 'date',
            name: 'ApproveDate'
        },
        {
            name: 'DeliveryDate'
        },
        {
            type: 'date',
            name: 'AgreementDate'
        },
        {
            type: 'date',
            name: 'ExecuteDate'
        },
        {
            type: 'date',
            name: 'ScheduleDate'
        },
        {
            name: 'VAT'
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
            name: 'Rating'
        },
        {
            name: 'ExposureLimit'
        },
        {
            name: 'RatingDetail'
        },
        {
            type: 'date',
            name: 'RatingDate'
        }
    //        ,
    //        {
    //            name: 'DepositDownPayment'
    //        },
    //        {
    //            name: 'EquipmentCost'
    //        },
    //        {
    //            name: 'DepositDownVat'
    //        },
    //        {
    //            name: 'EquipmentVAT'
    //        },
    //        {
    //            name: 'DepositDownTotal'
    //        },
    //        {
    //            name: 'EquipmentTotal'
    //        },
    //        {
    //            name: 'DepositEquivalent'
    //        },
    //        {
    //            name: 'CostEquivalent'
    //        }

    ]
});