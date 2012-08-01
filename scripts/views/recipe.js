define(
	[
		'backbone', 
		'text!templates/recipe.html',
		'views/ingredient'
	], function(Backbone, recipeTemplate, IngredientView){
	var RecipeView = Backbone.View.extend({
		
		tagName: 'tr',
		
		template: _.template(recipeTemplate),
		
		render: function() {
			var self = this;

			$(this.el).html(this.template(this.model.toJSON()));

			if (this.model.ingredients) {
				this.model.ingredients.each(function(ingredient){
					var ingredientView = new IngredientView({model: ingredient});
					this.$('.ingredients').append(ingredientView.render().el);
				}, this);
			}

			return this;
		}
	});
	
	return RecipeView;
});
