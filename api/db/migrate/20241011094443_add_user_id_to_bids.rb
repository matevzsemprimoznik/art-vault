class AddUserIdToBids < ActiveRecord::Migration[7.2]
  def change
    add_column :bids, :user_id, :string
  end
end
