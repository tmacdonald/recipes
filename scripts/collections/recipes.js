define([
	'backbone',
	'backbone-localstorage',
	'models/recipe'
], function(Backbone, Store, Recipe) {
	
	var Recipes = Backbone.Collection.extend({
		model: Recipe,
	
		localStorage: new Store('recipes-backbone')	
	});
	
	return new Recipes;
});
