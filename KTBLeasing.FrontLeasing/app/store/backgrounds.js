/*
 * File: app/store/backgrounds.js
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

Ext.define('TabUserInformation.store.backgrounds', {
    extend: 'Ext.data.Store',
    alias: 'store.backgrounds',

    requires: [
        'TabUserInformation.model.Background',
        'Ext.data.proxy.Memory'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'backgrounds',
            model: 'TabUserInformation.model.Background',
            data: [
                {
                    Id: 826,
                    Business: 'voluptatem',
                    Establishment: '10/24/2004',
                    Rating: 995,
                    RatingDate: '2/5/2013',
                    RatingDetail: 'harum',
                    RegisterCapital: 50.93,
                    RegisterCapitalDetail: 'minima',
                    Sales: 616.96,
                    SalesDate: '2/11/2005',
                    SalesDetail: 'quod',
                    ProfitLoss: 971.16,
                    ProfitLossDate: '2/7/2002',
                    ProfitLossDetail: 'qui',
                    ShareholderEquity: 527.33,
                    ShareholderEquityDate: '3/5/2004',
                    ShareholderEquityDetail: 'sunt',
                    OutstandingAmount: 358.12,
                    OutstandingAmountDate: '8/13/2008',
                    ExposureLimit: 376.49,
                    ExposureLimitDate: '10/27/2001',
                    Committed: 670
                },
                {
                    Id: 737,
                    Business: 'consequatur',
                    Establishment: '7/10/2005',
                    Rating: 562,
                    RatingDate: '3/10/2006',
                    RatingDetail: 'quibusdam',
                    RegisterCapital: 811.25,
                    RegisterCapitalDetail: 'soluta',
                    Sales: 702.13,
                    SalesDate: '11/3/2009',
                    SalesDetail: 'itaque',
                    ProfitLoss: 356.57,
                    ProfitLossDate: '12/13/2014',
                    ProfitLossDetail: 'voluptas',
                    ShareholderEquity: 136.58,
                    ShareholderEquityDate: '10/1/2012',
                    ShareholderEquityDetail: 'alias',
                    OutstandingAmount: 71.2,
                    OutstandingAmountDate: '9/26/2003',
                    ExposureLimit: 268.31,
                    ExposureLimitDate: '10/22/2010',
                    Committed: 867
                },
                {
                    Id: 335,
                    Business: 'in',
                    Establishment: '1/20/2012',
                    Rating: 960,
                    RatingDate: '10/5/2011',
                    RatingDetail: 'iusto',
                    RegisterCapital: 290.19,
                    RegisterCapitalDetail: 'sunt',
                    Sales: 253.71,
                    SalesDate: '1/11/2010',
                    SalesDetail: 'delectus',
                    ProfitLoss: 20.88,
                    ProfitLossDate: '4/27/2012',
                    ProfitLossDetail: 'aut',
                    ShareholderEquity: 256.34,
                    ShareholderEquityDate: '3/12/2011',
                    ShareholderEquityDetail: 'corporis',
                    OutstandingAmount: 571.89,
                    OutstandingAmountDate: '9/15/2013',
                    ExposureLimit: 356.23,
                    ExposureLimitDate: '5/4/2006',
                    Committed: 831
                },
                {
                    Id: 284,
                    Business: 'non',
                    Establishment: '12/17/2010',
                    Rating: 747,
                    RatingDate: '10/19/2001',
                    RatingDetail: 'doloribus',
                    RegisterCapital: 219.01,
                    RegisterCapitalDetail: 'ut',
                    Sales: 422.51,
                    SalesDate: '3/23/2010',
                    SalesDetail: 'totam',
                    ProfitLoss: 557.56,
                    ProfitLossDate: '3/13/2013',
                    ProfitLossDetail: 'nam',
                    ShareholderEquity: 208.78,
                    ShareholderEquityDate: '3/2/2004',
                    ShareholderEquityDetail: 'adipisci',
                    OutstandingAmount: 198.57,
                    OutstandingAmountDate: '6/13/2001',
                    ExposureLimit: 169.23,
                    ExposureLimitDate: '7/2/2002',
                    Committed: 727
                },
                {
                    Id: 918,
                    Business: 'qui',
                    Establishment: '8/16/2004',
                    Rating: 616,
                    RatingDate: '3/5/2005',
                    RatingDetail: 'sint',
                    RegisterCapital: 307.53,
                    RegisterCapitalDetail: 'omnis',
                    Sales: 640.89,
                    SalesDate: '2/5/2006',
                    SalesDetail: 'ut',
                    ProfitLoss: 669.6,
                    ProfitLossDate: '8/28/2014',
                    ProfitLossDetail: 'ab',
                    ShareholderEquity: 313.22,
                    ShareholderEquityDate: '10/11/2013',
                    ShareholderEquityDetail: 'distinctio',
                    OutstandingAmount: 28.22,
                    OutstandingAmountDate: '4/15/2011',
                    ExposureLimit: 179.32,
                    ExposureLimitDate: '5/3/2004',
                    Committed: 566
                }
            ],
            proxy: {
                type: 'memory'
            }
        }, cfg)]);
    }
});