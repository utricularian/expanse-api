require 'rails_helper'

describe Api::V1::SystemsController do

  describe '#index' do
    setup_api_environment_for_testing

    let(:make_request) { get :index }

    let(:system1) { FactoryBot.build(:system, radians_around_galactic_core: 1.0) }
    let(:system2) { FactoryBot.build(:system, radians_around_galactic_core: 3.0) }
    let(:system3) { FactoryBot.build(:system, radians_around_galactic_core: 2.0) }

    before do
      system1.save!
      system2.save!
      system3.save!
    end

    it 'returns all systems in a standard json api format' do
      get :index
      expect(response).to be_ok
      expect(response.body).to_not be_nil
      body_as_object = JSON.parse(response.body).with_indifferent_access
      systems_wrapper = body_as_object[:data]
      expect(systems_wrapper.length).to eql(3)

      systems_attributes = systems_wrapper.map {|d| d[:attributes] }
      snake_cased_attributes = systems_attributes.map { |attr| ApiPayload.snakify_object(attr) }
      systems = snake_cased_attributes.map { |attr| System.new(attr) }
      expect(systems).to eq([system1, system3, system2])
    end

  end
end
