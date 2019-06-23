require 'rails_helper'

describe System do
  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:distance_from_galactic_core) }
    it { should validate_presence_of(:radians_around_galactic_core) }

    describe 'factory built' do
      it 'should be valid' do
        expect(FactoryBot.build(:system)).to be_valid
      end
    end

    describe 'distance_from_galactic_core' do
      it 'must be >= 0' do
        system = FactoryBot.build(:system, distance_from_galactic_core: -1)
        expect(system).to_not be_valid
      end

      it 'must be an integer' do
        system =  FactoryBot.build(:system, distance_from_galactic_core: 1.23)
        expect(system).not_to be_valid
      end
    end

    describe 'radians_around_galactic_core' do
      it 'must be >= 0.0 and < PI' do
        system = FactoryBot.build(:system, radians_around_galactic_core: -1.0)
        expect(system).to_not be_valid

        system = FactoryBot.build(:system, radians_around_galactic_core: 0.0)
        expect(system).to be_valid

        system = FactoryBot.build(:system, radians_around_galactic_core: Math::PI)
        expect(system).not_to be_valid
      end
    end
  end
end
