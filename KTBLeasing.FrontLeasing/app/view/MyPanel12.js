/*
 * File: app/view/MyPanel12.js
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

Ext.define('TabUserInformation.view.MyPanel12', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mypanel12',

    requires: [
        'TabUserInformation.view.MyPanel12ViewModel',
        'TabUserInformation.view.MyPanel12ViewController',
        'Ext.button.Button',
        'Vdn.widget.Calc'
    ],

    controller: 'mypanel12',
    viewModel: {
        type: 'mypanel12'
    },
    height: 250,
    width: 400,
    title: 'My Panel',

    items: [
        {
            xtype: 'button',
            text: 'MyButton',
            listeners: {
                click: 'onButtonClick'
            }
        }
    ]

});