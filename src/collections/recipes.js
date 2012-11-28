define([
	'./collection',
	'lib/backbone-localstorage',
	'models/recipe'
], function(Collection, Store, Recipe) {
	"use strict";

	var Recipes = Collection.extend({
		model: Recipe,
		localStorage: new Store('recipes-backbone')
	});

	return Recipes;
});