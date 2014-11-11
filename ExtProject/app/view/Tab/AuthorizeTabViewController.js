/*
 * File: app/view/Tab/AuthorizeTabViewController.js
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

Ext.define('TabUserInformation.view.Tab.AuthorizeTabViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tabauthorizetab',

    onButtonSearchClick: function(button, e, eOpts) {

    },

    onButtonAddClick: function(button, e, eOpts) {
        var rowEditing = this.getView().getComponent('grid').getPlugin('rowediting');
        rowEditing.cancelEdit();

        // Create a model instance
        var r = {
            id:0,
            myField:'Yeah'
        };

        var store = Ext.create('store.authorizes');
        store.insert(0, r);
        rowEditing.startEdit(0, 0);
    },

    onButtonSaveClick: function(button, e, eOpts) {

    },

    onButtonDeleteClick: function(button, e, eOpts) {
        Ext.MessageBox.confirm('Confirm','Confirm Delete?',this.showResult,this);
    }

});