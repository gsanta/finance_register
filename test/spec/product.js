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
     ok(find(".list-group-item-text:contains('Pepsi')").length, "New product name does not match");
    // ok(find("a[rel=author]:contains('John Doe')").length, "A link to the author should display");
  });
});

// module("FinanceRegister.ProductController", {
//     setup: function () {
//     	var store = FinanceRegister.__container__.lookup('store:main');

//         Ember.run(this, function () {
//             // We could also fetch a model from our fixtures.
//             this.model = store.createRecord('product', {
// 				name: "Pepsi",
// 				price: "340",
// 				amount: "1"
// 		    });

//             this.controller = FinanceRegister.ProductsCreateController.create({ content: this.model });
//         });
//     }
// });

// test("can save a new product", function () {
//     Ember.run(this, function () {
//         this.controller.save();
//     });
// });