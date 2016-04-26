var mixin = require('ember-progress');

App = Em.Application.create();

Em.TEMPLATES.index = Em.HTMLBars.template(require('./template'));

App.CountProgressComponent = Em.Component.extend(mixin, {

  setup: function(){

    var self = this;
    var n = 0;
    var id = setInterval(function(){
      if (n == 100) clearInterval(id);
      self.set('progress', n++);
    }, 50);

  }.on('didInsertElement'),

});
