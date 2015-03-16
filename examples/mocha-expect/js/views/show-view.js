define(['backbone'], function(Backbone) {
  return Backbone.View.extend({
    template: _.template('<h1><%= item.name %></h1><h2>Age: <%= item.age %></h2><h3>Type: <%= item.type %></h3>'),

    render: function() {
      this.$el.html(this.template({
        item: this.model.toJSON()
      }));
      return this;
    }
  });
});
