
module Api
  module V1
    class SystemsController < ApplicationController
      before_action :require_application_json!

      def index
        render json: {data: System.all.order(:radians_around_galactic_core)}
      end

      private

      def require_application_json!
        render status: 400, body: 'Content-Type must be application/json' unless request.headers['Content-Type'] == 'application/json'
      end
    end
  end
end

