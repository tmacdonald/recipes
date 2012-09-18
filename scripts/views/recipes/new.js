define([
	'../view',
	'../../lib/templating',
	'text!templates/recipes/new.html'
], function(View, TemplateEngine, recipeTemplate) {

	var NewRecipeView = View.extend({

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