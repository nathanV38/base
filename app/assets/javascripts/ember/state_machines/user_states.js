

Base.userController.set('userStates', Ember.StateManager.create({
  rootElement: '#navbar-container',
  initialState: function() {
    if (Base.isSignedIn) {
      return 'signedIn';
    } else {
      return 'signedOut';
    }
  }.property("Base.isSignedIn"),
  signedOut: Ember.ViewState.create({
    view: Base.SignedOutView
  }),

  signedIn: Ember.ViewState.create({
    view: Base.SignedInView
  })
}));
