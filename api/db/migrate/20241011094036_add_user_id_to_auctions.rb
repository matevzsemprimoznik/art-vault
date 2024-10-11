class AddUserIdToAuctions < ActiveRecord::Migration[7.2]
  def change
    add_column :auctions, :user_id, :string
  end
end
