/*
 * File: app/store/signers.js
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

Ext.define('TabUserInformation.store.signers', {
    extend: 'Ext.data.Store',
    alias: 'store.signers',

    requires: [
        'TabUserInformation.model.Signer',
        'Ext.data.proxy.Memory'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'signers',
            model: 'TabUserInformation.model.Signer',
            data: [
                {
                    id: 345,
                    Title: 'Impedit Minima',
                    'Name Eng': 'et'
                },
                {
                    id: 322,
                    Title: 'Occaecati Totam Ut',
                    'Name Eng': 'fuga'
                },
                {
                    id: 890,
                    Title: 'Est Ea',
                    'Name Eng': 'asperiores'
                },
                {
                    id: 494,
                    Title: 'Doloremque Labore',
                    'Name Eng': 'et'
                },
                {
                    id: 651,
                    Title: 'Qui Aspernatur Voluptatem Quo',
                    'Name Eng': 'voluptatem'
                },
                {
                    id: 319,
                    Title: 'Et Fugiat',
                    'Name Eng': 'ad'
                },
                {
                    id: 22,
                    Title: 'Voluptatem Asperiores Voluptatem Molestiae',
                    'Name Eng': 'voluptatibus'
                },
                {
                    id: 522,
                    Title: 'Magni Ut Tempore Architecto Impedit',
                    'Name Eng': 'qui'
                },
                {
                    id: 271,
                    Title: 'Consequuntur Natus Rerum',
                    'Name Eng': 'libero'
                },
                {
                    id: 63,
                    Title: 'Voluptas Dolores',
                    'Name Eng': 'molestiae'
                },
                {
                    id: 207,
                    Title: 'Enim Est Libero Voluptate',
                    'Name Eng': 'distinctio'
                },
                {
                    id: 870,
                    Title: 'Libero Delectus Beatae Impedit Alias',
                    'Name Eng': 'expedita'
                },
                {
                    id: 755,
                    Title: 'Architecto Nulla Modi Saepe Et',
                    'Name Eng': 'sapiente'
                },
                {
                    id: 683,
                    Title: 'Quaerat Qui Accusamus Aperiam Omnis',
                    'Name Eng': 'delectus'
                },
                {
                    id: 42,
                    Title: 'Aut Et',
                    'Name Eng': 'provident'
                },
                {
                    id: 172,
                    Title: 'Ipsum Sit Enim Eos Quisquam',
                    'Name Eng': 'facere'
                },
                {
                    id: 321,
                    Title: 'Mollitia Beatae Non',
                    'Name Eng': 'molestiae'
                },
                {
                    id: 276,
                    Title: 'Ad Esse',
                    'Name Eng': 'sint'
                },
                {
                    id: 978,
                    Title: 'Est Eveniet',
                    'Name Eng': 'possimus'
                },
                {
                    id: 800,
                    Title: 'Autem Quaerat',
                    'Name Eng': 'id'
                },
                {
                    id: 729,
                    Title: 'Rerum Dolor',
                    'Name Eng': 'est'
                },
                {
                    id: 913,
                    Title: 'Consectetur Molestiae Ullam Est Nam',
                    'Name Eng': 'quibusdam'
                },
                {
                    id: 965,
                    Title: 'Dolores Error',
                    'Name Eng': 'consequuntur'
                },
                {
                    id: 69,
                    Title: 'Quia Quo Quasi',
                    'Name Eng': 'unde'
                },
                {
                    id: 339,
                    Title: 'Vero Dolorem Voluptatibus Consequuntur',
                    'Name Eng': 'sed'
                },
                {
                    id: 718,
                    Title: 'Doloremque Tenetur Non Est',
                    'Name Eng': 'sit'
                },
                {
                    id: 700,
                    Title: 'Eos Eaque Qui',
                    'Name Eng': 'quia'
                },
                {
                    id: 250,
                    Title: 'Labore A Temporibus Tempora Beatae',
                    'Name Eng': 'veritatis'
                },
                {
                    id: 878,
                    Title: 'Officiis A Ullam',
                    'Name Eng': 'autem'
                },
                {
                    id: 223,
                    Title: 'Tempora Adipisci Veritatis Voluptatem',
                    'Name Eng': 'debitis'
                }
            ],
            proxy: {
                type: 'memory'
            }
        }, cfg)]);
    }
});