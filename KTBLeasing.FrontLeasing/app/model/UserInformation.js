/*
 * File: app/model/UserInformation.js
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

Ext.define('TabUserInformation.model.UserInformation', {
    extend: 'Ext.data.Model',
    alias: 'model.userinformation',

    requires: [
        'Ext.data.field.String'
    ],

    idProperty: 'UserId',

    fields: [
        {
            type: 'string',
            name: 'UserId',
            mapping: 'UsersAuthorize.UserId'
        },
        {
            type: 'string',
            name: 'TitleNameTh'
        },
        {
            type: 'string',
            name: 'TitleNameEng'
        },
        {
            type: 'string',
            name: 'FirstNameTh'
        },
        {
            type: 'string',
            name: 'LastNameTh'
        },
        {
            type: 'string',
            name: 'FirstNameEng'
        },
        {
            type: 'string',
            name: 'LastNameEng'
        },
        {
            type: 'string',
            name: 'Position'
        },
        {
            type: 'string',
            name: 'MarketingGroup'
        },
        {
            type: 'string',
            name: 'MarketingCode'
        },
        {
            type: 'string',
            name: 'CreateDate'
        },
        {
            type: 'string',
            name: 'UpdateDate'
        },
        {
            type: 'string',
            name: 'CreateBy'
        },
        {
            type: 'string',
            name: 'UpdateBy'
        },
        {
            type: 'string',
            name: 'Id'
        },
        {
            type: 'string',
            name: 'DepartmentCode'
        }
    ]
});