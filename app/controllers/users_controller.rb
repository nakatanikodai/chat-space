class UsersController < ApplicationController


  def update
    if current_user.update(user_params)
      redirect_to root_path  #どこにリダイレクトしてるの？
    else
      render :edit 
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end

  
  
end
