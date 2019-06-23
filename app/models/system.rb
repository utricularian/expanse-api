
class System < ActiveRecord::Base
  validates_presence_of :name, :distance_from_galactic_core, :radians_around_galactic_core

  validates :distance_from_galactic_core, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
  validates :radians_around_galactic_core, numericality: { greater_than_or_equal_to: 0.0, less_than: Math::PI }
end
