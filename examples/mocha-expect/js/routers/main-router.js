define(['backbone', 'controllers/animal-controller'], function(Backbone, AnimalController) {
  return Backbone.Router.extend({
    initialize: function(options) {
      options = options || {};
      this.container = options.container || document.getElementById('content');
      this.controller = this.createController(options.Controller);
    },

    createController: function(Controller) {
      Controller = Controller || AnimalController;
      return new Controller(this.container);
    },

    routes: {
      '': 'index',
      'animals': 'showAnimals',
      'animal/:id': 'showAnimal'
    },

    index: function() {
      this.navigate('animals', {trigger: true});
    },

    showAnimals: function() {
      return this.controller.index();
    },

    showAnimal: function(id) {
      return this.controller.show(id);
    }
  });
});