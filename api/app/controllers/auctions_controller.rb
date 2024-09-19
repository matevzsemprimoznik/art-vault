class AuctionsController < ApplicationController
    before_action :set_auction, only: %i[show update destroy]
    before_action :authorize
  
    def index
      @auctions = Auction.all
      render json: @auctions
    end
  
    def show
      render json: @auction
    end
  
    def create
      @auction = Auction.new(auction_params)
      
      if @auction.save
        render json: @auction, status: :created, location: @auction
      else
        render json: @auction.errors, status: :unprocessable_entity
      end
    end
  
    def update
      if @auction.update(auction_params)
        render json: @auction
      else
        render json: @auction.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @auction.destroy
      head :no_content
    end
  
    private
  
    def set_auction
      @auction = Auction.find(params[:id])
    rescue ActiveRecord::RecordNotFound
      render json: { error: 'Auction not found' }, status: :not_found
    end
  
    def auction_params
      params.require(:auction).permit(:name, :description, :start_date, :end_date, :start_price, item_ids: [])
    end
  end
  