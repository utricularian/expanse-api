
module Api
  module V1
    class SystemsController < ApplicationController

      def index
        render json: {data: System.all.order(:radians_around_galactic_core)}
      end
    end
  end
end

