FinanceRegister.ProductIndexController = Ember.ObjectController.extend({
  	actions: {
	  	delete: function(){
	    	this.get('model').deleteRecord();
	    	this.get('model').save();

	    	this.transitionToRoute('products');
	    },
	    cloneModel: function() {
	    	var product = this.get("model");
	    	product.set("date",moment(product.get("date"))._d);
	    	console.log(product.get("name"))
	    	console.log("itt");
	    	var newProduct = this.store.createRecord('product', {
		        name: product.get("name"),
		        price: product.get("price"),
		        amount: product.get("amount"),
	      	});
	      	console.log("elotte")
	      	newProduct.save(); 
	      	console.log("utana")
	    }
	}
});