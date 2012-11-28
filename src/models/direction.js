define(['backbone'], function(Backbone) {
	var Direction = Backbone.Model.extend({
		defaults: {
			text: "",
			order: 0
		}
	});

	return Direction;
});