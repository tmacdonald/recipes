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
		jquery: 'jquery-1.8.0',
		underscore: 'underscore',
		backbone: 'backbone',
		text: 'require/text'
	}
});

require([
	'routers/router', 
	'bootstrap'
], function(Router) {
	var router = new Router;
	Backbone.history.start();
});

