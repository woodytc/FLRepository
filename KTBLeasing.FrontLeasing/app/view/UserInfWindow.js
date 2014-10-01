/*
 * File: app/view/UserInfWindow.js
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

Ext.define('TabUserInformation.view.UserInfWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.userinfwindow',

    requires: [
        'TabUserInformation.view.UserInfWindowViewModel',
        'TabUserInformation.view.UserInfWindowViewController',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.form.field.TextArea',
        'Ext.form.FieldSet',
        'Ext.form.field.Date',
        'Ext.form.field.Checkbox',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button'
    ],

    controller: 'userinfwindow',
    viewModel: {
        type: 'userinfwindow'
    },
    height: 689,
    modelValidation: false,
    shrinkWrap: 3,
    anchorSize: 100,
    bodyPadding: 20,
    title: 'User Information',
    modal: true,

    items: [
        {
            xtype: 'form',
            items: [
                {
                    xtype: 'combobox',
                    width: 200,
                    fieldLabel: 'Marketing Group',
                    labelWidth: 110
                },
                {
                    xtype: 'textfield',
                    width: 200,
                    fieldLabel: 'Marketing Code',
                    labelWidth: 110
                },
                {
                    xtype: 'textfield',
                    width: 200,
                    fieldLabel: 'User Code',
                    labelWidth: 110
                },
                {
                    xtype: 'container',
                    height: 30,
                    layout: 'column',
                    items: [
                        {
                            xtype: 'combobox',
                            width: 200,
                            fieldLabel: 'Name Eng',
                            labelWidth: 110
                        },
                        {
                            xtype: 'textfield',
                            width: 180
                        },
                        {
                            xtype: 'textfield',
                            width: 180
                        }
                    ]
                },
                {
                    xtype: 'container',
                    height: 30,
                    layout: 'column',
                    items: [
                        {
                            xtype: 'combobox',
                            width: 200,
                            fieldLabel: 'Name Thai',
                            labelWidth: 110
                        },
                        {
                            xtype: 'textfield',
                            width: 180
                        },
                        {
                            xtype: 'textfield',
                            width: 180
                        }
                    ]
                },
                {
                    xtype: 'combobox',
                    width: 450,
                    fieldLabel: 'Position',
                    labelWidth: 110
                },
                {
                    xtype: 'combobox',
                    width: 450,
                    fieldLabel: 'Department',
                    labelWidth: 110
                },
                {
                    xtype: 'textareafield',
                    width: 450,
                    fieldLabel: 'Address',
                    labelWidth: 110
                },
                {
                    xtype: 'fieldset',
                    title: 'ID Card',
                    items: [
                        {
                            xtype: 'container',
                            height: 30,
                            layout: 'column',
                            items: [
                                {
                                    xtype: 'textfield',
                                    width: 300,
                                    fieldLabel: 'ID Number'
                                },
                                {
                                    xtype: 'combobox',
                                    width: 200,
                                    fieldLabel: 'Type',
                                    labelAlign: 'right',
                                    labelWidth: 50
                                }
                            ]
                        },
                        {
                            xtype: 'datefield',
                            fieldLabel: 'Expire Date'
                        },
                        {
                            xtype: 'datefield',
                            fieldLabel: 'Receive Date'
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    width: 400,
                    fieldLabel: 'Telephone',
                    labelWidth: 110
                },
                {
                    xtype: 'textfield',
                    width: 400,
                    fieldLabel: 'Fax',
                    labelWidth: 110
                },
                {
                    xtype: 'textfield',
                    width: 400,
                    fieldLabel: 'Email',
                    labelWidth: 110
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'Hire Date',
                    labelWidth: 110
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'Birth Date',
                    labelWidth: 110
                },
                {
                    xtype: 'container',
                    layout: 'column',
                    items: [
                        {
                            xtype: 'combobox',
                            width: 200,
                            fieldLabel: 'Status',
                            labelWidth: 110
                        },
                        {
                            xtype: 'checkboxfield',
                            margin: '0 0 0 5',
                            fieldLabel: '',
                            boxLabel: 'Clear Password (Set Password to default)'
                        }
                    ]
                }
            ]
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            items: [
                {
                    xtype: 'button',
                    text: 'Save',
                    listeners: {
                        click: 'onButtonSaveClick'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Reset',
                    listeners: {
                        click: 'onButtonResetClick'
                    }
                }
            ]
        }
    ]

});