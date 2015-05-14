/*
 * File: app/view/Job/Application/Tab/CollectionScheduleViewController.js
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

Ext.define('TabUserInformation.view.Job.Application.Tab.CollectionScheduleViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.jobapplicationtabcollectionschedule',

    onStoreBeforeLoad: function (store, operation, eOpts) {
        var Id = Ext.decode(sessionStorage.getItem('AppDetail')).Id;
        store.getProxy().extraParams.id = Id;
        store.getProxy().extraParams.name = 'CollectionSchedule';
    }
});
