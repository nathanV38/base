Base.SignedInView = Ember.View.extend({
  templateName: "ember/templates/signed_in",
  classNames: ['inline', 'nav', 'pull-right'],
  tagName: 'ul'
});
Base.SignedOutView = Ember.View.extend({
  templateName: "ember/templates/signed_out",
  classNames: ['inline', 'nav', 'pull-right'],
  tagName: 'ul'
});
