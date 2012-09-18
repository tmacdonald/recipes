define([
	'./model',
	'collections/ingredients',
	'collections/directions'
], function(Model, Ingredients, Directions){
	var Recipe = Model.extend({
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
