require 'active_support/core_ext/string'

class ApiPayload
  attr_reader :attributes

  def initialize(backing_object)
    self.attributes = backing_object
  end

  def self.snakify_object(camel_obj)
    snake_obj = {}
    camel_obj.each do |key, val|
      snake_obj[key.underscore] = val
    end
    snake_obj
  end

  private

  attr_writer :attributes
end
