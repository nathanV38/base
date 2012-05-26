Base.SignInController = Ember.Object.extend({
  email: null,
  password: null,
  rememberMe: false,

  forgotPassword: function() {
    Base.userController.contentStates.goToState('passwordContent');
    return false;
  },

  signIn: function() {
    try {
      email = this.get('email');
      password = this.get('password');
      remember = this.get('rememberMe');
      pat = new RegExp(Devise.email_pattern);
      if (email == null) {
        alert('Email is required');
      } else if (password == null) {
        alert('Password and confirmation are required');
      } else if (password.length < Devise.password_length.min ||
        password.length > Devise.password_length.max) {
        alert('Password must be at lest '+Devise.password_length.min+
          ' and shorter than '+Devise.password_length.max);
      } else if ( !pat.test(email) ) {
        alert('Email not correctly formed');
      } else {
        $.ajax({
          url: Base.signInPath,
          type: 'POST',
          dataType: 'json',
          data: $.extend(authParams,{
            'user[email]': email,
            'user[password]': password,
            'user[remember_me]': remember}),
          success: function(data) {
            //alert('Completed sign up process: '+ JSON.stringify(data));
            Base.currentUser.set('email', data.email);
            Base.currentUser.set('id', data.id);
          },
          error: function(jqXHR, textStatus, errorThrown) {
            alert('Error completing sign up: '+textStatus+' error: '+errorThrown);
          }
        });
        $("#sign_in_menu").removeClass('open');
      }
    } catch (ex) {
      alert('Error in processing sign in request: '+ex);
    }
    return false;
  }
});

Base.signInController = Base.SignInController.create();
