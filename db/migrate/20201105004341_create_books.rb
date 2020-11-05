class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string :isbn, null: false
      t.text :title, null: false
      t.text :author, null: false
      t.text :illustrator
      t.text :edition
      t.text :notes_description

      t.timestamps
    end
  end
end
