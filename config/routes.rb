Rails.application.routes.draw do
  devise_for :users
  root to: "contents#index"
  get 'events', to: 'event#events'
  resources :contents, only: [:index, :new, :create, :show, :search] do
    resources :answer,only: [:index, :show, :new, :create]
    resources :content_likes,only: [:destroy]
    collection do
      get :search
    end
  end
  post "create_like", to: "contents#create_like"
  post "answer",to: "contents#create_answer"
  get "all",to: "categories#index3"
  get "programming",to: "categories#index2"
  get "profile",to: "users#show2"
  resources :categories,only: [:index, :show]
  resources :users, only: [:index, :edit, :update, :show] do
    get "likes_show", to: :likes_show
  end
  resources :histories, only: [:show, :destroy] do
    delete "destroy2", to: :destroy2 
  end
  resources :calendar, only: [:index] do
    resources :event, only: [:create, :events, :index, :new, :show, :edit, :destroy, :update]
  end
  namespace :api, { format: 'json' } do
    namespace :v1 do
        resources :events
    end
  end
end
