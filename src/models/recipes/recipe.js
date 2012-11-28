define([
	'./model',
	'lib/backbone-localstorage',
], function(Model, Store){
	var Recipe = Model.extend({
		localStorage: new Store('recipes-backbone')
	});

	return Recipe;
});
