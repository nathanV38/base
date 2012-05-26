Base::Application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  devise_scope :users do
    get '/users/auth/:provider' => 'users/omniauth_callbacks#passthru'
  end

  root :to => "welcome#home"
end
