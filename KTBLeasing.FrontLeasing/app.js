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
    enabled: true
});

Ext.application({
    models: [
        'Restructure',
        'Installment',
        'RestructureList',
        'Agreement'
    ],
    stores: [
        'restructures',
        'agreements',
        'restructureLists'
    ],
    views: [
        'Restructure.RestructureList',
        'Restructure.RestructureWindow',
        'Restructure.ARCard',
    ],
    controllers: [
        'HomeController'
    ],
    name: 'TabUserInformation',

    launch: function () {
//        Ext.create('TabUserInformation.view.Home.index', { renderTo: Ext.getBody() });
        //        Ext.create('TabUserInformation.view.Job.Application.ApplicationTab', { renderTo: Ext.getBody() });
        Ext.create('TabUserInformation.view.Restructure.RestructureList', { renderTo: Ext.getBody() });
    }

});

