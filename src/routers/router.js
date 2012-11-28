/*global define */

define([
	'jquery',
	'backbone',
	'collections/recipes',
	'models/recipe',
	'views/recipe-list',
	'views/recipes/new',
	'views/recipes/view'
], function($, Backbone, Recipes, Recipe, RecipeListView, NewRecipeView, RecipeView) {
	var Router = Backbone.Router.extend({
		routes: {
			"": "defaultRoute",
			"recipes/:id": "viewRecipe",
			"recipes/new": "newRecipe"
		},

		initialize: function() {
			this.recipes = new Recipes();
			this.recipes.fetch();
		},
		
		defaultRoute: function() {
			var recipeListView = new RecipeListView({collection: this.recipes});
			$('#app').html(recipeListView.render().el);
		},

		viewRecipe: function(id) {
			var recipe, view;

			recipe = new Recipe({id: id});
			recipe.fetch();

			recipeView = new RecipeView({model: recipe});
			$('#app').html(recipeView.render().el);
		},

		newRecipe: function() {
			var newRecipeView = new NewRecipeView({model: new Recipe(), collection: this.recipes});
			newRecipeView.on('created', this.navigateToDefaultRoute, this);
			$('#app').html(newRecipeView.render().el);
		},

		navigateToDefaultRoute: function() {
			this.navigate("", {trigger: true});
		}
	});
	
	return Router;
});
