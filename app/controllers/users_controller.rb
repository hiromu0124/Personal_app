class UsersController < ApplicationController
  def index
  
  end
  def edit
    
  end
  def show
    @q = Content.ransack(params[:q])
    @contents = @q.result(distinct: true)
    @contents=Content.all
    @content = @contents.includes(:user)

  end
  def show2
    @q = Content.ransack(params[:q])
    @contents = @q.result(distinct: true)

  end
  def likes_show
    @q = Content.ransack(params[:q])
    @contents = @q.result(distinct: true)
    @user_likes=ContentLike.where(user_id:current_user.id)
  end
  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end
  private
    def user_params
      params.require(:user).permit(:name, :email)
    end
end
