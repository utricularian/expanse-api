module RequestHelper

  def setup_api_environment_for_testing
    let(:current_user) { FactoryBot.create(:user) }

    before do
      @request.headers['Content-Type'] = 'application/json'

      allow(controller).to receive(:logged_in?).and_return(true)
      allow(controller).to receive(:current_user).and_return(current_user)

      # OmniAuth.config.test_mode = true
      # OmniAuth.config.mock_auth[:google] = OmniAuth::AuthHash.new({
      #   provider: 'google',
      #   uid: '123456',
      #   info: {
      #     email: 'jon.doe.expanse.web.game@mailinator.com',
      #     first_name: 'jon',
      #     last_name:  'doe'
      #   },
      #   credentials: {
      #     token: 'abcdtokenefghi',
      #     refresh_token: 'zxcvnekotpoiu',
      #     expires_at: DateTime.now
      #   }
      # })
    end

    describe 'while not authenticated' do
      before do
        allow(controller).to receive(:logged_in?).and_return(false)
        allow(controller).to receive(:current_user).and_return(nil)
      end

      it 'should 401' do
        make_request

        expect(response).to be_unauthorized
      end
    end

    describe 'Content-Type' do
      before do
        @request.headers['Content-Type'] = 'text/html'
      end

      it 'requires application/json' do
        make_request

        expect(response.status).to eq(400)
        expect(response.body).to eq('Content-Type must be application/json')
      end
    end
  end

end
