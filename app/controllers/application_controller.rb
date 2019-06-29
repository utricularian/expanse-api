class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  def logged_in?
    session.has_key? :user_id
  end

  def current_user
    @current_user ||= User.find_by(id: session[:user_id]) if logged_in?
  end

  private

  def authenticate
    redirect_to :login unless logged_in?
  end

  def require_application_json!
    render status: 400, body: 'Content-Type must be application/json' unless request.headers['Content-Type'] == 'application/json'
  end
end
