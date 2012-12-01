/*global define */

define([
	'jquery',
	'backbone',
	'collections/recipes/recipes',
	'models/recipes/recipe',
	'views/recipes/index',
	'views/recipes/new',
	'views/recipes/edit',
	'views/recipes/view'
], function($, Backbone, Recipes, Recipe, IndexView, NewView, EditView, DetailsView) {
	var Router = Backbone.Router.extend({
		routes: {
			"": "defaultRoute",
			"recipes/new": "newRecipe",
			"recipes/:id": "viewRecipe",
			"recipes/:id/edit": "editRecipe"
		},

		initialize: function() {
			this.recipes = new Recipes();
			this.recipes.fetch();
		},

		defaultRoute: function() {
			var recipesIndexView = new IndexView({collection: this.recipes});
			$('#app').html(recipesIndexView.render().el);
		},

		viewRecipe: function(id) {
			var recipe, view;

			recipe = new Recipe({id: id});
			recipe.fetch();

			recipeView = new DetailsView({model: recipe});
			$('#app').html(recipeView.render().el);
		},

		newRecipe: function() {
			var newRecipeView = new NewView({model: new Recipe(), collection: this.recipes});
			newRecipeView.on('created', this.navigateToDefaultRoute, this);
			$('#app').html(newRecipeView.render().el);
		},

		editRecipe: function(id) {
			var recipe, view;

			recipe = new Recipe({id: id});
			recipe.fetch();

			recipeView = new EditView({model: recipe});
			$('#app').html(recipeView.render().el);
		},

		navigateToDefaultRoute: function() {
			this.navigate("", {trigger: true});
		}
	});

	return Router;
});
