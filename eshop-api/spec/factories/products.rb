FactoryBot.define do
  factory :product do
    title { Faker::Lorem.word }
    price { Faker::Number.number(10) }
    art_nr { Faker::Number.number(10) }
    description { Faker::Lorem.word }
  end
end
