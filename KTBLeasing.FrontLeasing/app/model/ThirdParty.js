/*
 * File: app/model/ThirdParty.js
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

Ext.define('TabUserInformation.model.ThirdParty', {
    extend: 'Ext.data.Model',
    alias: 'model.thirdparty',

    requires: [
        'Ext.data.field.Integer',
        'Ext.data.field.String',
        'Ext.data.field.Number'
    ],

    fields: [
        {
            type: 'int',
            name: 'Id'
        },
        {
            name: 'ThirdPartyCode'
        },
        {
            name: 'PersonType'
        },
        {
            name: 'TitleNameEn'
        },
        {
            name: 'NameEn'
        },
        {
            type: 'string',
            name: 'TitleNameTh'
        },
        {
            name: 'NameTh'
        },
        {
            name: 'Telephone'
        },
        {
            name: 'Fax'
        },
        {
            type: 'string',
            name: 'Email'
        },
        {
            name: 'HomePage'
        },
        {
            name: 'Tag'
        },
        {
            name: 'Vat'
        },
        {
            type: 'float',
            name: 'PaymentMethod'
        },
        {
            name: 'Bank1'
        },
        {
            name: 'Branch1'
        },
        {
            name: 'AccountType1'
        },
        {
            name: 'AccountNo1'
        },
        {
            name: 'Bank2'
        },
        {
            name: 'Branch2'
        },
        {
            name: 'AccountType2'
        },
        {
            name: 'AccountNo2'
        },
        {
            name: 'BankChargeBy'
        },
        {
            type: 'float',
            name: 'PaymentCondition'
        },
        {
            name: 'OtherRemark'
        },
        {
            name: 'Status'
        },
        {
            name: 'AddressEng1'
        },
        {
            name: 'AddressTh1'
        },
        {
            name: 'AddressEng2'
        },
        {
            name: 'AddressTh2'
        }
    ]
});