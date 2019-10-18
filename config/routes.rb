Rails.application.routes.draw do
  resources :characters
  namespace :api do
    resources :users
    get '/current-user', to: 'users#get_current_user'
    resources :races, only: [:index, :show]
  end
  post '/auth/login', to: 'authentication#login'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
