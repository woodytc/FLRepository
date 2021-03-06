/*
* File: app/view/Job/Application/Tab/WaiveDocument.js
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

Ext.define('TabUserInformation.view.Job.Application.Tab.WaiveDocument', {
    extend: 'Ext.form.Panel',
    alias: 'widget.jobapplicationtabwaivedocument',

    requires: [
        'TabUserInformation.view.Job.Application.Tab.WaiveDocumentViewModel',
        'Ext.container.Container',
        'Ext.form.field.TextArea'
    ],

    viewModel: {
        type: 'jobapplicationtabwaivedocument'
    },
    id: 'jobappwaivedocument',
    bodyPadding: 10,
    title: 'Waive Document',
    items: [
        {
            xtype: 'container',
            height: 120,
            items: [
                {
                    xtype: 'hiddenfield',
                    name: 'Id'
                },
                {
                    xtype: 'textfield',
                    width: 500,
                    fieldLabel: 'Document',
                    labelAlign: 'right',
                    name: 'Document'
                },
                {
                    xtype: 'textareafield',
                    width: 500,
                    fieldLabel: 'Reason',
                    labelAlign: 'right',
                    name: 'Reason'
                }
            ]
        }
    ]

});