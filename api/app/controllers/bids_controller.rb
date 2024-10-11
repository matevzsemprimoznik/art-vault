class BidsController < ApplicationController
    before_action :authorize
    
    def create
      @bid = Bid.new(bid_params)
      @bid.date = Time.current
      @bid.user_id = @user_uid
  
      auction = Auction.find(@bid.auction_id)
      last_bid = auction.bids.order(created_at: :desc).first
  
      if last_bid
        if @bid.price <= last_bid.price
          return render json: { error: 'Bid must be greater than the last bid.' }, status: :unprocessable_entity
        end
      else
        if @bid.price <= auction.start_price
          return render json: { error: 'Bid must be greater than the starting price.' }, status: :unprocessable_entity
        end
      end
  
      if @bid.save
        render json: @bid, status: :created
      else
        render json: @bid.errors, status: :unprocessable_entity
      end
    end
    
    private
    
    def bid_params
      params.permit(:auction_id, :price)
    end
  end
  