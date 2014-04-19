FinanceRegister.ProductsCreateController = Ember.ObjectController.extend({
  newDate: new Date(),
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
    save: function(){
      var newProduct = this.get('model');
      // newProduct.set("date",new Date());
      // newProduct.save();

      var that = this;

      newProduct.validate().then(
        function() {

          that.set("showValidationErrors", false);

          newProduct.set("date",new Date());
          newProduct.save(); 

          that.transitionToRoute('/products', newProduct);
        }, 
        function() {
          that.set("showValidationErrors", true);
        }
      )
    }, 
    cancel: function() {
      this.get('model').deleteRecord();
      this.transitionToRoute('/products');
    }
  }
});