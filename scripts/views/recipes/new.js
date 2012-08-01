define([
	'backbone',
	'underscore',
	'text!templates/recipes/new.html'
], function(Backbone, _, recipeTemplate) {

	var NewRecipeView = Backbone.View.extend({

		template: _.template(recipeTemplate),

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}

	});

	return NewRecipeView;	

});