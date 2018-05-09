require 'rails_helper'

RSpec.describe Product, type: :model do
    require 'rails_helper'
      it { should validate_presence_of(:title) }
      it { should validate_presence_of(:price) }
      it { should validate_presence_of(:art_nr) }
      it { should validate_presence_of(:description) }
end
