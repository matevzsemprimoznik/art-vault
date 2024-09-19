class CreateBids < ActiveRecord::Migration[7.2]
  def change
    create_table :bids do |t|
      t.decimal :price
      t.datetime :date
      t.references :auction, null: false, foreign_key: true

      t.timestamps
    end
  end
end
