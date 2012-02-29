Ext.define('todo.view.Main', {
	xtype: 'mainpanel',
	extend: 'Ext.tab.Panel',
	requires: [
		'todo.view.TitleBar',
		'todo.view.TaskPanel',
	],

	config: {
    fullscreen: true,
		tabBarPosition: 'bottom',

		items: [
			{ xtype: 'todo.titlebar' },
			{ xtype: 'todo.taskpanel' }
		]
	}

});


// { xtype: 'container',
//     layout: 'vbox',
//     items: [
// 		{ xtype: 'todo.tasklist', flex: 3 },
// 		{ xtype: 'formpanel', flex: 2,
// 		    items: [
// 		        {
// 		            xtype: 'fieldset',
// 		            items: [
// 		                {
// 		                    xtype: 'textfield',
// 		                    name: 'firstName',
// 												placeHolder: 'Create a new task'
// 		                },
// 		                {
// 		                    xtype: 'button',
// 										    iconCls: 'add',
// 										    iconMask: true
// 		                }
// 		            ]
// 		        }
// 		    ]
// 		}
//     ]
// }