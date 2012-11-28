/*global require*/

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
		jquery: 'lib/jquery-1.8.0',
		underscore: 'lib/underscore',
		backbone: 'lib/backbone',
		bootstrap: 'lib/bootstrap',
		text: 'lib/require/text'
	}
});

require([
	'routers/router',
	'backbone',
	'bootstrap'
], function(Router, Backbone) {
	var router = new Router();
	Backbone.history.start();
});

