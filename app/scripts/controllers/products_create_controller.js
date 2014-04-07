FinanceRegister.ProductsCreateController = Ember.ObjectController.extend({
  actions: {
    save: function(){

      // create a record and save it to the store
      var newProduct = this.get('model');//this.store.createRecord('product', this.get('model'));
      newProduct.save();

      // redirects to the user itself
      this.transitionToRoute('product', newProduct);
    }
  }
});