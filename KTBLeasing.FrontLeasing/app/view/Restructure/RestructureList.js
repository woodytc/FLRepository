﻿/*
 * File: app/view/Restructure/RestructureList.js
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

Ext.define('TabUserInformation.view.Restructure.RestructureList', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.restructurerestructurelist',

    requires: [
        'TabUserInformation.view.Restructure.RestructureListViewModel',
        'TabUserInformation.view.Restructure.RestructureListViewController',
        'Ext.form.Panel',
        'Ext.form.field.Hidden',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Display',
        'Ext.form.field.Date',
        'Ext.button.Button',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.column.Date',
        'Ext.grid.column.Action'
    ],

    controller: 'restructurerestructurelist',
    viewModel: {
        type: 'restructurerestructurelist'
    },
    //bodyPadding: 5,
    title: 'Restructure',
    id: 'restructurerestructurelist',
    layout: 'border',

    items: [
        {
            xtype: 'form',
            region: 'north',
            bodyPadding: 10,
            id: 'head-restructure-form',
            //title: 'Restructure',
            defaults: {
                margin: '5 5 5 5 ',
                labelWidth: 150,
                labelAlign: 'right'
            },
            layout: {
                type: 'table',
                columns: 2
            },
            items: [
                {
                    xtype: 'hiddenfield',
                    name: 'flag',
                    value: 'old'
                },
                {
                    xtype: 'hiddenfield',
                    name: 'SEQ'
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Agreement',
                    name: 'Agreement',
                    maxLength: 20,
                    displayField: 'AgrCode',
                    triggerAction: 'last',
                    //minChars: 9,
                    //queryDelay: 1000,
                    queryParam: 'text',
                    queryMode: 'remote',
                    valueField: 'AgrCode',
                    store: 'agreements',
                    listeners: {
                        //afterrender: 'onComboboxAfterRender',
                        select: 'onComboboxSelect'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Customer',
                    name: 'Customer'
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'Restructure Date',
                    name: 'RestructureDate',
                    format: 'd/m/Y',
                    altFormats: 'd/m/Y|j/n/Y|j/n/y|m/j/y|n/d/y|m/j/Y|n/d/Y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-d-m|n-j|j/n',
                    bind: {
                        value: '{today}',
                        maxValue: '{maxDate}',
                        //minValue: '{today}'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Create New Simulation',
                    itemId: 'arcard-button',
                    disabled: true,
                    listeners: {
                        click: 'onButtonARCardClick'
                    }
                }
            ]
        },
        {
            xtype: 'gridpanel',
            region: 'center',
            height: 750,
            forceFit: true,
            title: 'Restructure List',
            bind: {
                store: '{restructureLists}'
            },
//            store: 'restructureLists',
            viewConfig: {
                listeners: {
                    itemdblclick: 'onViewItemDblClick'
                }
            },
            columnLines: true,
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'SEQ',
                    itemId: 'SEQ',
                    //text: 'SEQ',
                    width: 40,
                    locked: true,
                    hidden: true
                },
                {
                    xtype: 'rownumberer',
                    itemId: 'RowNumber',
                    width: 40,
                    locked: true
                },
                {
                    xtype: 'actioncolumn',
                    dataIndex: 'Status',
                    itemId: 'Status',
                    width: 25,
                    locked: true,
                    items: [{
                        iconCls: 'flag_red x-item-disabled',
                        getClass: function(v, metadata, r, rowIndex, colIndex, store) {
                            if(v == 'normal'){
                                return 'flag_red x-item-disabled';
                            }else if(v == 'approve'){
                                return 'accept';
                            }else{
                                return 'flag_red';
                            }
                        },
                        handler: function(view, rowIndex, colIndex, item, e, record, row) {
                            var UserData = Ext.decode(sessionStorage.getItem('UserData'));

                            if(record.get('Status') == 'normal'){
                                record.set('Status', 'pending');
                            }else if(record.get('Status') == 'approve'){
                                view.readOnly = true;
                            }
                            else{
                                if (UserData.RoleName === 'head_marketing') {
                                    view.readOnly = true;
                                }else{
                                    record.set('Status', 'normal');
                                }
                            }
                            view.refresh();
                        },
                        getTip: function(v, metadata, r, rowIndex, colIndex, store) {
                            if(v == 'normal'){
                                return 'ปกติ';
                            }else if(v == 'approve'){
                                return 'อนุมัติ';
                            }else{
                                return 'รออนุมัติ';
                            }
                        },
                    }]
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'Agreement',
                    text: 'Agreement',
                    //flex: 1,
                    width: 110,
                    locked: true
                },
                {
                    xtype: 'datecolumn',
                    dataIndex: 'RestructureDate',
                    text: 'RestructureDate',
                    format: 'd/m/Y'
                },
                {
                    text: 'Information',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'FlatRate',
                            text: 'อัตราดอกเบี้ย'
                        },
                        {
                            xtype: 'numbercolumn',
                            dataIndex: 'OS_PR',
                            text: 'เงินต้นคงเหลือ',
                            flex: -1
                        },
//                        {
//                            xtype: 'gridcolumn',
//                            dataIndex: 'Day',
//                            text: 'จำนวนวัน',
//                            width: 50
//                        },
//                        {
//                            xtype: 'numbercolumn',
//                            dataIndex: 'Penalty',
//                            text: 'ดอกเบี้ย'
//                        },
                        {
                            xtype: 'numbercolumn',
                            dataIndex: 'UnpaidVAT',
                            text: 'ค้างชำระเบี้ยปรับ+ค่าใช้จ่าย'
                        },
                        {
                            xtype: 'numbercolumn',
                            dataIndex: 'DebitNote',
                            text: 'DebitNote ค้างชำระ'
                        }
                    ]
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'New_OS_PR',
                    text: 'เงินต้นคงเหลือ (New)',
                    flex: 1
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'NewFlatRate',
                    text: 'NewFlatRate'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'NewTerm',
                    text: 'งวด',
                    width: 50
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'EffectiveRate',
                    text: 'Effective Rate',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'CreateBy',
                    text: 'Create By'
                }
            ],
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    region: 'south',
                    dock: 'bottom',
                    ui: 'footer',
                    width: 360,
                    displayInfo: true,
                    bind: {
                        store: '{restructureLists}'
                    }
//                    store: 'restructureLists'
                }
            ],

        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            reference: 'restructure-toolbar',
            ui: 'footer',
            items: [
                {
                    xtype: 'button',
                    formBind: true,
                    itemId: 'copyButton',
                    ui: 'default-small',
                    text: 'Copy',
                    listeners: {
                        click: 'onCopyClick'
                    }
                },
            ]
        }
    ],
    listeners: {
        beforerender: 'onBeforeRender',
        afterrender: 'onAfterRender'
    }


});