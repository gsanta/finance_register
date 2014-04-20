FinanceRegister.ProductsStatisticsController = Ember.ObjectController.extend({
	monthlyExpense: function() {
		
		var expenseArray = [];
		var currentDate = new Date();

		this.get('model').forEach( function(product) {
			console.log("foreach run")
			var date = new Date(product.get('date'));
			var indexString = date.getFullYear() + "-" + date.getMonth();

			if( expenseArray[indexString] === undefined ) {
				expenseArray[indexString] = ( product.get('price') * product.get('amount') );
			} else {
				expenseArray[indexString] += ( product.get('price') * product.get('amount') );

			}
		})

		var resultArray = []

		for(var key in expenseArray)
	    {
	        if(expenseArray.hasOwnProperty(key))
	        {
	        	var dateParts = key.split("-");
	        	resultArray.push( {
	        		date: new Date( dateParts[0], dateParts[1] ),
	        		expense: expenseArray[key] 
	        	} );
	        }  
	    }

		return resultArray;
	}.property('@each'), 

	fullExpense: function() {
		var fullExpense = 0;

		this.get('model').forEach( function(product) {
			fullExpense += product.get('price') * product.get('amount');
		})

		return fullExpense;
	}.property('@each'),

	expensePerProduct: function() {
		var productExpenseArray = []

		this.get('model').forEach( function(product) {

			if( productExpenseArray[product.get('name')] === undefined ) {

				productExpenseArray[product.get('name')] = {
					expense: ( product.get('price') * product.get('amount') ),
					amount: product.get('amount')
				}
			} else {

				productExpenseArray[product.get('name')].expense += ( product.get('price') * product.get('amount') );
				productExpenseArray[product.get('name')].amount += product.get('amount');
			}
		})

		var resultArray = []

		for(var key in productExpenseArray)
	    {
	        if(productExpenseArray.hasOwnProperty(key))
	        {
	        	resultArray.push( {
	        		name: key,
	        		expense: productExpenseArray[key].expense,
	        		amount: productExpenseArray[key].amount
	        	} );
	        }
	    }

		return resultArray;
	}.property('@each')
});
