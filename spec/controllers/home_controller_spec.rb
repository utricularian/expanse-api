require 'rails_helper'

describe HomeController do
  describe '#index' do
    describe 'when authenticated' do
      before do
        current_user = FactoryBot.create(:user)
        allow(controller).to receive(:logged_in?).and_return(true)
        allow(controller).to receive(:current_user).and_return(current_user)
      end

      it 'redirects to /expanse react app' do
        get :index

        expect(response).to_not render_template(:index)
        expect(response).to redirect_to(expanse_path)
      end
    end

    describe 'when not authenticated' do
      before do
        allow(controller).to receive(:logged_in?).and_return(false)
        allow(controller).to receive(:current_user).and_return(nil)
      end

      it 'renders the index erb' do
        get :index

        expect(response).to render_template(:index)
        expect(response).to_not redirect_to(expanse_path)
      end
    end
  end
end
