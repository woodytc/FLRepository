/*
 * File: app/view/Window/LoginWindow.js
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

Ext.define('TabUserInformation.view.Window.LoginWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowloginwindow',

    requires: [
        'TabUserInformation.view.Window.LoginWindowViewModel',
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.button.Button',
        "Ext.require([' * '])"
    ],

    viewModel: {
        type: 'windowloginwindow'
    },
    id: 'loginwindow',
    width: 400,
    bodyPadding: 30,
    closable: false,
    title: 'Commercial System Log-in',
    modal: true,
    enableKeyEvents: true,
    defaultListenerScope: true,

    items: [
        {
            xtype: 'form',
            id: 'loginform',
            id: 'loginform',
            layout: {
                type: 'vbox',
                align: 'center',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'textfield',
                    flex: 1,
                    id: 'username',
                    name: 'UserName',
                    fieldLabel: 'Username',
                    allowBlank: false,
                    msgTarget: 'under',
                    regex: /^[a-zA-Z]\S*.[_].[{2,}a-zA-Z]$/,
                    invalidText: 'FisrtName_Lastname 2 digit'
                },
                {
                    xtype: 'textfield',
                    id: 'password',
                    name: 'Password',
                    fieldLabel: 'Password',
                    inputType: 'password',
                    allowBlank: false,
                    msgTarget: 'under'
                },
                {
                    xtype: 'button',
                    id: 'login',
                    text: 'Log-in',
                    listeners: {
                        click: 'onLoginClick'
                    }
                }
            ]
        }
    ],

    onLoginClick: function (button, e, eOpts) {
        var Me = this;
        var form = this.down('form').getForm();
        if (form.isValid()) {
            form.submit({
                url: 'api/login/dologin',
                type: 'POST',
                timeout: 99999,
                success: function (form, action) {
                    if (action.response.statusText === "OK" && action.response.statusText !== "") {
                        Me.close();
                    }
                },
                failure: function (form, action) {
                    Ext.Msg.alert('Status', action.response.responseText);
                }

            });
        }
    }

}); 