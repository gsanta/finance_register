FinanceRegister.ProductEditController = Ember.ObjectController.extend({
  needs: 'product',
  actions: {
    save: function(){
      self = this;
      this.get('buffer').forEach(function(attr){
        self.get('controllers.product.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('product',this.get('model'));
    }
  }
});

