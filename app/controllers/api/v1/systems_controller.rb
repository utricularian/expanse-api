
module Api
  module V1
    class SystemsController < ApiController
      def index
        systems = System.all.order(:radians_around_galactic_core)
        render json: { data: systems.map { |s| ApiPayload.new(s) } }
      end
    end
  end
end

