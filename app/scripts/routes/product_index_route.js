FinanceRegister.ProductIndexRoute = Ember.Route.extend({
  model: function(params) {
  	var product = this.get('store').find('product', this.modelFor('product').id);
    return product;
  }
});