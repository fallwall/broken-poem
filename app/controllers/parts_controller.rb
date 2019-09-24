class PartsController < ApplicationController
  def index
    @parts = Part.all
    render json: @parts, status: :ok
  end

  def create
    @part = Part.new(part_params)
    if @part.save
      render json: @part, status: :crated
    else
      render json: @part.errors, status: :unprocessable_entity
    end
  end

  private
  
  def part_params
    params.require(:part).permit(:word)
  end
end
