FinanceRegister.ProductEditRoute = Ember.Route.extend({
  model: function(params) {
    var product = this.get('store').find('product', this.modelFor('product').id);
    console.log("name: " + this.modelFor('product').id);
    return product;
  },
  setupController: function(controller, model){
    controller.set('model', model);
    buffer = model.get('attributes').map(function(attr){
      return { key: attr.get('key'), value: attr.get('value') };
    });
    controller.set('buffer', buffer);
  }
});

