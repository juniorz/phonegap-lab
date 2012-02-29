Ext.define('todo.view.TaskPanel', {
	xtype: 'todo.taskpanel',
	extend: 'Ext.Container',
	requires: [
		'todo.view.TaskList',
		'todo.view.Form',
	],

	config: {
    title: 'Home',
    iconCls: 'home',

		layout: 'fit',
    items: [
			{ xtype: 'todo.tasklist' },
			{ xtype: 'todo.form', docked: 'bottom' }
		]
	}

});