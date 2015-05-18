/*
 * File: app/view/Role/RoleTabViewController.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
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

Ext.define('TabUserInformation.view.Role.RoleTabViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.roleroletab',

    config: {
        addState: false
    },

    onSave: function (button, e, eOpts) {
        var form = this.getReferences().form,
            values = form.getForm().getValues(),
            store = this.getStore('roles');
        console.log('save');
        // Valid
        if (form.isValid()) {

            // TODO: Assign the record's ID from data source
            // Normally, this value would be auto-generated,
            // or returned from the server
            values.id = store.count() + 1;

            // Save record
            store.add(values);

            // Commit changes
            store.commitChanges();

            // Complete
            form.close();

        }
    },

    onAddClick: function (button, e, eOpts) {
        console.log(eOpts);
        var store = this.getStore('roles'),
            rowEditing = this.getView().down('gridpanel').editingPlugin,
            row = Ext.create('TabUserInformation.model.Roles');

        console.log(row);
        //canecl edit if other row state edit
        rowEditing.cancelEdit();

        //check state add
        if (!this.addState) {

            console.log(this.addState);



            console.log(row);

            store.insert(0, row);

            rowEditing.startEdit(0, 0);

            this.addState = true;

        } else {

            store.removeAt(0);

            store.insert(0, Ext.create('TabUserInformation.model.Roles'));

            rowEditing.startEdit(0, 0);

        }


        /*
        var modified= store.getModifiedRecords();

        store.insert(0,Ext.create('TabUserInformation.model.Roles'));

        rowEditing.startEdit(0, 0);

        console.log(rowEditing.getState());

        */

    },

    onDeleteClick: function (button, e, eOpts) {
        console.log(eOpts);

        var selMod = this.getView().down('gridpanel').getSelection(),
            store = this.getStore('roles');

        Ext.Object.eachValue(selMod, function (value) {

            store.remove(value);

            //store.commitChanges();

        });
        store.sync();
        //store.commitChanges();


    },

    onSaveClick: function (button, e, eOpts) {
        console.log(eOpts);

        var store = this.getView().down('gridpanel').getStore();

        console.log(store.data);
        store.sync();

        this.getStore('roles').commitChanges();

    },

    onRowEditingBeforeEdit: function (editor, context, eOpts) {
        //console.log(eOpts);
        if (this.addState) {
            store = this.getStore('roles').removeAt(0);
            this.addState = false;
        }
    },

    onRowEditingCanceledit: function (editor, context, eOpts) {
        //console.log(eOpts);
        if (this.addState) {
            store = this.getStore('roles').removeAt(0);
            this.addState = false;

        } else {

        }
    },

    onRowEditingEdit: function (editor, context, eOpts) {
        console.log('onRowEditingEdit');

        this.addState = false;
        //this.getStore('roles').sync();

    },

    onRowEditingValidateedit: function (editor, context, eOpts) {
        //console.log(eOpts);
    }

});