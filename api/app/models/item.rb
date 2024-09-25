class Item < ApplicationRecord
    has_many :category_items
    has_many :categories, through: :category_items
    has_many :auction_items
    has_many :auctions, through: :auction_items
    validates :name, presence: true, length: { minimum: 3, maximum: 50 }
    validates :description, presence: true
  end
  
