define([
	'backbone',
	'collections/recipes',
	'models/recipe',
	'views/recipe-list',
	'views/recipes/new'
], function(Backbone, Recipes, Recipe, RecipeListView, NewRecipeView) {
	var Router = Backbone.Router.extend({
		routes: {
			"": "defaultRoute",
			"recipes/new": "newRecipe"
		},
		
		defaultRoute: function() {
			var recipeListView = new RecipeListView({collection: Recipes});
			$('#app').html(recipeListView.render().el);
			Recipes.fetch();
		},

		newRecipe: function() {
			var newRecipeView = new NewRecipeView({model: new Recipe(), collection: Recipes});
			newRecipeView.on('created', function(){
				this.navigate("", {trigger: true});
			}, this);
			$('#app').html(newRecipeView.render().el);
		}
	});
	
	return Router;
});
