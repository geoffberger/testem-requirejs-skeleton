define(['backbone', 'views/index-view', 'views/show-view'], function(Backbone, IndexView, ShowView) {
  function AnimalController(el) {
    this.el = el;
    this.currentView = null;
    this.collection = this.getCollection();
  }

  AnimalController.prototype.getCollection = function() {
    return new Backbone.Collection([
      {
        id: 1,
        name: 'Leland',
        age: 9,
        type: 'dawg'
      },
      {
        id: 2,
        name: 'Fiona',
        age: 7,
        type: 'kitty'
      },
      {
        id: 3,
        name: 'Fat Bat',
        age: 7,
        type: 'kitty'
      }
    ]);
  };

  AnimalController.prototype.index = function() {
    return this.replaceView(
      new IndexView({
        collection: this.collection
      })
    );
  };

  AnimalController.prototype.show = function(id) {
    return this.replaceView(
      new ShowView({
        name: name,
        model: this.collection.get(id)
      })
    );
  };

  AnimalController.prototype.replaceView = function(view) {
    if (this.currentView) {
      this.currentView.remove();
    }

    this.el.appendChild(view.render().el);
    this.currentView = view;
    return view;
  };

  return AnimalController;
});
