/*
 * File: app/view/Customer/ShareholdersViewModel.js
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

Ext.define('TabUserInformation.view.Customer.ShareholdersViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.customershareholders',

    requires: [
        'Ext.data.Store',
        'Ext.data.proxy.Memory',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json',
        'Ext.util.Sorter'
    ],

    stores: {
        shareholders: {
            autoLoad: true,
            model: 'TabUserInformation.model.Shareholder',
            data: [
                {
                    Id: 820,
                    InformationId: 368,
                    ShareholderName: 'doloribus',
                    Part: 77
                },
                {
                    Id: 693,
                    InformationId: 286,
                    ShareholderName: 'aliquam',
                    Part: 979
                },
                {
                    Id: 502,
                    InformationId: 673,
                    ShareholderName: 'suscipit',
                    Part: 430
                }
            ],
            proxy: {
                type: 'memory',
                reader: {
                    type: 'json'
                },
                writer: {
                    type: 'json',
                    writeAllFields: true
                }
            },
            sorters: {
                property: 'Id'
            }
        }
    }

});