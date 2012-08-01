define([
	'backbone',
	'collections/recipes',
	'views/recipe-list'
], function(Backbone, Recipes, RecipeListView) {
	var Router = Backbone.Router.extend({
		routes: {
			"": "defaultRoute",
			"*filter": "setFilter"
		},
		
		defaultRoute: function() {
			var recipeListView = new RecipeListView({collection: Recipes});
			$('#app').html(recipeListView.render().el);
			Recipes.fetch();
		},

		setFilter: function() {
			
		}
	});
	
	return Router;
});
