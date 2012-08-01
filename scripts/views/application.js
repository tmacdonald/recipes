define(['backbone', 'collections/recipes', 'views/recipe'], function(Backbone, Recipes, RecipeView){
	var ApplicationView = Backbone.View.extend({
		
		el: $('#app'),
		
		events: {
		},
		
		initialize: function() {
			
			Recipes.on('add', this.addOne, this);
			Recipes.on('reset', this.addAll, this);
			Recipes.on('all', this.render, this);
			
			Recipes.fetch();
		},
		
		addOne: function(recipe) {
			var view = new RecipeView({model: recipe});
			this.$('#recipes').append(view.render().el);
		},
		
		addAll: function() {
			this.$('#recipes').html('');
			
			Recipes.each(this.addOne, this);
		},
		
		render: function() {
			
		}
	});
	
	return ApplicationView;
});
