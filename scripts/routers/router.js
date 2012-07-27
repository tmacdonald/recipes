define(['backbone'], function(Backbone) {
	var Router = Backbone.Router.extend({
		routes: {
			"*filter": "setFilter"
		},
		
		setFilter: function() {
			
		}
	});
	
	return Router;
});
