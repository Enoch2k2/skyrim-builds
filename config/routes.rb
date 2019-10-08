Rails.application.routes.draw do
  namespace :api do
    resources :users
  end
  post '/auth/login', to: 'authentication#login'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
