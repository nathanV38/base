

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
    view: Base.SignedOutView.create({}),
    enter: function(manager, transition) {
      this._super(manager, transition);
      if (typeof Base.get('userController').get('contentStates') !== 'undefined') {
        Base.get('userController').get('contentStates').goToState('signInContent');
      }
    }
  }),

  signedIn: Ember.ViewState.create({
    view: Base.SignedInView.create({})
  }),
}));

Base.userController.set('contentStates', Ember.StateManager.create({
    rootView: Base.get('userController').get('userStates').get('signedOut').get('view'),
    initialState: "signInContent",
    signInContent: Ember.State.create({
    }),
    passwordContent: Ember.State.create({
    })
  })
);
