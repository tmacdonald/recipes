define([
    'jquery',
    'underscore',
    'backbone'
], function(jQuery, _, Backbone) {
    "use strict";

    var Service = function() {
        this.initialize.apply(this, arguments);
    };

    _.extend(Service.prototype, Backbone.Events, {

        deferred: function() {
            return jQuery.deferred();
        }
    });

    Service.extend = Backbone.Model.extend;
});