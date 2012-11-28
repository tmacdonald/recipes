define([
	'backbone',
	'models/direction'
], function(Backbone, Direction) {
	
	var Directions = Backbone.Collection.extend({
		model: Direction
	});
	
	return Directions;
});
