class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :update, :destroy]

  # GET /products
  def index
    @products = Product.all
    json_response(@products)
  end

  # POST /products
  def create
    @product = Product.create!(product_params)
    json_response(@product)
  end

  # GET /products/:id
  def show
    json_response(@product)
  end

  # PUT /products/:id
  def update
     @product.update(update_params)
     head :no_content

  end

  # DELETE /products/:id
  def destroy
    @product.destroy
    head :no_content
  end

  private

  def product_params
    # whitelist params
    params.permit(:title, :price, :art_nr, :description, :img_src, :product, :id)

  end
  def update_params
      params.require(:product)
            .permit(:title, :price, :art_nr, :description, :img_src, :product, :id)
  end
  def set_product
    @product = Product.find(params[:id])
  end
end
