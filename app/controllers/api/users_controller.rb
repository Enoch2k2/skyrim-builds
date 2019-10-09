class Api::UsersController < ApplicationController
  before_action :authorize_request, except: [:create, :get_current_user]
  before_action :set_user, except: [:create, :index, :get_current_user]

  def index
    @users = User.all
    render json: @users
  end

  def show
    render json: @user, status: :ok
  end

  def get_current_user
    @current_user = current_user
    token = JsonWebToken.encode(user_id: @current_user.id)
    time = Time.now + 24.hours.to_i
    render json: { token: token, exp: time.strftime("%m-%d-%Y %H:%M"),
      user: @current_user }, status: :ok
  end

  def create
    @user = User.new(user_params)
    if @user.save
      token = JsonWebToken.encode(user_id: @user.id)
      time = Time.now + 24.hours.to_i
      render json: { token: token, exp: time.strftime("%m-%d-%Y %H:%M"),
                     user: @user }, status: :created
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    unless @user.update(user_params)
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @user.destroy
  end

  private
    def find_user
      @user = User.find_by_id(params[:id])
      rescue ActiveRecord::RecordNotFound
        render json: { errors: 'User not found' }, status: :not_found
    end

    def user_params
      params.require(:user).permit(:username, :password, :password_confirmation)
    end
end
