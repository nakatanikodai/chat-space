class UsersController < ApplicationController

  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path  #どこにリダイレクトしてるの？
    else
      render :edit #falseだったら編集できるようになるの？
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
end
