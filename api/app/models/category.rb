class Category < ApplicationRecord
    has_many :category_items
    has_many :items, through: :category_items
    validates :name, presence: true, length: { minimum: 3, maximum: 20 }, uniqueness: true
    validates :description, presence: true
  end