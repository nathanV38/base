#= require_self
#= require_tree ./models
#= require_tree ./controllers
#= require_tree ./views
#= require_tree ./state_machines
#= require_tree ./helpers
#= require_tree ./templates

Base = Ember.Application.create({
  isSignedIn: Ember.computed(function(key, value) {
    if (arguments.length == 1) {
      return typeof Base.currentUser != 'undefined' && Base.currentUser.get('email') != null;
    }
  }).property('currentUser.email'),
  showAccount: function() {
    $("#account_menu").removeClass('open');
    alert('open account action TBD');
    return false;
  },
  signOut: function() {
    jQuery.ajax({
      url: Base.get('signOutPath'),
      type: 'DELETE',
      success: function(data) {},
      error: function(jqXHR, textStatus, errorThrown) {
        alert('Error completing sign up: '+textStatus+' error: '+errorThrown);
      }
    });
    Base.currentUser.set('email', null);
    Base.currentUser.set('id', null);
    return false;
  }
});
