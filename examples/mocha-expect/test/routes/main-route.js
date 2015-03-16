define(['routers/main-router'], function(MainRouter) {
  describe('MainRoute', function() {
    beforeEach(function() {
      this.mainRouter = new MainRouter();
      sinon.stub(this.mainRouter, 'navigate');
    });

    afterEach(function() {
      this.mainRouter.navigate.restore();
    });

    it('should do something', function() {
    });
  });
});