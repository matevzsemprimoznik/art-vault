class ChangeStartDateColumnTypeInItems < ActiveRecord::Migration[6.0]
  def change
    change_column :items, :start_date, :timestamp
  end
end
