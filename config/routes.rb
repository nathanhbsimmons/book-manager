Rails.application.routes.draw do
  namespace :api do
    get 'books/index'
    post 'books/create'
    get '/show/:id', to: 'books#show'
    delete '/destroy/:id', to: 'books#destroy'
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
