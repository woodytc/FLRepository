/*
* File: app/store/leads.js
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

Ext.define('TabUserInformation.store.leads', {
    extend: 'Ext.data.Store',
    alias: 'store.leads',

    requires: [
        'TabUserInformation.model.Lead',
        'Ext.data.proxy.Memory'
    ],

    constructor: function (cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            groupField: 'Year',
            storeId: 'leads',
            model: 'TabUserInformation.model.Lead',
            autoLoad: true,
//            data: [
//                {
//                    Id: 288,
//                    Year: 2006,
//                    LeadId: 'voluptatem',
//                    Status: 'voluptate',
//                    RequestDate: '4/10/2011',
//                    MarketingCode: 'non',
//                    Method: 'est',
//                    CustomerId: 'soluta',
//                    TypeCustomer: 'qui',
//                    TitleNameTh: 'beatae',
//                    FirstNameTh: 'magni',
//                    LastNameTh: 'omnis',
//                    Address: 'nam',
//                    Telephone: 'atque',
//                    Fax: 'iure',
//                    Email: 'dicta',
//                    SubDistrict: 'dolorem',
//                    ContactPersonTitleNameTh: 'et',
//                    ContactPersonFirstNameTh: 'laboriosam',
//                    ContactPersonLastNameTh: 'nam',
//                    Position: 'optio',
//                    Business: 'sunt',
//                    Establishment: '3/2/2014',
//                    SourceInformation: 'eum',
//                    Remark: 'quas',
//                    FinancialPolicy: 'et',
//                    TypeEQP: 'fugiat',
//                    EQPAmount: 'voluptatem',
//                    PlanSchedule: 'January',
//                    Result: 'consectetur',
//                    OtherComment: 'vero'
//                },
//                {
//                    Id: 805,
//                    Year: 1977,
//                    LeadId: 'recusandae',
//                    Status: 'minus',
//                    RequestDate: '9/6/2007',
//                    MarketingCode: 'architecto',
//                    Method: 'voluptatem',
//                    CustomerId: 'exercitationem',
//                    TypeCustomer: 'amet',
//                    TitleNameTh: 'recusandae',
//                    FirstNameTh: 'dolores',
//                    LastNameTh: 'reiciendis',
//                    Address: 'omnis',
//                    Telephone: 'vero',
//                    Fax: 'consequatur',
//                    Email: 'culpa',
//                    SubDistrict: 'praesentium',
//                    ContactPersonTitleNameTh: 'nam',
//                    ContactPersonFirstNameTh: 'consequatur',
//                    ContactPersonLastNameTh: 'rerum',
//                    Position: 'quaerat',
//                    Business: 'voluptatum',
//                    Establishment: '4/23/2014',
//                    SourceInformation: 'qui',
//                    Remark: 'est',
//                    FinancialPolicy: 'iure',
//                    TypeEQP: 'quas',
//                    EQPAmount: 'occaecati',
//                    PlanSchedule: '6/2/2007',
//                    Result: 'ut',
//                    OtherComment: 'voluptas'
//                },
//                {
//                    Id: 199,
//                    Year: 1970,
//                    LeadId: 'occaecati',
//                    Status: 'quia',
//                    RequestDate: '4/10/2014',
//                    MarketingCode: 'minima',
//                    Method: 'nemo',
//                    CustomerId: 'accusamus',
//                    TypeCustomer: 'non',
//                    TitleNameTh: 'alias',
//                    FirstNameTh: 'ab',
//                    LastNameTh: 'similique',
//                    Address: 'veritatis',
//                    Telephone: 'error',
//                    Fax: 'quidem',
//                    Email: 'architecto',
//                    SubDistrict: 'perspiciatis',
//                    ContactPersonTitleNameTh: 'quis',
//                    ContactPersonFirstNameTh: 'eos',
//                    ContactPersonLastNameTh: 'et',
//                    Position: 'quia',
//                    Business: 'eius',
//                    Establishment: '5/6/2007',
//                    SourceInformation: 'quia',
//                    Remark: 'cum',
//                    FinancialPolicy: 'necessitatibus',
//                    TypeEQP: 'vel',
//                    EQPAmount: 'et',
//                    PlanSchedule: '2/28/2007',
//                    Result: 'voluptas',
//                    OtherComment: 'inventore'
//                },
//                {
//                    Id: 393,
//                    Year: 1979,
//                    LeadId: 'excepturi',
//                    Status: 'quis',
//                    RequestDate: '2/6/2010',
//                    MarketingCode: 'velit',
//                    Method: 'quo',
//                    CustomerId: 'voluptates',
//                    TypeCustomer: 'autem',
//                    TitleNameTh: 'consequatur',
//                    FirstNameTh: 'sunt',
//                    LastNameTh: 'enim',
//                    Address: 'ex',
//                    Telephone: 'doloremque',
//                    Fax: 'dolorem',
//                    Email: 'atque',
//                    SubDistrict: 'voluptatum',
//                    ContactPersonTitleNameTh: 'et',
//                    ContactPersonFirstNameTh: 'voluptatem',
//                    ContactPersonLastNameTh: 'et',
//                    Position: 'fugit',
//                    Business: 'ex',
//                    Establishment: '12/15/2011',
//                    SourceInformation: 'debitis',
//                    Remark: 'pariatur',
//                    FinancialPolicy: 'eos',
//                    TypeEQP: 'autem',
//                    EQPAmount: 'quam',
//                    PlanSchedule: '4/6/2004',
//                    Result: 'ullam',
//                    OtherComment: 'perspiciatis'
//                },
//                {
//                    Id: 878,
//                    Year: 1975,
//                    LeadId: 'veniam',
//                    Status: 'mollitia',
//                    RequestDate: '2/20/2009',
//                    MarketingCode: 'facilis',
//                    Method: 'quae',
//                    CustomerId: 'quam',
//                    TypeCustomer: 'velit',
//                    TitleNameTh: 'sed',
//                    FirstNameTh: 'excepturi',
//                    LastNameTh: 'est',
//                    Address: 'voluptatem',
//                    Telephone: 'dolores',
//                    Fax: 'eum',
//                    Email: 'voluptas',
//                    SubDistrict: 'cupiditate',
//                    ContactPersonTitleNameTh: 'ab',
//                    ContactPersonFirstNameTh: 'sunt',
//                    ContactPersonLastNameTh: 'et',
//                    Position: 'adipisci',
//                    Business: 'voluptatem',
//                    Establishment: '11/12/2002',
//                    SourceInformation: 'est',
//                    Remark: 'doloremque',
//                    FinancialPolicy: 'veniam',
//                    TypeEQP: 'voluptatum',
//                    EQPAmount: 'impedit',
//                    PlanSchedule: '9/10/2002',
//                    Result: 'magnam',
//                    OtherComment: 'itaque'
//                }
//            ],
//            proxy: {
//                type: 'memory'
//            }
            proxy: {
                type: 'rest',
                url: 'api/lead',
                reader: {
                    type: 'json'
                },
            }
        }, cfg)]);
    }
});