FinanceRegister.ProductRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('product', params.product_id);
  }
});

