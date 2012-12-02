define([
    'services/service'
], function(Service) {
    "use strict";

    // Generate four random hex digits.
    function S4() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }

    // Generate a pseudo-GUID by concatenating random hexadecimal.
    function guid() {
       return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }

    var LocalStorageService = Service.extend({

        initialize: function(localStorage, repository) {
            this.localStorage = localStorage;
            var data = this.localStorage.getItem(repository);
            this.data = (data && JSON.parse(data)) || {};
        },

        returns: function(input) {
            return this.deferred().resolve(input).promise();
        },

        save: function() {
            var deferred = this.deferred();
            this.localStorage.setItem(JSON.stringify(this.data));
            return deferred().resolve().promise();
        },

        create: function(model) {
            model.id = guid();
            this.data[model.id] = model;
            return this.save().pipe(this.returns.bind(this, model));
        },

        list: function() {
            var list = [];
            for (var property in this.data) {
                if (this.data.hasOwnProperty(property)) {
                    list.push(this.data[property]);
                }
            }
            return this.deferred().resolve(list).promise();
        },

        read: function(id) {
            var deferred = this.deferred();
            var model = this.data[id];
            if (model) {
                deferred.resolve(model);
            } else {
                deferred.reject();
            }
            return deferred.promise();
        },

        update: function(model) {
            this.data[model.id] = model;
            return this.save().pipe(this.returns.bind(this, model));
        },

        destroy: function(model) {
            delete this.data[model.id];
            return this.save().pipe(this.returns.bind(this, model));
        }
    });
});