FinanceRegister.ProductEditController = Ember.ObjectController.extend({
  needs: 'product',
  //TODO: remove clone parts, put them into parent class
  showValidationErrors: false,
  isNameError: function() {
    if( this.get('showValidationErrors') === true && this.get('errors.name').length > 0 ) { return true; }
    return false;
  }.property('errors.name','showValidationErrors'),
  isPriceError: function() {
    if( this.get('showValidationErrors') === true && this.get('errors.price').length > 0 ) { return true; }
    return false;
  }.property('errors.price','showValidationErrors'),
  isAmountError: function() {
    if( this.get('showValidationErrors') === true && this.get('errors.amount').length > 0 ) { return true; }
    return false;
  }.property('errors.amount','showValidationErrors'),
  actions: {
    save: function() {
      var product = this.get('model');
      
      var that = this;
      product.validate().then(
        function() {
          that.set("showValidationErrors", false);

          product.set("date",moment(product.get("date"))._d);
          product.save(); 
          that.transitionToRoute('products');
        }, 
        function() {
          that.set("showValidationErrors", true);
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

