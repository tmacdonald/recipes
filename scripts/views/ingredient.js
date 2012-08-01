define(['backbone', 'text!templates/ingredient.html'], function(Backbone, ingredientTemplate) {
	var IngredientView = Backbone.View.extend({
		tagName: 'span',

		template: _.template(ingredientTemplate),

		render: function() {
			$(this.el).html(this.template(this.model.toJSON()));
			return this;
		}
	});

	return IngredientView;
});