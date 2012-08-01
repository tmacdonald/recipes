define([
	'backbone',
	'underscore',
	'text!templates/recipes/new.html'
], function(Backbone, _, recipeTemplate) {

	var NewRecipeView = Backbone.View.extend({

		template: _.template(recipeTemplate),

		events: {
			"submit form": "save"
		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},

		save: function(e) {
			e.preventDefault();

			this.collection.create({
				name: this.$('#name').val(),
				description: this.$('#description').val(),
				servings: this.$('#servings').val()
			});

			this.trigger("created");
		}

	});

	return NewRecipeView;	

});