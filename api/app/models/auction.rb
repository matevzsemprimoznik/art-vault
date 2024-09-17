class Auction < ApplicationRecord
    has_many :auction_items
    has_many :items, through: :auction_items
  
    validates :name, presence: true, length: { minimum: 3, maximum: 20 }
    validates :description, presence: true
    validates :start_date, presence: true
    validates :end_date, presence: true
    validate :start_date_before_end_date
    validates :start_price, presence: true, numericality: { greater_than: 0 }
  
    validate :items_present
  
    private
  
    def start_date_before_end_date
      if start_date.present? && end_date.present? && start_date > end_date
        errors.add(:start_date, 'must be before end date')
      end
    end
  
    def items_present
      errors.add(:items, 'must be present') if items.empty?
    end
  end
  