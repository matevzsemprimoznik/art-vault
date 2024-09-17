class Item < ApplicationRecord
    has_many :item_categories
    has_many :categories, through: :item_categories

    validates :name, presence: true
    validates :name , length: { maximum: 20 }
    validates :name , length: { minimum: 3 }
    validates :description, presence: true
  end
