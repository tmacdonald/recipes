define([
	'models/model',
	'lib/backbone-localstorage'
], function(Model, Store){
	var Recipe = Model.extend({
        defaults: {
            name: '',
            servings: '',
            description: '',
            ingredients: '',
            directions: ''
        },

		localStorage: new Store('recipes-backbone')
	});

	return Recipe;
});
