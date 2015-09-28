/*
 * File: app/view/Approve/ApproveQueueViewController.js
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

Ext.define('TabUserInformation.view.Approve.ApproveQueueViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.approveapprovequeue',

    onTextfieldKeyup: function (textfield, e, eOpts) {

    },

    onButtonApproveClick: function (button, e, eOpts) {

    },

    onButtonDeleteClick: function (button, e, eOpts) {

    },

    onViewItemDblClick: function (dataview, record, item, index, e, eOpts) {
        Ext.create('widget.approveapprovalwindow', {
            listeners: {
                beforerender: function (panel, e0pts) {
                    var form = panel.down('form').getForm();

                    form.loadRecord(record);
                }
            }
        }).show();
    }

});
