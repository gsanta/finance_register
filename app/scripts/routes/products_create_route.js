FinanceRegister.ProductsCreateRoute = Ember.Route.extend({
  model: function(){
    // the model for this route is a new empty Ember.Object
    //return Em.Object.create({});
    return this.store.createRecord('product');
  },

  // in this case (the create route), we can reuse the user/edit template
  // associated with the usersCreateController
  // renderTemplate: function(){
  //   this.render('product.edit', {
  //     controller: 'productsCreate'
  //   });
  // }
});