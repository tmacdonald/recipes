define(
	[
		'./view', 
		'text!templates/recipe-list-item.html',
		'./ingredient',
		'./direction'
	], function(View, recipeTemplate, IngredientView, DirectionView){
	var RecipeListItemView = View.extend({
		
		tagName: 'tr',
		
		template: _.template(recipeTemplate),
		
		render: function() {
			$(this.el).html(this.template({model: this.model.toJSON(), id: this.model.id}));

			return this;
		}
	});
	
	return RecipeListItemView;
});
