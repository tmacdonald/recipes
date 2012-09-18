define([
	'backbone'
], function(Backbone) {

	var Collection = Backbone.Collection.extend({

		fetch: function() {
			this.trigger('fetch', this);
			Backbone.Collection.prototype.fetch.call(this);
		}

	});

	return Collection;
});