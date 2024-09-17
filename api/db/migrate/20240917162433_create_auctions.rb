class CreateAuctions < ActiveRecord::Migration[7.2]
  def change
    create_table :auctions do |t|
      t.string :name
      t.text :description
      t.datetime :start_date
      t.datetime :end_date
      t.decimal :start_price

      t.timestamps
    end
  end
end
