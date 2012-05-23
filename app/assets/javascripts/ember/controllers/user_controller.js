Base.UserController = Ember.Object.extend({
  currentUserBinding: "Base.currentUser",
  userStates: null
});

Base.userController = Base.UserController.create();

Base.addObserver('isSignedIn', function() {
  if (Base.get('isSignedIn')) {
    Base.userController.get('userStates').goToState('signedIn');
  } else {
    Base.userController.get('userStates').goToState('signedOut');
  }
});
