Rails3BootstrapDeviseCancan::Application.routes.draw do
  authenticated :user do
    root :to => 'home#index'
  end
  root :to => "posts#index"
  devise_for :users
  resources :users
  resources :posts
end
