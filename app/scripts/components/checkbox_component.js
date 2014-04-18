FinanceRegister.CheckboxComponentComponent = Ember.Component.extend({
  tagName: 'span',
  click: function() {
    this.sendAction();
  } 
});  