define(['backbone', 'collections/recipes', 'views/recipe'], function(Backbone, Recipes, RecipeView){
	var ApplicationView = Backbone.View.extend({
		
		el: $('#app'),
		
		events: {
			"keypress #new-recipe": "createOnEnter"
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
			
		},
		
		createOnEnter: function(e) {
			if (e.keyCode !== 13) { // enter key
				return;
			}
			
			var $target = $(e.target);
			
			if (!$target.val().trim()) { // empty input
				return;
			}
			
			Recipes.create({name: $target.val()});
			$target.val('');
		}
	});
	
	return ApplicationView;
});
