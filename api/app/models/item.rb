class Item < ApplicationRecord
    has_many :category_items
    has_many :categories, through: :category_items
    validates :name, presence: true, length: { minimum: 3, maximum: 20 }
    validates :description, presence: true
  end
  
