// PhoneGap
// document.addEventListener("deviceready", loadApp, false);

// Browser
window.addEventListener("load", loadApp, false);

function loadApp(){
	Ext.Loader.setConfig({enabled:true});

	Ext.application({
		name: 'todo',
		appFolder: 'sencha-touch/app',

		stores: ['Tasks'],
		views: ['Main'],
		models: ['Task'],

		launch: function(){
			Ext.create('todo.view.Main');
		}

	});
};
