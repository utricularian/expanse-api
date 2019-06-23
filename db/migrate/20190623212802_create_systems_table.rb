class CreateSystemsTable < ActiveRecord::Migration[5.2]
  def up
    create_table :systems do |t|
      t.string :name
      t.integer :distance_from_galactic_core, default: 0, null: false
      t.float :radians_around_galactic_core, default: 0.0, null: false
      t.timestamps
    end

    execute 'ALTER TABLE systems ADD CONSTRAINT systems_distance_from_galactic_core_check CHECK (distance_from_galactic_core >= 0)'
    execute 'ALTER TABLE systems ADD CONSTRAINT systems_radians_around_galactic_core_check CHECK (radians_around_galactic_core >= 0 AND radians_around_galactic_core < pi())'
  end

  def down
    execute 'ALTER TABLE systems DROP CONSTRAINT systems_radians_around_galactic_core_check'
    execute 'ALTER TABLE systems DROP CONSTRAINT systems_distance_from_galactic_core_check'

    drop_table :systems
  end
end
