# dont want to require all of rails for this
require './app/models/api_payload'

describe ApiPayload do
  describe '.snakify_object' do
    describe 'given a hash with CamelCaseKeys' do
      it 'returns a hash with snake_case_keys' do
        incoming = {
          'FrontCaps' => 'should work',
          'ascendingCamels' => 'should work too',
          'and' => 'single words'
        }

        transformed = ApiPayload.snakify_object(incoming)

        expect(transformed).to eq({
          'front_caps' => 'should work',
          'ascending_camels' => 'should work too',
          'and' => 'single words'
        })
      end
    end
  end
end
