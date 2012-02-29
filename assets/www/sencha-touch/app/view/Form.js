Ext.define('todo.view.Form', {
	xtype: 'todo.form',
	extend: 'Ext.Panel',
	requires: [
		'Ext.form.FieldSet',
		'Ext.field.Text',
		'Ext.Button',
	],

	config: {
	  items:
		[{
			xtype: 'fieldset',
			items: [{
				xtype: 'textfield',
				name: 'taskLabel',
				placeHolder: 'Create a new task',
				listeners: {
					action: function(field, ev, eOpts ){
						var labelValue = this.getValue().trim();
						if(labelValue.length > 0){
							Ext.getStore('Tasks').add({label: labelValue});
							this.reset();
						}
					}
				}
			}]
		}],
	}

});