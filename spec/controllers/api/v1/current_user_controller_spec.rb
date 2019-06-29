require 'rails_helper'

describe Api::V1::CurrentUserController do
  describe '#show' do
    setup_api_environment_for_testing

    let(:make_request) { get :show }

    let!(:user1) { FactoryBot.create(:user, name: 'Fizzy Bang') }
    let!(:user2) { FactoryBot.create(:user, name: 'Flat Pop') }
    let(:current_user) { user1 }

    it 'returns the currently logged in user' do
      get :show

      expect(response).to be_ok
      expect(response.body).to_not be_nil
      body_as_object = JSON.parse(response.body).with_indifferent_access
      user_from_response = User.new(body_as_object[:data][:attributes])
      expect(user_from_response).to eq(user1)
    end

  end
end
