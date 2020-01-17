class AddcategoryToContents < ActiveRecord::Migration[5.2]
  def change
    create_table :contents do |t|
      t.string :title,       null: false, unique: true
      t.text   :text
      t.string :image
      t.references :user,    foreign_key: true,null: false
      t.references :category,    foreign_key: true,null: false
      t.timestamps
    end
  end
end
