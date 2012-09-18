define([
	'./view', 
	'text!templates/ingredient.html'
], function(View, ingredientTemplate) {
	var IngredientView = View.extend({
		tagName: 'span',

		template: _.template(ingredientTemplate),

		render: function() {
			$(this.el).html(this.template(this.model.toJSON()));
			return this;
		}
	});

	return IngredientView;
});