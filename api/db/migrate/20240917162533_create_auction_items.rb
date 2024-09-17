class CreateAuctionItems < ActiveRecord::Migration[7.2]
  def change
    create_table :auction_items do |t|
      t.references :item, null: false, foreign_key: true
      t.references :auction, null: false, foreign_key: true

      t.timestamps
    end
  end
end
