module Api
  module V1
    class ApiController < ApplicationController
      before_action :authenticate
      before_action :require_application_json!

      private

      def authenticate
        render status: :unauthorized, json: nil unless logged_in?
      end
    end
  end
end
