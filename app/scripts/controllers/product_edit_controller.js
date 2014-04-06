FinanceRegister.ProductEditController = Ember.ObjectController.extend({
  needs: 'product',
  actions: {
    save: function(){
      var product = this.get('model');
      // this will tell Ember-Data to save/persist the new record
      product.save();
      // then transition to the current user
      this.transitionToRoute('product', product);
    }
  }
});

