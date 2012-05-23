#= require_self
#= require_tree ./models
#= require_tree ./controllers
#= require_tree ./views
#= require_tree ./helpers
#= require_tree ./templates

Base = Ember.Application.create({
  isSignedIn: Ember.computed(function(key, value) {
    if (arguments.length == 1) {
      return typeof Base.currentUser != 'undefined' && Base.currentUser.get('email') != null;
    }
  }).property('currentUser')
});
