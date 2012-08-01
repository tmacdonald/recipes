define([
	'backbone',
	'underscore',
	'text!templates/direction.html'
], function(Backbone, _, directionTemplate) {

	var DirectionView = Backbone.View.extend({
		tagName: 'span',

		template: _.template(directionTemplate),

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});

	return DirectionView;

});