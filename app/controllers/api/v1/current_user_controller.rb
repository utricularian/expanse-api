module Api
  module V1
    class CurrentUserController < ApiController
      def show
        render json: { data: ApiPayload.new(current_user) }
      end
    end
  end
end
