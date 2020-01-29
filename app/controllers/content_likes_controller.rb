class ContentLikesController < ApplicationController
  before_action :set_content
  def create
    @like=ContentLike.create(user_id: current_user.id,content_id:@content.id)
  end
  def destroy
    @like=ContentLike.find_by(user_id:current_user.id,content_id:params[:content_id])
    @like.destroy
  end
  private
  def set_content
    @content=Content.find(params[:content_id])
  end
end
