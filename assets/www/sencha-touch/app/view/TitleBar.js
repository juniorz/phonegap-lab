Ext.define('todo.view.TitleBar', {
	xtype: 'todo.titlebar',
	extend: 'Ext.TitleBar',

	config: {
		docked: 'top',
		title: 'TODO',
		items: [
			{ iconCls: 'add',  align: 'left', iconMask: true },
			{ iconCls: 'home', align: 'right', iconMask: true }
		]
	}

});