class ContentLikesController < ApplicationController
  def destroy
    @like=ContentLike.find_by(user_id:current_user.id,content_id:params[:id])
    @like.destroy
    redirect_to content_path(params[:id])
  end
  private
end
