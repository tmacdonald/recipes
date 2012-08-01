define(['backbone'], function(Backbone){
	var Recipe = Backbone.Model.extend({
		parse: function(resp, xhr) {
			console.log(resp);
	    	return resp;
	    }
	});
	
	return Recipe;
});
