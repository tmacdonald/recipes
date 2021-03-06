define([
	'collections/collection',
	'lib/backbone-localstorage',
	'models/recipes/recipe'
], function(Collection, Store, Recipe) {
	"use strict";

	var Recipes = Collection.extend({
		model: Recipe,
		localStorage: new Store('recipes-backbone')
	});

	return Recipes;
});
