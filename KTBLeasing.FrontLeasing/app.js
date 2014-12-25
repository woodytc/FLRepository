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
//Ext.Loader.setConfig({

//});


Ext.application({
    models: [
        'UserInformation',
        'CustomerInformation',
        'Authorize',
        'Setup',
        'Address',
        'Signer',
        'Affidavit',
        'UserInRole',
        'Role',
        'UserInTab',
        'Tab',
        'CommonData',
		'Province',
        'BaseCommonData'
//        'Company'
    ],
    stores: [
        'userInformations',
        'customerInformations',
        'authorizes',
        'setups',
        'addresses',
        'signers',
        'affidavits',
        'MyJsonStore',
        'userInRoles',
        'roles',
        'userInTabs',
        'tabs',
        'commonDatas',
		'provinces',
        'titleNameThs',
        'titleNameEns',
        'marketingGroups',
        'positions',
        'departments'
//        'companies'
    ],
    views: [
        'Window.UserInfWindow',
        'Window.CusInfWindow',
        'Tab.CusInfTab',
        'Tab.AuthorizeTab',
        'Tab.SetupTab',
        'Window.AddressWindow',
        'Window.SignerWindow',
        'Window.ContactPersonWindow',
        'Window.AffidavitWindow',
        'Window.PowerOfAttorneyWindow',
        'Tab.VisitCallingTab',
        'Window.VistiCallingWindow',
        'index',
        'Popup.CusInfPopup',
        'Popup.UserInfPopup',
        'Popup.ContactPersonPopup',
        'Tab.JobTab',
        'Window.JobWindow',
        'Window.InformationForIndicationWindow',
        'MainTab',
        'Popup.VisitCallingPopup',
        'Window.IndicationForEquipmentWindow',
        'Window.LoginWindow',
        'Window.ApplicationWindow',
        'Tab.UserInRoleTab'
    ],
    controllers: [
        'HomeController'
    ],
    name: 'TabUserInformation',

    launch: function() {
        Ext.create('TabUserInformation.view.index');
    }

});
