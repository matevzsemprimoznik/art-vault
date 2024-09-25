class AddStartPriceToItem < ActiveRecord::Migration[7.2]
  def change
    add_column :items, :start_price, :decimal
  end
end
