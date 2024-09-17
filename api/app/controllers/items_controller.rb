class ItemsController < ApplicationController
    before_action :set_item, only: %i[show update destroy]
  
    def index
      @items = Item.all
      render json: @items
    end
  
    def show
      render json: @item
    end
  
    def create
        @item = Item.new(item_params)
      
        if @item.save
          render json: @item, status: :created, location: @item, include: :categories
        else
          render json: @item.errors, status: :unprocessable_entity
        end
      end
  
    def update
      if @item.update(item_params)
        render json: @item
      else
        render json: @item.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @item.destroy
      head :no_content
    end

    def show_by_categories
        def by_categories
            if params[:category_ids].present?
              category_ids = params[:category_ids].map(&:to_i)
              @items = Item.joins(:categories).where(categories: { id: category_ids }).distinct
              render json: @items
            else
              render json: { error: 'category_ids parameter is missing' }, status: :bad_request
            end
          end
    end
  
    private
  
    def set_item
      @item = Item.find(params[:id])
    rescue ActiveRecord::RecordNotFound
      render json: { error: 'Item not found' }, status: :not_found
    end
  
    def item_params
      params.require(:item).permit(:name, :description, :image, category_ids: [])
    end
  end
  