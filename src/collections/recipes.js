define([
	'./collection',
	'backbone-localstorage',
	'models/recipe'
], function(Collection, Store, Recipe) {
	
	var Recipes = Collection.extend({
		model: Recipe,
		localStorage: new Store('recipes-backbone')	
	});
	
	return Recipes;
});
