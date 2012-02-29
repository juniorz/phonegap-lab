Ext.define('todo.view.TaskList', {
	xtype: 'todo.tasklist',

	extend: 'Ext.dataview.List',
	// extend: 'Ext.dataview.DataView',

	config: {
		itemTpl: '<p><strong>#{id}</strong>: {label} ({checked})</p>',
		// store: Ext.getStore('Tasks'),				// Dont work
		// store: {xtype: 'todo.task-store'}, 	// Works

		listeners: {
			itemtap: function(list, index, target, record, e, eOpt) {
				console.log(record.get('label'));
			},

			itemswipe: function(list, index, target, record, e, eOpt) {
				record.set('checked', !record.get('checked'));
			}
		}
	},


  initialize: function() {
  	this.callParent(arguments);
 		this.setStore(Ext.getStore('Tasks')); 	// Works
  }

});
