define(['backbone', 'text!templates/recipe.html'], function(Backbone, recipeTemplate){
	var RecipeView = Backbone.View.extend({
		
		tagName: 'tr',
		
		template: _.template(recipeTemplate),
		
		render: function() {
			$(this.el).html(this.template(this.model.toJSON()));
			return this;
		}
	});
	
	return RecipeView;
});
