Ext.define('todo.model.Task', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
			{ name: 'label', type: 'string' },
			{ name: 'checked', type: 'boolean', defaultValue: false }
		],

		proxy: {
			type: 'localstorage',
			id: 'phonegap-todos'
		}
	}

});