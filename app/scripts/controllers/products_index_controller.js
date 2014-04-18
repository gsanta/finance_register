FinanceRegister.ProductsIndexController = Ember.ArrayController.extend({
    itemController: 'product',
 	sortProperties: ['date'],
 	sortAscending: false,
  	checkedAllProducts: false,
  	actions: {
  		checkAllProducts: function() {
  			this.toggleProperty('checkedAllProducts');
            var that = this;
            this.forEach(function(product) {
                product.set('isChecked',that.get('checkedAllProducts'))
            });
  		} 
  	}
});  