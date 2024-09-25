class AddStartDateToItem < ActiveRecord::Migration[7.2]
  def change
    add_column :items, :start_date, :date
  end
end
