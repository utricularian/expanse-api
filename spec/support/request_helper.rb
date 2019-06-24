module RequestHelper

  def setup_api_environment_for_testing
    before do
      @request.headers['Content-Type'] = 'application/json'

      allow(controller).to receive(:logged_in?).and_return(true)

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
  end

end
