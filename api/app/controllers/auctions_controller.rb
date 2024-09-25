class AuctionsController < ApplicationController
    before_action :set_auction, only: %i[show update destroy]
    before_action :authorize
  
    def index
      @auctions = Auction.includes(:items).all
    
      auctions_with_price = @auctions.map do |auction|
        last_bid = auction.bids.order(created_at: :desc).first
        auction_data = auction.as_json.merge(
          price: last_bid ? last_bid.price : auction.start_price,
          items: auction.items.as_json(only: [:id, :name, :image])
        )
      end
    
      render json: auctions_with_price
    end
  
    def show
      @auction = Auction.includes(:items).find(params[:id])
      
      last_bid = @auction.bids.order(created_at: :desc).first
      auction_data = @auction.as_json.merge(
        price: last_bid ? last_bid.price : @auction.start_price,
        items: @auction.items.as_json(only: [:id, :name, :image, :description])
      )
      
      render json: auction_data
    end
    
  
    def create
      @auction = Auction.new(auction_params)
      Rails.logger.info('Auction params: ' + auction_params.to_s)
      
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
      params.permit(:name, :description, :start_date, :end_date, :start_price, item_ids: [])
    end
  end
  