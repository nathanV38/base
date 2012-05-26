Base.SignedInView = Ember.View.extend({
  templateName: "ember/templates/signed_in",
  classNames: ['inline', 'nav', 'pull-right'],
  tagName: 'ul'
});

Base.SignedOutView = Ember.View.extend({
  templateName: "ember/templates/signed_out",
  classNames: ['inline', 'nav', 'pull-right'],
  tagName: 'ul',

  signUpView: Ember.View.extend({
    templateName: "ember/templates/sign_up_form"
  }),

  isSignInContent: function() {
    return Base.userController.get('contentStates').get('currentState').get('name') == 'signInContent';
  }.property("Base.userController.contentStates.currentState.name")

});

Base.SignInContentView = Ember.View.extend({
  templateName: "ember/templates/sign_in_form"
});

Base.PasswordContentView = Ember.View.extend({
  templateName: "ember/templates/forgot_password_form"
});
