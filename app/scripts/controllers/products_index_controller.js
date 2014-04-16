FinanceRegister.ProductsIndexController = Ember.ArrayController.extend({

	sortProperties: ['date:desc'],
  	sortedProducts: Ember.computed.sort('model', 'sortProperties'), 
  	checkedAllProducts: true,
  	actions: {
  		markAllProducts: function() {
  			
  		}
  	}
});  