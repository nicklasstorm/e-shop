require 'rails_helper'

RSpec.describe ProductsController, type: :controller do
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:art_nr) }
end
