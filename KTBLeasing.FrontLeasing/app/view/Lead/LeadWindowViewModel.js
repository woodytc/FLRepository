/*
 * File: app/view/Lead/LeadWindowViewModel.js
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

Ext.define('TabUserInformation.view.Lead.LeadWindowViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.leadleadwindow',

    stores: {
        guarantorLists: {
            autoLoad: true,
            model: 'TabUserInformation.model.GuarantorList',
            data: [
                {
                    Id: 240,
                    GuarantorId: 411,
                    GuarantorType: 'doloremque',
                    Name: 'qui',
                    Address: '44561 Dovetail Point',
                    Signer1: 'omnis',
                    Signer2: 'soluta',
                    Person1: 'voluptatem',
                    Position: 'ut',
                    PersonAddress: '198 Hovde Trail',
                    ConsentSpouse: 'necessitatibus',
                    SpouseAddress: '67 Sachtjen Way'
                },
                {
                    Id: 255,
                    GuarantorId: 294,
                    GuarantorType: 'doloremque',
                    Name: 'debitis',
                    Address: '4520 Northport Drive',
                    Signer1: 'quod',
                    Signer2: 'enim',
                    Person1: 'odit',
                    Position: 'in',
                    PersonAddress: '04 Kipling Center',
                    ConsentSpouse: 'dolorem',
                    SpouseAddress: '47 Elmside Place'
                },
                {
                    Id: 495,
                    GuarantorId: 447,
                    GuarantorType: 'quam',
                    Name: 'libero',
                    Address: '1 Jenifer Way',
                    Signer1: 'incidunt',
                    Signer2: 'sed',
                    Person1: 'ab',
                    Position: 'eveniet',
                    PersonAddress: '08 Dexter Crossing',
                    ConsentSpouse: 'voluptate',
                    SpouseAddress: '00 Surrey Drive'
                }
            ],
            proxy: {
                type: 'ajax',
                reader: {
                    type: 'json'
                }
            }
        }
    }
});