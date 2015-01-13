/*
 * File: app/view/Window/AddressWindowViewController.js
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

Ext.define('TabUserInformation.view.Window.SetupWindowViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.windowsetupwindow',

    onButtonSaveClick: function (button, e, eOpts) {

        var status = false;

        var form = this.getView().getForm();

        if (form.isValid()) {
            Ext.MessageBox.confirm('Confirm', '�س��ͧ��÷��ѹ�֡��������¹�ŧ������?',
            function (cbtn, bool) {
                if (cbtn == 'yes') {
                    form.submit({
                        url: 'api/UserInfo/DoPost',
                        success: function (form, action) {
                            console.log(action);
                            Ext.Msg.alert('Success', "�ѹ�֡���������º����!");

                            Ext.getCmp('pagingtoolbar-userinf').moveFirst();

                            button.up('window').close();

                        },
                        failure: function (form, action) {
                            Ext.Msg.alert('Failed', '��سҵ�Ǩ�ͺ��� ���ͼ������������к�? FristName_LastName(2)');
                        }
                    });
                }

            }
        );

        } else {
            Ext.Msg.alert('Data is not valid!', '��س����͡���������ú��ǹ');
        }

        

    },

    onButtonCancelClick: function (button, e, eOpts) {
        this.getview().close();
    },

    onSaveSuccess: function (response, opts) {
        //Alert the user about communication error
        if (opts.params.action === 'edit') {
            Ext.MessageBox.alert('Status', 'Country Updated!');
        }
        if (opts.params.action === 'add') {
            Ext.MessageBox.alert('Status', 'Country Added!');
        }
        if (opts.params.action === 'delete') {
            Ext.MessageBox.alert('Status', 'Country Deleted!');
        }
        //get refernce to the node that needs to be reloaded to match data with the server
        refreshNode = this.getCountriesStore().getNodeById(opts.params.parentNodeId);
        //unnecessary but required here due to an ExtJS bug
        refreshNode.removeAll(false);
        //refresh(reload) the node 
        this.getCountriesStore().load({
            node: refreshNode
        });
    }



});
