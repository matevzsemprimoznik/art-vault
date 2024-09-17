Rails.application.routes.draw do
  resources :categories
  resources :items do
    collection do
      get :show_by_categories
    end
  end
end
