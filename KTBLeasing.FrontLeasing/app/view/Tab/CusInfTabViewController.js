/*
 * File: app/view/Tab/CusInfTabViewController.js
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

Ext.define('TabUserInformation.view.Tab.CusInfTabViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tabcusinftab',

    onTextfieldKeyup: function (textfield, e, eOpts) {
        var grid = this.getView().down('gridpanel'),
            filters = grid.store.getFilters(),
            radiogroup = this.getView().down('radiogroup'),
            property = null;

        switch (radiogroup.getChecked()[0].inputValue) {
            case 'code':
                property = 'CustomerCode';
                break;
            case 'eng':
                property = 'CustomerEngName';
                break;
            case 'thai':
                property = 'CustomerThaiName';
                break;
        }

        if (textfield.value) {
            this.nameFilter = filters.add({ id: 'nameFilter',
                property: property,
                value: textfield.value,
                anyMatch: true,
                caseSensitive: false
            });
        } else if (this.nameFilter) {
            filters.remove(this.nameFilter);
            this.nameFilter = null;
        }
    },

    onGridpanelItemDblClick: function (dataview, record, item, index, e, eOpts) {
        if (this.getView().down('gridpanel').getSelection().length) {
            var popup = Ext.create('widget.windowcusinfwindow'),
                form = popup.down('form'),
                btnreset = popup.lookupReference('btnreset');
            btnreset.hide();
            form.loadRecord(record);
            popup.show();
        }
    },

    onButtonClick: function (button, e, eOpts) {
        var popup = Ext.create("widget.windowcusinfwindow");
        popup.show();
    },

    onButtonEditClick1: function (button, e, eOpts) {
        var record = this.getView().down('gridpanel').getSelection()[0];
        if (this.getView().down('gridpanel').getSelection().length) {
            var popup = Ext.create('widget.windowcusinfwindow'),
                form = popup.down('form'),
                btnreset = popup.lookupReference('btnreset');
            btnreset.hide();
            form.loadRecord(record);
            popup.show();
        }
    }

});
