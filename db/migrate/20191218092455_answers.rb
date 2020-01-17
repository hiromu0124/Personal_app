class Answers < ActiveRecord::Migration[5.2]
  def change
      create_table :answers do |t|
        t.string :text
        t.integer :user_id
        t.integer :content_id
        t.timestamps
    end
  end
end
