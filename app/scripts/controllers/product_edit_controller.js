FinanceRegister.ProductEditController = Ember.ObjectController.extend({
  needs: 'product',
  validationState: true,
  actions: {
    save: function(){
      var product = this.get('model');

      var that = this;
      product.validate().then(
        function() {
          that.set("validationState", true);
          console.log("valid: " + that.get("validationState"))
          product.save();
          that.transitionToRoute('product', product);
        }, 
        function() {
          that.set("validationState", false);
          product.get('isValid'); // false

          console.log( "nem valid: " + that.get("validationState") );
          //user.get('errors.firstName'); // ["can't be blank"]
        }
      )
    }
  }
});

