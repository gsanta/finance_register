test('product model properties', function() {

	var store = FinanceRegister.__container__.lookup('store:main'),
      model;

	Ember.run(function() {
	    model = store.createRecord('product', {
			name: "Coca Cola",
			price: "360",
			amount: "2"
	    });
	});

  equal(model.get('name'), 'Coca Cola');
  equal(model.get('price'), '360');
  equal(model.get('amount'), '2');
});