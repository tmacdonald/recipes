define([
	'../view',
	'../../lib/templating',
	'text!templates/recipes/new.html'
], function(View, TemplateEngine, recipeTemplate) {

	var EditRecipeView = View.extend({

		template: TemplateEngine.template(recipeTemplate),

		events: {
			"submit form": "save"
		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},

		save: function(e) {
			e.preventDefault();

			this.model.set({
				name: this.$('#name').val(),
				description: this.$('#description').val(),
				servings: this.$('#servings').val(),
				ingredients: this.$('#ingredients').val(),
				directions: this.$('#directions').val()
			});

			this.model.save();
		}

	});

	return EditRecipeView;

});