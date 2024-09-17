class AuctionItem < ApplicationRecord
  belongs_to :item
  belongs_to :auction
end
