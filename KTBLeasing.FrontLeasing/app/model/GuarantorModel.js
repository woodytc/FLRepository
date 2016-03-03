/*
 * File: app/model/GuarantorModel.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('TabUserInformation.model.GuarantorModel', {
    extend: 'Ext.data.Model',
    alias: 'model.guarantormodel',

    requires: [
        'Ext.data.field.Integer',
        'Ext.data.field.String',
        'Ext.data.field.Boolean'
    ],

    proxy: {
        type: 'rest',
        url: 'api/Guarantor',
        reader: {
            type: 'json',
            totalProperty: 'total',
            rootProperty: 'data'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            allowSingle: false,
            dateFormat: 'c',
        },
        api: {
            create: 'api/Guarantor/Post'
        }
    },

    idProperty: 'Id',

    fields: [
//        {
//            type: 'int',
//            name: 'Id'
//        },
//        {
//            type: 'int',
//            name: 'KtbCollTypeDesc'
//        },
//        {
//            type: 'int',
//            name: 'KtbCollSubTypeDesc'
//        },
//        {
//            type: 'int',
//            name: 'BotCollTypeDesc'
//        },
//        {
//            type: 'int',
//            name: 'BotCollSubTypeDesc'
//        },
//        {
//            type: 'int',
//            name: 'CollateralNo'
//        },
//        {
//            type: 'int',
//            name: 'CollFlagCode'
//        },
//        {
//            name: 'IsExisting'
//        },
//        {
//            name: 'CifNo'
//        },
//        {
//            name: 'TaxId'
//        },
//        {
//            name: 'CitizenId'
//        },
//        {
//            type: 'boolean',
//            name: 'IsFlLimit'
//        },
//        {
//            type: 'boolean',
//            name: 'IsNonCrm'
//        },
//        {
//            type: 'boolean',
//            name: 'IsReqApprove'
//        },
//        {
//            name: 'GuarantorName'
//        },
//        {
//            type: 'int',
//            name: 'GuarantorTitleName'
    //        }

        {
            name: 'Id'
        },
        {
            type: 'int',
            name: 'PositionId'
        },
        {
            type: 'int',
            name: 'Positionguid'
        },
        {
            type: 'int',
            name: 'TypeCustomer'
        },
        {
            type: 'int',
            name: 'IndustryCode'
        },
        {
            name: 'NatureCust'
        },
        {
            type: 'int',
            name: 'TypeCust'
        },
        {
            type: 'int',
            name: 'TitleCustNameEng'
        },
        {
            type: 'int',
            name: 'TitleCustNameTh'
        },
        {
            name: 'TsicCode'
        },
        {
            type: 'int',
            name: 'CustType'
        },
        {
            name: 'FirstNameTh'
        },
        {
            name: 'LastNameTh'
        },
        {
            name: 'FullNameTh',
            convert: function (v, rec) {
                return rec.get('FirstNameTh') + ' ' + rec.get('LastNameTh');
            },
            depends: ['FirstNameTh', 'LastNameTh']
        },
        {
            name: 'FirstNameEng'
        },
        {
            name: 'LastNameEng'
        },
        {
            name: 'FullNameEng',
            convert: function (v, rec) {
                return rec.get('FirstNameEng') + ' ' + rec.get('LastNameEng');
            },
            depends: ['FirstNameEng', 'LastNameEng']
        },
        {
            type: 'int',
            name: 'ParentId'
        },
        {
            type: 'int',
            name: 'VsAreaProvince'
        },
        {
            type: 'int',
            name: 'VsAreaIndEstate'
        },
        {
            name: 'TaxNo'
        },
        {
            type: 'int',
            name: 'Vat'
        },
        {
            type: 'int',
            name: 'MarketingOfficer'
        },
        {
            name: 'Remark'
        },
        {
            type: 'boolean',
            name: 'Active',
            defaultValue: true
        },
        {
            type: 'int',
            name: 'GroupCust'
        },
        {
            name: 'PhoneNo'
        },
        {
            name: 'FaxNo'
        },
        {
            type: 'int',
            name: 'KTBCustType'
        },
        {
            name: 'Email'
        },
        {
            type: 'date',
            name: 'BirthDate'
        },
        {
            type: 'date',
            name: 'IdIssueDate'
        },
        {
            type: 'date',
            name: 'IdExpireDate'
        },
        {
            name: 'OwnerBranch'
        },
        {
            type: 'string',
            name: 'Contact'
        },
        {
            type: 'boolean',
            name: 'VAT_Registration'
        },
        {
            type: 'float',
            name: 'CreditLimit'
        },
        {
            type: 'int',
            name: 'CreditLimitId',
            reference: {
                parent: 'TabUserInformation.model.CreditLimitDetail'
            }
        }
    ]
});