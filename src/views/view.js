define([
	'backbone',
	'../lib/templating',
], function(Backbone, TemplateEngine) {
	var View = Backbone.View.extend({
		getTemplate: function(template) {
			return TemplateEngine.template(template);
		}
	});

	return View;
});