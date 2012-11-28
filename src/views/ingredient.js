define([
	'./view',
	'lib/templating',
	'text!templates/recipes/ingredient.html'
], function(View, TemplateEngine, ingredientTemplate) {
	var IngredientView = View.extend({
		tagName: 'span',

		template: TemplateEngine.template(ingredientTemplate),

		render: function() {
			$(this.el).html(this.template(this.model.toJSON()));
			return this;
		}
	});

	return IngredientView;
});