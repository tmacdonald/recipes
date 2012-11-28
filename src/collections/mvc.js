function Events() {
  this.subscriptions = {};
}

Events.prototype.on = function(topic, callback, context) {
  if (!this.subscriptions[topic]) {
    this.subscriptions[topic] = [];
  }
  this.subscriptions[topic].push({
    callback: callback,
    context: context
  });
};

Events.prototype.trigger = function(topic) {
  if (this.subscriptions[topic]) {
    for (var i = 0; i < this.subscriptions[topic].length; i += 1) {
      var subscription = this.subscriptions[topic][i];
      subscription.callback.apply(subscription.context);
    }
  }
};

function Model() {
  Events.call(this);
}


var Events = {
  subscriptions: {},
  on: function(topic, callback, context) {
    if (!this.subscriptions[topic]) {
      this.subscriptions[topic] = [];
    }
    this.subscriptions[topic].push({
      callback: callback,
      context: context
    });
  },
  trigger: function(topic) {
    if (this.subscriptions[topic]) {
      for (var i = 0; i < this.subscriptions[topic].length; i += 1) {
        this.subscriptions[topic][i].callback.apply(this.subscriptions[topic][i].context);
      }
    }
  }
};