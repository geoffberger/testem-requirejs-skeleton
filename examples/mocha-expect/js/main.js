define(['backbone', 'routers/main-router'], function(Backbone, MainRoute) {
  var mainRoute = new MainRoute();
  Backbone.history.start();
});