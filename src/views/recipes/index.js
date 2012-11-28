/*global define */

define([
	'../view',
	'../../lib/templating',
	'./item',
	'text!templates/recipes/index.html'
], function(View, TemplateEngine, RecipeView, recipeListTemplate) {

	var RecipesIndexView = View.extend({

		template: TemplateEngine.template(recipeListTemplate),

		initialize: function() {
			this.collection.on('add', this.addOne, this);
			this.collection.on('reset', this.addAll, this);
		},

		addOne: function(recipe) {
			var view = new RecipeView({model: recipe});

			this.$('#recipes').append(view.render().el);
		},

		addAll: function() {
			this.$('#recipes').html('');

			this.collection.each(this.addOne, this);
		},

		render: function() {
			this.$el.html(this.template());
			this.addAll();

			return this;
		}

	});

	return RecipesIndexView;

});