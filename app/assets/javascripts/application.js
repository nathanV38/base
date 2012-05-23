// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//


//= require jquery
//= require jquery_ujs
//= require ember
//= require twitter/bootstrap
//= require ember-bootstrap
//= require ember-routemanager
//= require ember/base
//= require_self
//= require_tree .


Base.navController.set('pageStates', Ember.RouteManager.create({
  rootElement: '#content',
  initialState: 'page1',
  wantsHistory: true,

  page1: Ember.ViewState.create({
    route: 'page1',
    view: Base.Page1
  }),

  page2: Ember.ViewState.create({
    route: 'page2',
    view: Base.Page2
  }),

  page3: Ember.ViewState.create({
    route: 'page3',
    view: Base.Page3
  })
}));

Base.navController.set('pages', [
  {title: 'Page1', value: 'page1'},
  {title: 'Page2', value: 'page2'},
  {title: 'Page3', value: 'page3'}
]);

Base.userController.set('userStates', Ember.StateManager.create({
  rootElement: '#navbar-container',
  initialState: function() {
    if (Base.isSignedIn) {
      return 'signedIn';
    } else {
      return 'signedOut';
    }
  }.property(),
  signedOut: Ember.ViewState.create({
    view: Base.SignedOutView
  }),

  signedIn: Ember.ViewState.create({
    view: Base.SignedInView
  })
}));

jQuery(function() {
  Base.navController.get('navView').appendTo('#nav_container')
})
