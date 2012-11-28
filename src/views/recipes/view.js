define([
	'../view',
	'text!templates/recipes/view.html'
], function(View, Template) {

	var RecipeView = View.extend({

		initialize: function() {
			this.template = this.getTemplate(Template);
		},

		render: function() {
			this.$el.html(this.template({model: this.model.toJSON(), cid: this.cid}));
			return this;
		}
	});

	return RecipeView;	

});