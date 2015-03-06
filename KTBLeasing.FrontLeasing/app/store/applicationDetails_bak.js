/*
 * File: app/store/applicationDetails.js
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

Ext.define('TabUserInformation.store.applicationDetails', {
    extend: 'Ext.data.Store',
    alias: 'store.applicationdetails',

    requires: [
        'TabUserInformation.model.ApplicationDetail',
        'Ext.data.proxy.Memory'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            groupField: 'Year',
            storeId: 'applicationDetails',
            model: 'TabUserInformation.model.ApplicationDetail',
            data: [
                {
                    Id: 472,
                    Code: 'eveniet',
                    Name: 'earum',
                    Year: 2003,
                    ApplicationId: 320,
                    ApplicationType: 'adipisci',
                    ApplicationDate: '6/13/2005',
                    PrimaryJob: 'autem',
                    IndicationLine: 'corporis',
                    Status: 'occaecati',
                    AgreementNo: 'iure',
                    IntegralPartNo: 'fuga',
                    ScheduleNo: 'et',
                    CustomerCode: 770,
                    CustomerName: 'suscipit',
                    Telephone: '(704) 420-4190',
                    Fax: '(508) 002-3522',
                    MarketingOfficer: 'dolorem',
                    IndustryCode: 'harum',
                    NatureCust: 'eaque',
                    GroupCust: 'architecto',
                    TypeLease: 'aliquid',
                    TypeEquipment: 'similique',
                    TypeBusiness: 'similique',
                    TypeCustomer: 'at',
                    Business: 'enim',
                    SourceInformation: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.',
                    Remark: 'in',
                    ApproveDate: '2/16/2006',
                    DeliveryDate: '9/25/2013',
                    AgreementDate: '3/15/2011',
                    ExecuteDate: '4/9/2004',
                    ScheduleDate: '12/17/2004',
                    VAT: 'nulla',
                    Currency: 94.32,
                    ExchangeRate: 73.94,
                    Rating: 569,
                    ExposureLimit: 'voluptatem',
                    RatingDetail: 718,
                    RatingDate: '8/14/2004',
                    Guarantor: {
                        Id: 173,
                        ConditionLease: 'minima',
                        BGNo: 'aut',
                        BGReceivedDate: '2/13/2005',
                        ConfirmPrintedDate: '2/7/2006',
                        ReturnDate: '7/19/2011',
                        Bank: 'sed',
                        Branch: 'dolores',
                        BGAmount: 337.51,
                        BGDate: '2/19/2011',
                        PeriodFrom: '3/8/2010',
                        PeriodTo: '3/10/2003',
                        BuyerName: 'dolor',
                        RSAAmount: 661.53,
                        EquipmentSalesPrintedDate: '7/4/2002',
                        Signer1EquipmentSales: 'at',
                        Signer2EquipmentSales: 966.42,
                        WithnessEquipmentSales: 413.73,
                        AddressEquipmentSales: 107.93,
                        Collateral: 'laborum',
                        CollateralDetail: 'officiis',
                        AdditionalCondition: 'inventore'
                    },
                    Funding: {
                        Id: 685,
                        CustomerCode: 'velit',
                        Source: 864,
                        NetRate: 452.6,
                        FundingCost: 455.83,
                        Spread: 759.07,
                        ProfitFromSpread: 867.64,
                        CreditNetRate: 86.48,
                        CreditSpread: 910.28,
                        CreditProfit: 629.11
                    },
                    StipulateLoss: {
                        Id: 'rerum',
                        CustomerCode: 'excepturi',
                        CommencementLeasePerUnit: 167,
                        CommencementLeaseTotal: 736,
                        MonthlyDiminishingAmountFrom: 765,
                        MonthlyDiminishingAmountTo: 871.97,
                        MonthlyDiminishingPerUnit: 595.14,
                        MonthlyDiminishingTotal: 996.28,
                        MonthlyDiminishingAmountFrom2: 412.85,
                        MonthlyDiminishingAmountTo2: 153.23,
                        MonthlyDiminishingPerUnit2: 737,
                        MonthlyDiminishingTotal2: 513
                    },
                    OptionEndLeaseTerm: {
                        Id: 501,
                        CustomerCode: 'aliquid',
                        PurchaseOption: true,
                        ResidualValue: 950,
                        ResidualValuePercent: 996,
                        Others: 'et',
                        Renewal: 999,
                        Term: 754,
                        Rental: true,
                        RentalTotal: 359,
                        RentalTotalBHT: 819,
                        ResidualValueTotal: 505,
                        ResidualValueTotalBHT: 182,
                        ResidualValuePercentEQ: 689,
                        Return: true,
                        GuaranteeBuyBackTotal: 777,
                        GuaranteeBuyBackTotalBHT: 727,
                        GuaranteeBuyBackPercentEQ: 574,
                        BuyerName: 'atque'
                    },
                    Commission: {
                        Id: 635,
                        CustomerCode: 'aperiam',
                        PayCompanyName: 'magnam',
                        PayAmount: 398.13,
                        PayDetail: 'et',
                        PayPaymentCondition: 544.27,
                        ReceiveCompanyName: 'iusto',
                        ReceiveAmount: 357.36,
                        ReceiveDetail: 'consequatur',
                        ReceivePaymentCondition: 162
                    },
                    Maintenance: {
                        Id: 759,
                        CustomerCode: 'aperiam',
                        PayTo: 'eligendi',
                        PaymentCondition: 488,
                        Pattern: 834,
                        FirstDue: 187.32,
                        SecondDue: 928.22,
                        LastDue: 128.7
                    },
                    Insurance: {
                        Id: 371,
                        CustomerCode: 'quae',
                        InsuranceCompany: 278,
                        PaymentCondition: 387.54,
                        Equipment1: 'dolores',
                        BorneBy1: 629,
                        Equipment2: 'dicta',
                        BorneBy2: 487,
                        ExceptEquipment: 'vero',
                        Remark: 'veniam'
                    },
                    CollectionSchedule: {
                        Id: 172,
                        CustomerCode: 'sunt',
                        CollectionDate: '3/7/2012',
                        Collection: 'atque',
                        Principal: 383.38,
                        Receivable: 66.67
                    },
                    WaiveDocument: {
                        Id: 194,
                        CustomerCode: 'eum',
                        Document: 'quia',
                        Reason: 'voluptatem'
                    },
                    StampDuty: {
                        Id: 566,
                        CustomerCode: 'et',
                        BorneBy: 409,
                        Amount: 475.54
                    },
                    MethodPayment: {
                        Id: 53,
                        CustomerCode: 'doloremque',
                        MethodPayment: 979,
                        BankCharges: 7,
                        ChequeAmount: 894.55
                    }
                }
            ],
            proxy: {
                type: 'memory'
            }
        }, cfg)]);
    }
});