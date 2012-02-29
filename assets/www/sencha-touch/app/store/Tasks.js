Ext.define('todo.store.Tasks', {
	// xtype: 'todo.task-store',
	extend: 'Ext.data.Store',

	config: {
		model: 'todo.model.Task',
		autoLoad: true,
		autoSync: true
	}

});