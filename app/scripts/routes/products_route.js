FinanceRegister.ProductsRoute = Ember.Route.extend({
  model: function() {
  	console.log("route run")
    return this.get('store').find('product');
  }
});
 
