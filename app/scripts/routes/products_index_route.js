FinanceRegister.ProductsIndexRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('product', this.modelFor('products').id);
  }
});