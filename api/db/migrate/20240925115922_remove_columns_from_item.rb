class RemoveColumnsFromItem < ActiveRecord::Migration[7.2]
  def change
    remove_column :items, :start_date, :timestamp
    remove_column :items, :end_date, :timestamp
    remove_column :items, :start_price, :decimal
  end
end
