define([
	'./view',
	'lib/templating',
	'text!templates/recipes/direction.html'
], function(View, TemplateEngine, directionTemplate) {

	var DirectionView = View.extend({
		tagName: 'span',

		template: TemplateEngine.template(directionTemplate),

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});

	return DirectionView;

});