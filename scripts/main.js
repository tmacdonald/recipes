require.config({
	shim: {
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'bootstrap': {
			deps: ['jquery'],
			exports: 'Bootstrap'
		}
	},
	
	paths: {
		jquery: 'jquery-1.7.2',
		underscore: 'underscore',
		backbone: 'backbone',
		text: 'require/text'
	}
});

require([
	'routers/router', 
	'views/application', 
	'bootstrap'
	], function(Router, ApplicationView) {
	
	var router = new Router;
	Backbone.history.start();
	
	var applicationView = new ApplicationView;
});