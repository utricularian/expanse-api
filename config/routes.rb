Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'home#index', controller: :home

  get 'auth/google_oauth2/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'login', to: redirect('/auth/google_oauth2'), as: 'login'
  get 'logout', to: 'sessions#destroy', as: 'logout'

  resource :session, only: [:create, :destroy]

  namespace :api do
    namespace :v1 do
      resource :current_user, only: [:show], controller: 'current_user'

      resources :systems, only: :index
    end
  end
end
