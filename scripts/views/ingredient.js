define(['backbone', 'text!templates/ingredient.html'], function(Backbone, ingredientTemplate) {
	var IngredientView = Backbone.View.extend({
		tagName: 'p',

		template: _.template(ingredientTemplate),

		render: function() {
			$(this.el).html(this.template(this.model));
			return this;
		}
	});

	return IngredientView;
});