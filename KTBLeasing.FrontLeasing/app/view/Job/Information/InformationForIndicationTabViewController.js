/*
 * File: app/view/Job/Information/InformationForIndicationTabViewController.js
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

Ext.define('TabUserInformation.view.Job.Information.InformationForIndicationTabViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.jobinformationinformationforindicationtab',

    onGridpanelItemDblClick: function (dataview, record, item, index, e, eOpts) {
        var grid = this.getView().down('grid');

        var popup = Ext.createByAlias('widget.jobinformationinformationforindicationwindow', {
            listeners: {
                beforerender: function (panel, eOpts) {
                    var form = panel.down('form').getForm(),
                        formFooter = panel.lookupReference('form-footer').getForm(),
                        storeBackground = Ext.getStore('backgrounds'),
                        recordJob = Ext.getCmp('jobjobwindow').down('form').getForm().getRecord();

                    storeBackground.getProxy().extraParams.custId = recordJob.get('CustId');
                    storeBackground.load({
                        callback: function (records, operation, success) {
                            panel.lookupReference('form-background').getForm().loadRecord(records[0]);
                            form.loadRecord(record);
                            formFooter.loadRecord(record);
                        }
                    });

                },
                close: function (panel, eOpts) {
                    grid.view.refresh();
                }
            }
        });

        popup.show();
    },

    onButtonNewClick: function (button, e, eOpts) {
        var popup = Ext.create('widget.jobinformationinformationforindicationwindow', {
            listeners: {
                beforerender: function (panel, eOpts) {
                    var form = panel.down('form').getForm(),
                        formBackground = panel.lookupReference('form-background').getForm(),
                        storeBackground = Ext.getStore('backgrounds'),
                        record = Ext.create('model.informationforindication', {
                            JobId: Ext.getCmp('jobjobwindow').down('form').getForm().findField('Id').getValue()
                        }),
                        recordJob = Ext.getCmp('jobjobwindow').down('form').getForm().getRecord();

                    storeBackground.getProxy().extraParams.custId = recordJob.get('CustId');
                    storeBackground.load({
                        callback: function (records, operation, success) {
                            formBackground.loadRecord(records[0]);
                            form.loadRecord(record);
                        }
                    });

                }
            }
        }).show();
    }

});
