class HomeController < ApplicationController
  def index
    if current_user.present?
      redirect_to expanse_path
    else
      render 'index'
    end
  end
end
