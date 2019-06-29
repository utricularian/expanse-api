class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, null: false

      t.string :google_oauth_token
      t.string :google_oauth_refresh_token
      t.datetime :google_oauth_expires_at

      t.timestamps
    end
  end
end
