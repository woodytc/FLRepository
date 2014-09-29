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
        'Setup'
    ],
    stores: [
        'userInformations',
        'customerInformations',
        'authorizes',
        'setups'
    ],
    views: [
        'UserInfWindow',
        'index',
        'CusInfWindow',
        'CusInfTab',
        'AuthorizeTab',
        'SetupTab'
    ],
    name: 'TabUserInformation',

    launch: function() {
        Ext.create('TabUserInformation.view.index', {renderTo: Ext.getBody()});
    }

});