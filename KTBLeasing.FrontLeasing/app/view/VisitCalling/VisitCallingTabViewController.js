/*
 * File: app/view/VisitCalling/VisitCallingTabViewController.js
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

Ext.define('TabUserInformation.view.VisitCalling.VisitCallingTabViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.visitcallingvisitcallingtab',

    onButtonSearchClick: function (button, e, eOpts) {
        this.getView();

    },

    onButtonNewClick: function (button, e, eOpts) {
        // Create new register form window
        var popup = Ext.create("widget.visitcallingvisitcallingwindow");
        popup.down('#LeadId').setValue('V' + Date.now());
        console.log(Date.now());
        // Show window
        popup.show();
    },

    onButtonEditClick: function (button, e, eOpts) {
        var grid = this.getView().down('grid'),
            selected = grid.getSelection()[0];
        var popup = Ext.create("widget.visitcallingvisitcallingwindow", {
            listeners: {
                beforerender: function (panel, eOpts) {
                    var form = panel.down('form').getForm();

                    form.loadRecord(selected);
                }
            }
        }).show();
    },

    onGridpanelItemDblClick: function (dataview, record, item, index, e, eOpts) {
        var popup = Ext.create("widget.visitcallingvisitcallingwindow", {
            listeners: {
                beforerender: function (panel, eOpts) {
                    var form = panel.down('form').getForm();

                    form.loadRecord(record);
                }
            }
        }).show();
    },

    onGridSelectionChange: function (model, selected, eOpts) {

        //        debugger;

        //console.log(selected[0].get('Address'));

        var address = Ext.create('TabUserInformation.model.Address', selected[0].get('Address'));

        this.onMappingAddressTab(selected[0]);
        this.onMappingFinancialPolicy(selected[0]);
        this.onMappingProjectPlan(selected[0]);

        this.getView().down('#addressForm').loadRecord(address);

    },

    onMappingAddressTab: function (record) {

        //debugger;
        var contactperson = record.get('ContactPersonTitleNameTh') + record.get('ContactPersonFirstNameTh') + "  " + record.get('ContactPersonLastNameTh');

        this.getView().down("#addressThTab").setValue('<b>' + record.get('Address') + '</b>');
        this.getView().down("#businessTab").setValue('<b>' + record.get('Business') + '</b>');
        this.getView().down("#contactPersonTab").setValue('<b>' + contactperson + '</b>');
        //        this.getView().down("#telephoneTab").setValue('<b>' + record.get('Telephone') + '</b>');
        this.getView().down("#telephoneTab").setValue("025502549");
        //        this.getView().down("#sourceofInformationTab").setValue('<b>' + record.get('SourceInformation') + '</b>');
        this.getView().down("#sourceofInformationTab").setValue("KTB recommendation");

    },

    onMappingFinancialPolicy: function (record) {

        var financialPolicy = record.get('FinalcialProlicy');

        Ext.getCmp('type-of-lease-equipment1').setValue('<b>' + financialPolicy.TypeOfLeaseEquipment + '</b>');
        Ext.getCmp('leasing-company1').setValue('<b>' + financialPolicy.LeasingCompany + '</b>');
        Ext.getCmp('term-and-condition1').setValue('<b>' + financialPolicy.TermCondition + '</b>');
        Ext.getCmp('type-of-hp-equipment1').setValue('<b>' + financialPolicy.TypeOfHPEquipment + '</b>');
        Ext.getCmp('hp-company1').setValue('<b>' + financialPolicy.HPCompany + '</b>');
        Ext.getCmp('hp-term-and-condition1').setValue('<b>' + financialPolicy.HPTermCondition + '</b>');
        Ext.getCmp('detail1').setValue('<b>' + financialPolicy.Detail + '</b>');
        //set Value chk
        Ext.getCmp('chk-cash').setValue(financialPolicy.Cash);
        Ext.getCmp('chk-loan').setValue(financialPolicy.Loan);
        Ext.getCmp('chk-lease').setValue(financialPolicy.Lease);
        Ext.getCmp('chk-hire-purschase').setValue(financialPolicy.HirePurchase);
        Ext.getCmp('chk-loan-affiliated').setValue(financialPolicy.LoadAffiliated);
        Ext.getCmp('chk-other').setValue(financialPolicy.Other);
    },

    onMappingProjectPlan: function (record) {
        var projectPlan = record.get('ProjectPlan');

        this.getView().down("#ProjectPlanTypeOfEquipment").setValue('<b>' + projectPlan.TypeOfEquipment + '</b>');
        this.getView().down("#ProjectPlanAmount").setValue('<b>' + projectPlan.Amount + '</b>');
        this.getView().down("#ProjectPlanSchedule").setValue('<b>' + projectPlan.Schedule + '</b>');

    },

    onCheckboxfieldChange6: function (field, newValue, oldValue, eOpts) {
        var textBox = this.getComponent('financialpolicy').getComponent('detail');
        this.Shows(textBox, newValue);
    },

    onCheckboxfieldChange11: function (field, newValue, oldValue, eOpts) {
        var textBox = this.getComponent('financialpolicy').getComponent('detail');
        this.Shows(textBox, newValue);
    },

    onCheckboxfieldChange21: function (field, newValue, oldValue, eOpts) {
        var textBox = this.getComponent('financialpolicy').getComponent('type-of-lease-equipment');
        var textBox2 = this.getComponent('financialpolicy').getComponent('leasing-company');
        var textBox3 = this.getComponent('financialpolicy').getComponent('term-and-condition');
        this.ShowsDefault(textBox, newValue);
        this.ShowsDefault(textBox2, newValue);
        this.ShowsDefault(textBox3, newValue);
    },

    onCheckboxfieldChange51: function (field, newValue, oldValue, eOpts) {
        var textBox = this.getComponent('financialpolicy').getComponent('type-of-hp-equipment');
        var textBox2 = this.getComponent('financialpolicy').getComponent('hp-company');
        var textBox3 = this.getComponent('financialpolicy').getComponent('hp-term-and-condition');
        this.ShowsDefault(textBox, newValue);
        this.ShowsDefault(textBox2, newValue);
        this.ShowsDefault(textBox3, newValue);
    },

    onCheckboxfieldChange31: function (field, newValue, oldValue, eOpts) {
        var textBox = this.getComponent('financialpolicy').getComponent('detail');
        this.Shows(textBox, newValue);
    },

    onCheckboxfieldChange41: function (field, newValue, oldValue, eOpts) {
        var textBox = this.getComponent('financialpolicy').getComponent('detail');
        this.Shows(textBox, newValue);
    },

    onDatefieldRender: function (component, eOpts) {
        component.setValue(new Date());
    }

});

