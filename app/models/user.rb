
class User < ActiveRecord::Base

  # shamelessly stolen from:
  # https://medium.com/@amoschoo/google-oauth-for-ruby-on-rails-129ce7196f35
  def self.from_omniauth(auth)
    # Creates a new user only if it doesn't exist
    where(email: auth.info.email).first_or_initialize do |user|
      #user.name = auth.info.name
      user.email = auth.info.email
    end
  end
end
