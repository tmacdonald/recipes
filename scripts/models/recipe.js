define([
	'backbone',
	'collections/ingredients',
	'collections/directions'
], function(Backbone, Ingredients, Directions){
	var Recipe = Backbone.Model.extend({
		parse: function(resp, xhr) {
			this.ingredients = new Ingredients;
			this.ingredients.reset(resp.ingredients);
			delete resp.ingredients;

			this.directions = new Directions;
			this.directions.reset(resp.directions);
			delete resp.directions;

	    	return resp;
	    }
	});
	
	return Recipe;
});
