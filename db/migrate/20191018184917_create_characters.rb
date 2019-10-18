class CreateCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :backstory
      t.integer :age
      t.belongs_to :race, foreign_key: true

      t.timestamps
    end
  end
end
