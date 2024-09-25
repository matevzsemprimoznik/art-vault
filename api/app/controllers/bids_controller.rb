class BidsController < ApplicationController
    before_action :authorize
    
    def create
      @bid = Bid.new(bid_params)
      @bid.date = Time.current
  
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
  