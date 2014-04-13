/*global Ember*/
FinanceRegister.Product = DS.Model.extend(Ember.Validations.Mixin, {
    name: DS.attr('string'),
    price: DS.attr('number'),
    amount: DS.attr('number'),
    date: DS.attr('date')
});

FinanceRegister.Product.reopen({
  validations: {
    name: {
      presence: true,
      length: { minimum: 5 }
    },
    price: {
      presence: true,
      numericality: { greaterThan: 5 } 
    }
  }
});

// probably should be mixed-in...
FinanceRegister.Product.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
FinanceRegister.Product.FIXTURES = [
  
  {
    id: 0,
    
    name: 'Coca Cola',
    
    price: '360',
    
    amount: '1'
    
  },
  
  {
    id: 1,
    
    name: 'Balaton szelet',
    
    price: '120',
    
    amount: '3'
    
  }
  
];
