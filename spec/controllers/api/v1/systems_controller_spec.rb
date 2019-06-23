require 'rails_helper'

describe Api::V1::SystemsController do

  describe '#index' do
    describe "while not authenticated" do
      it 'says no'
    end

    describe 'while authenticated' do
      let(:system1) { FactoryBot.build(:system, radians_around_galactic_core: 1.0) }
      let(:system2) { FactoryBot.build(:system, radians_around_galactic_core: 3.0) }
      let(:system3) { FactoryBot.build(:system, radians_around_galactic_core: 2.0) }

      before do
        system1.save!
        system2.save!
        system3.save!
      end

      it 'returns all systems' do
        get :index
        expect(response).to be_ok
        expect(response.body).to_not be_nil
        body_as_object = JSON.parse(response.body)
        systems = body_as_object['data'].map {|d| System.new(d) }
        expect(systems).to eq([system1, system3, system2])
      end

    end
  end
end
