FinanceRegister.ProductsStatisticsRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('product');
  }
});
 
