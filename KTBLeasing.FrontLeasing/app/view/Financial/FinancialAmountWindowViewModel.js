/*
 * File: app/view/Financial/FinancialAmountWindowViewModel.js
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

Ext.define('TabUserInformation.view.Financial.FinancialAmountWindowViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.financialfinancialamountwindow',

    formulas: {
        MaxHPLimit: function (get) {
            return get('CreditLimit') - get('LimitLeaseAmount');
        },

        MaxLeaseLimit: function (get) {
            return get('CreditLimit') - get('LimitHPAmount');
        }
    },

    stores: {
        productHP: {
            model: 'TabUserInformation.model.BaseCommonData',
            autoLoad: true,
            proxy: {
                type: 'rest',
                url: 'api/common/getcommonbynameeng?nameeng=product',
                reader: {
                    type: 'json'
                }
            },
            sorters: [{
                property: 'Id',
                direction: 'ASC'
            }],
            filters: [
                function (item) {
                    return item.get('Code') == 1;
                }
            ]
        },

        productLease: {
            model: 'TabUserInformation.model.BaseCommonData',
            autoLoad: true,
            proxy: {
                type: 'rest',
                url: 'api/common/getcommonbynameeng?nameeng=product',
                reader: {
                    type: 'json'
                }
            },
            sorters: [{
                property: 'Id',
                direction: 'ASC'
            }],
            filters: [
                function (item) {
                    return item.get('Code') == 2;
                }
            ]
        },

        customers: {
            model: 'TabUserInformation.model.Customer',
            //            session: true,
            sorters: [{
                property: 'Id',
                direction: 'ASC'
            }]
        },

        creditLimitDetails: {
            model: 'TabUserInformation.model.CreditLimitDetail',
            //            session: true,
            sorters: [{
                property: 'Id',
                direction: 'ASC'
            }],
            groupField: 'TypeLeasingCode'
        }
    }

});