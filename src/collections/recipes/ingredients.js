define([
	'backbone',
	'models/ingredient'
], function(Backbone, Ingredient) {

	var Ingredients = Backbone.Collection.extend({
		model: Ingredient
	});

	return Ingredients;
});