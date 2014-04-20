FinanceRegister.ProductsIndexController = Ember.ArrayController.extend({
  itemController: 'product',
 	sortProperties: ['date'],
 	sortAscending: false,
  isAllProductsSelected: false,
	actions: {
		selectAllProducts: function() {
			this.toggleProperty('isAllProductsSelected');
      var that = this;
      this.forEach(function(product) {
          product.set('isSelected',that.get('isAllProductsSelected'))
      });
		},
		deleteSelectedProducts: function() {
			this.forEach(function(product) {
        if( product.get('isSelected') === true ) {
        	console.log(product.get('model').get("name"))
        	product.get('model').destroyRecord();
        }
          
      });
		} 
	}
});  