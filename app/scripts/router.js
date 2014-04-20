FinanceRegister.Router.map(function () {
  
  this.resource('products', function(){
    this.resource('product', { path: '/:product_id' }, function(){
      this.route('edit');
    });
    this.route('create');
    this.route('statistics');
  });
  
});
