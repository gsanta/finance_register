FinanceRegister.ProductEditController = Ember.ObjectController.extend({
  needs: 'product',
  validationState: true,
  actions: {
    save: function() {
      var product = this.get('model');
      
      var that = this;
      product.validate().then(
        function() {
          that.set("validationState", true);
          console.log("valid: " + that.get("validationState"))

          product.set("date",moment(product.get("date"))._d);
          product.save(); 
          that.transitionToRoute('products');
        }, 
        function() {
          that.set("validationState", false);
          //that.get("model").rollback();

          console.log( "nem valid: " + that.get("validationState") );

        }
      )
    },
    delete: function(){
        this.get('model').deleteRecord();
        this.get('model').save();

        this.transitionToRoute('products');
    },
    cloneModel: function() {
      var product = this.get("model");
      console.log(product.get("name"))
      var newProduct = this.store.createRecord('product', {
          name: product.get("name"),
          price: product.get("price"),
          amount: product.get("amount"),
          date: new Date()
      });

      var that = this;
      newProduct
      .save()
      .then(function(){
        that.transitionToRoute('products');
      });;  
    }
  } 
});

