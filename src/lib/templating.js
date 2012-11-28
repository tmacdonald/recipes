define([
	'underscore'
], function(_) {
	var TemplatingEngine = {

		template: function(input) {
			return _.template(input);
		}
	};

	return TemplatingEngine;
});