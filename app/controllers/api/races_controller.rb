class Api::RacesController < ApplicationController

  def index
    @all = Race.all
    render json: @all
  end

  def show
    @race = Race.find_by_id(params[:id])
    render json: @race
  end
end
