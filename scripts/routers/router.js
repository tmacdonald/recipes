define([
	'backbone',
	'collections/recipes',
	'models/recipe',
	'views/recipe-list',
	'views/recipes/new',
	'views/recipes/view'
], function(Backbone, Recipes, Recipe, RecipeListView, NewRecipeView, RecipeView) {
	var Router = Backbone.Router.extend({
		routes: {
			"": "defaultRoute",
			"recipes/:id": "viewRecipe",
			"recipes/new": "newRecipe"
		},
		
		defaultRoute: function() {
			var recipeListView = new RecipeListView({collection: Recipes});
			$('#app').html(recipeListView.render().el);
			Recipes.fetch();
		},

		viewRecipe: function(id) {
			var recipe, view;

			recipe = Recipes.getByCid(id);
			recipeView = new RecipeView({model: recipe});
			$('#app').html(recipeView.render().el);
		},

		newRecipe: function() {
			var newRecipeView = new NewRecipeView({model: new Recipe(), collection: Recipes});
			newRecipeView.on('created', this.navigateToDefaultRoute, this);
			$('#app').html(newRecipeView.render().el);
		},

		navigateToDefaultRoute: function() {
			this.navigate("", {trigger: true});
		}
	});
	
	return Router;
});
