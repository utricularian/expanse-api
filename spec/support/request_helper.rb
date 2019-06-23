module RequestHelper

  def setup_api_environment_for_testing
    before do
      @request.headers['Content-Type'] = 'application/json'
    end
  end
end
