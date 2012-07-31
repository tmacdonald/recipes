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

			if (this.model.get('ingredients')) {
				$.each(this.model.get('ingredients'), function(i, ingredient) {
					var ingredientView = new IngredientView({model: ingredient});
					self.$('.ingredients').append(ingredientView.render().el);
				});	
			}

			return this;
		}
	});
	
	return RecipeView;
});
