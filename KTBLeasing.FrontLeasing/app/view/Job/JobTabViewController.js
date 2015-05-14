/*
 * File: app/view/Job/JobTabViewController.js
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

Ext.define('TabUserInformation.view.Job.JobTabViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.jobjobtab',

    onButtonSearchClick: function (button, e, eOpts) {

    },

    onNewjobClick: function (button, e, eOpts) {
        Ext.Msg.show({
            title: 'Select Job',
            msg: 'Create New Job or Old Job',
            buttons: Ext.MessageBox.YESNOCANCEL,
            buttonText: { yes: 'New Job', no: 'Old Customer', cancel: 'Cancel' },
            icon: Ext.MessageBox.INFO,
            fn: function (btn) {
                if (btn == 'yes') {
                    var popup = Ext.create('widget.jobjobwindow');
                    popup.show();
                } else if (btn == 'no') {
                    var popup2 = Ext.create('widget.customercusinfpopup');
                    popup2.down('gridpanel').getStore().load();
                    popup2.show();
                }
            }
        });
    },

    onSelectjobClick: function (button, e, eOpts) {
        var popup = Ext.create('widget.jobjobwindow');
        popup.show();
    },

    onGridpanelItemDblClick: function (dataview, record, item, index, e, eOpts) {
        var popup = Ext.create('widget.jobjobwindow');
        popup.show();
    }

});
