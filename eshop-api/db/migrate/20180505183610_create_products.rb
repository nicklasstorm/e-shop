class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :title
      t.integer :price
      t.integer :art_nr
      t.string :description
      t.string :img_src

      t.timestamps
    end
  end
end
