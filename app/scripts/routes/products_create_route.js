FinanceRegister.ProductsCreateRoute = Ember.Route.extend({
  model: function(){
    // the model for this route is a new empty Ember.Object
    //return Em.Object.create({});
    return this.store.createRecord('product');
  },
  setupController: function(controller, model) {
    controller.set("showValidationErrors",false);
    controller.set('model', model);
  }
});