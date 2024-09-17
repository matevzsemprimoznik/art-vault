Rails.application.routes.draw do
  resources :categories
  resources :items do
    collection do
      get :get_by_categories
    end
  end
  resources :auctions
end
