FactoryBot.define do
  factory :system do
    sequence(:name) { |n| "System #{n}" }
  end
end
