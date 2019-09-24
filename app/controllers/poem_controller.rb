class PoemController < ApplicationController
  def index
    @poems: Poem.all
    render json: @poems, status: :ok
  end

  def create
    @poem = Poem.new(poem_params)
    if @poem.save
      render json: @poem, status: :crated
    else
      render json: @poem.errors, status: :unprocessable_entity
    end
  end

  private
  
  def poem_params
    params.require(:poem).permit(:content)
  end
end
