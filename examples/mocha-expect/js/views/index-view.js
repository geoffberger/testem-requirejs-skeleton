define(['backbone'], function(Backbone) {
  return Backbone.View.extend({
    template: _.template('<% items.forEach(function(item) { %><li><a href="#animal/<%= item.id %>"><%= item.name %></a></li><%}) %>'),

    render: function() {
      this.$el.html(this.template({
        items: this.collection.toJSON()
      }));

      return this;
    }
  });
});