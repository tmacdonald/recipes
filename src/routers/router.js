/*global define */

define([
	'jquery',
	'backbone',
	'collections/recipes/recipes',
	'models/recipes/recipe',
	'views/recipes/index',
	'views/recipes/new',
	'views/recipes/view'
], function($, Backbone, Recipes, Recipe, RecipesIndexView, NewRecipeView, RecipeView) {
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
			var recipesIndexView = new RecipesIndexView({collection: this.recipes});
			$('#app').html(recipesIndexView.render().el);
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
