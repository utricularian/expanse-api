
class SessionsController < ApplicationController

  # shamelessly stolen from:
  # https://medium.com/@amoschoo/google-oauth-for-ruby-on-rails-129ce7196f35
  def create
    # Get access tokens from the google server
    access_token = request.env["omniauth.auth"]
    user = User.from_omniauth(access_token)

    # Access_token is used to authenticate request made from the rails application to the google server
    user.google_oauth_token = access_token.credentials.token
    # Refresh_token to request new access_token
    # Note: Refresh_token is only sent once during the first request
    refresh_token = access_token.credentials.refresh_token
    user.google_oauth_refresh_token = refresh_token if refresh_token.present?
    user.google_oauth_expires_at = Time.at(access_token.credentials.expires_at) if access_token.credentials.expires_at.present?
    user.save

    session[:user_id] = user.id

    redirect_to root_path
  end

  def destroy
    session.delete(:user_id)
    redirect_to root_path
  end
end
