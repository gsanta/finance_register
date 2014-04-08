module("FinanceRegister.Product")

test('product model properties', function() {

	var store = FinanceRegister.__container__.lookup('store:main'),
      model;

	Ember.run(function() {
	    model = store.createRecord('product', {
			name: "Coca Cola",
			price: "360",
			amount: "2"
	    });
	    model.save();
	});

  equal(model.get('name'), 'Coca Cola');
  equal(model.get('price'), '360');
  equal(model.get('amount'), '2');
});

test("adding a new product", function(){
  visit("/products/create");
  fillIn(".product-name", "Pepsi");
  fillIn(".product-price", "340");
  fillIn(".product-amount", "4");

  click(".save");
  andThen(function() {
     ok(find(".list-group-item-text:last .name:contains('Pepsi')").length, "New product name does not match");
     ok(find(".list-group-item-text:last .price:contains(340)").length, "New product price does not match");
     ok(find(".list-group-item-text:last .amount:contains(4)").length, "New product amount does not match");
  });
});

test("changing a new product", function(){
  visit("/products");
  
  click(".list-group-item-text:last .edit a");
  andThen(function() {
  	fillIn(".product-price", "345");

  	click(".save");
  });

  andThen(function() {
  	ok(find(".list-group-item-text:last .price:contains(345)").length, "New product's price could not be changed");
  });
});