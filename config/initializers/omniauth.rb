
credentials_file = Rails.root.join("credentials.#{Rails.env}.yml")

return if Rails.env.test?

raise "Requires credentials.#{Rails.env}.yml for Google OAuth" unless File.exists?(credentials_file)
credentials = YAML.safe_load(File.open(credentials_file))

OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, credentials['GoogleOAuth']['clientID'], credentials['GoogleOAuth']['clientSecret']
end
