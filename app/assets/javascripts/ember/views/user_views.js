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

  signInView: Ember.View.extend({
    templateName: "ember/templates/sign_in_form"
  })
})

