/*
* File: app.js
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

// @require @packageOverrides
Ext.Loader.setConfig({
    
});

Ext.application({
    models: [
        'UserInformation',
        'CustomerInformation',
        'Authorize',
        'Setup',
        'Address',
        'Signer',
        'Affidavit',
        'Role',
        'UserInRole',
        'Tab',
        'UserInTab',
        'Province',
        'CommonData',
        'BaseCommonData',
        'Job',
        'InformationForIndication',
        'Lead',
        'IndicationForEquipment',
        'Background',
        'Equipment',
        'CustomerInformationPopup',
        'Seller',
        'ApplicationDetail',
        'ThirdParty',
        'EquipmentList',
        'PurchaseOrder',
        'Guarantor',
        'GuarantorList',
        'Funding',
        'StipulateLoss',
        'OptionEndLeaseTerm',
        'Commission',
        'Maintenance',
        'Insurance',
        'InsuranceEquipment',
        'InsurancePolicy',
        'CollectionSchedule',
        'AnnualTax',
        'Approval',
        'DefineAddress',
        'WaiveDocument',
        'StampDuty',
        'MethodPayment',
        'BG',
        'EquipmentDetail',
        'MaintenanceList',
        'DueDay',
        'TermCondition',
        'AppDetail',
        'ARCard',
        'Installment',
        'RestructureList',
        'Agreement',
        'RoleInTabs',
        'Roles',
        'RequestTransaction',
        'Shareholder',
        'RedbookVehicle',
        'RegistrationForm',
        'USDCurrency',
        'EqpRel',
        //'VisitCalling',
        'Leads',
        'CreditApproval',
        'CreditLimitDetail',
        'Customer',
        'GuarantorModel'
    ],
    stores: [
        'userInformations',
        'authorizes',
        'setups',
        'addresses',
        'signers',
        'affidavits',
        'CommonData.roles',
        'userInRoles',
        'customerInformations',
        'leads',
        'informationForIndications',
        'indicationForEquipments',
        'applicationLists',
        'contactPersons',
        'equipment',
        'backgrounds',
        'CommonData.provinces',
        'commonDatas',
        'CommonData.titleNameThs',
        'CommonData.titleNameEns',
        'CommonData.marketingGroups',
        'CommonData.positions',
        'CommonData.departments',
        'CommonData.typeCustomers',
        'CommonData.industryCodes',
        'CommonData.custEngType',
        'CommonData.custThaiType',
        'CommonData.parentCompanies',
        'CommonData.natureCusts',
        'CommonData.groupCusts',
        'CommonData.typeCusts',
        'CommonData.KTBIsics',
        'CommonData.KTBCustTypes',
        'CommonData.sourceInformations',
        'CommonData.specialPrograms',
        'CommonData.currency',
        'CommonData.typeFinances',
        'CommonData.typeBusiness',
        'CommonData.payment',
        'CommonData.advanceArrear',
        'CommonData.InsuranceBorne',
        'CommonData.conditionLease',
        'CommonData.InsTerritory',
        'CommonData.committed',
        'CommonData.addressTypes',
        'CommonData.cardTypes',
        'CommonData.typeofcust',
        'CommonData.cusinfopopup',
        'sellers',
        'CommonData.status',
        'CommonData.typeApplications',
        'CommonData.typeLease',
        'CommonData.typeEquipment',
        'applicationDetails',
        'thirdParties',
        'CommonData.paymentMethod',
        'CommonData.paymentCondition',
        'equipmentLists',
        'purchaseOrders',
        'CommonData.purchaseOrders',
        'guarantors',
        'guarantorLists',
        'CommonData.banks',
        'CommonData.collaterals',
        'fundings',
        'CommonData.sources',
        'stipulateLosses',
        'CommonData.bankCharges',
        'optionEndLeaseTerms',
        'CommonData.residualValues',
        'CommonData.sellers',
        'CommonData.borneBy',
        'commissions',
        'maintenances',
        'CommonData.patterns',
        'insurances',
        'CommonData.insuranceCompany',
        'insuranceEquipments',
        'insuranceEquipments2',
        'insuranceEquipments3',
        'insurancePolicies',
        'collectionSchedules',
        'annualTaxes',
        'approvals',
        'defineAddresses',
        'CommonData.addressPurchaseOuder',
        'waiveDocuments',
        'stampDuties',
        'methodPayments',
        'CommonData.chassis',
        'CommonData.territory',
        'CommonData.methodPayment',
        'bGs',
        'CommonData.subTypesCommercialCar',
        'CommonData.brandsCommercialCar',
        'equipmentDetails',
        'maintenanceLists',
        'CommonData.brandsPassengerCar',
        'CommonData.brandsMachine',
        'CommonData.brandsFactoring',
        'CommonData.brandsOfficeAutomation',
        'CommonData.subTypesPassengerCar',
        'CommonData.subTypesMachine',
        'CommonData.subTypesFactoring',
        'CommonData.subTypesOfficeAutomation',
        'CommonData.rateTypes',
        'CommonData.percentEquipmentCostTypes',
        'CommonData.types',
        'CommonData.typeSimulations',
        'dueDays',
        'termConditions',
        'CommonData.paymentPeriods',
        'appDetails',
        'agreements',
        'arcards',
        'restructureLists',
    //'roleInTabs'
        'requestTransactions',
        'jobs',
        'redbookVehicles',
        'CommonData.registrationForms',
        'currency-USD',
        'CommonData.EQPs',
        'CommonData.DownHireInsurances',
        'CommonData.otherConditions',
        'CommonData.assetTypes',
        'CommonData.terms',
        'CommonData.termStyles',
        'CommonData.chequeConditions',
        'CommonData.insurances',
        'CommonData.regists',
        'CommonData.registAgencies',
        'CommonData.typeLeasings',
        'CommonData.products',
        'CommonData.guarantors',
        'creditApprovals',
        'creditLimitDetails',
        'CommonData.assetAmounts',
        'CommonData.downRates',
        'CommonData.branchs',
        'customers',
        'CommonData.units',
        'CommonData.limitTypes',
        'CommonData.limits',
        'CommonData.timeInsurances',
        'CommonData.assets',
        'guarantorModels',
        'CommonData.collateralTypes',
        'CommonData.BOTcollaterals',
        'CommonData.BOTSubcollaterals',
    ],
    views: [
        'User.UserInfWindow',
        'Customer.CusInfWindow',
        'Customer.CusInfTab',
        'Authorize.AuthorizeTab',
        'Setup.SetupTab',
        'Setup.SetupWindow',
        'Common.AddressWindow',
        'Common.SignerWindow',
        'Common.ContactPersonWindow',
        'Common.AffidavitWindow',
    //common address views use for all
        'Common.AddressViews',
        'VisitCalling.VisitCallingTab',
        'VisitCalling.VisitCallingWindow',
        'Home.index',
        'Customer.CusInfPopup',
        'User.UserInfPopup',
        'Common.ContactPersonPopup',
        'Job.JobTab',
        'Job.JobWindow',
        'Job.Information.InformationForIndicationWindow',
        'Home.MainTab',
        'VisitCalling.VisitCallingPopup',
        'Job.Indication.IndicationForEquipmentWindow',
        'Home.LoginWindow',
        'Job.Application.ApplicationWindow',
        'Role.RoleTab',
        'Role.UserInRoleTab',
        'ThirdParty.ThirdPartyInfTab',
        'ThirdParty.ThirdPartyInfWindow',
    //'Common.JobMenuAdd',
        'Common.AddressPopup',
        'Job.Lead.LeadTab',
        'Job.Information.InformationForIndicationTab',
        'Job.Information.DetailRequestTransaction',
        'Job.Indication.IndicationDetail',
        'ThirdParty.ThirdPartyInfPopup',
        'Job.Application.ApplicationDetail',
        'Job.Application.Tab.Insurance',
        'Job.Application.Tab.OptionAtEnd',
        'Job.Application.Tab.Seller',
        'Job.Application.Tab.PurchaseOrder',
        'Job.Application.Tab.Application',
        'Job.Application.Tab.ControlPaymentAdvice',
        'Job.Application.Tab.MethodPayment',
        'Job.Application.Window.Approval',
        'Job.Application.Window.EquipmentDetail',
        'Job.Application.Window.PurchaseOrderDetail',
        'Job.Application.Window.InsurancePolicy',
        'Common.SignerPopup',
        'Job.Application.Window.DefineAddress',
        'Job.Application.Window.AdditionSalePrice',
        'Job.Application.Window.BG',
        'Job.Application.Window.DueDay',
        'Job.Application.Window.AdditionEquipmentDetail',
        'Restructure.RestructureList',
        'Restructure.RestructureWindow',
        'Restructure.ARCard',
        'Approve.ApprovalWindow',
        'Approve.ApproveQueue',
        'Customer.Shareholders',
        'Lead.LeadWindow',
        'Financial.FinancialAmountWindow',
        'Financial.FinancialAmountDetail',
        'Financial.FinancialAmountTab',
        'Guarantor.GuarantorWindow',
        'Guarantor.GuarantorsWindow',
        'Customer.CustomerWindow'
    ],
    controllers: [
        'HomeController',
        'WindowController'
    ],
    name: 'TabUserInformation',

    launch: function () {
        if (window.Page === 'Restructure') {
            Ext.create('TabUserInformation.view.Restructure.RestructureList', { renderTo: Ext.getBody() });
        }
        else {
//            Ext.create('TabUserInformation.view.Financial.FinancialAmountTab', { renderTo: Ext.getBody() });
            //Ext.create('TabUserInformation.view.Job.Lead.LeadTab', { renderTo: Ext.getBody() });
            //        Ext.create('TabUserInformation.view.Home.index', { renderTo: Ext.getBody() });
//            Ext.create('TabUserInformation.view.Job.JobWindow', { renderTo: Ext.getBody() });
            //                Ext.create('TabUserInformation.view.Job.Application.ApplicationTab', { renderTo: Ext.getBody() });

            //Ext.create('TabUserInformation.view.Home.index', { renderTo: Ext.getBody() });
            //                    Ext.create('TabUserInformation.view.Approve.ApproveQueue', { renderTo: Ext.getBody() });

            var supportsLocalStorage = Ext.supports.LocalStorage,
                loggedIn;

            if (!supportsLocalStorage) {

                // Alert the user if the browser does not support localStorage
                Ext.Msg.alert('Your Browser Does Not Support Local Storage');
                return;
            }
            //sessionStorage
            // Check to see the current value of the localStorage key
            if (window.Page == 'logout') loggedIn = false;
            else
            loggedIn = sessionStorage.getItem("FLSystem");

            //            console.log(loggedIn);
            Ext.widget(loggedIn ? 'homeindex' : 'windowloginwindow');
        }
    }

});

