class ContentsController < ApplicationController
before_action :set_contents, only: %i[index,show]
PER = 11
  def index_main

  end
  def index
    @articles = Content.all
    @content=Content.page(params[:page]).per(PER).order('updated_at DESC')
    @contents=Content.new
    @articles =Content.order(created_at: :desc).limit(4)
    @q = Content.ransack(params[:q])
    @contents = @q.result(distinct: true)
    end
  def new
    if signed_in?
      @comment=Answer.new
      @content=Content.new
      @categrise=Category.all
      @q = Content.ransack(params[:q])
      @contents = @q.result(distinct: true)
    else
      redirect_to new_user_session_path
    end
  end
  def create
    Content.create(content_params)
    redirect_to contents_path
  
  end
  def create_answer
    @answer=Answer.new(answer_params)
    if @answer.save
      respond_to  do |format|
      format.html {redirect_to content_path(answer_params[:content_id])}
      format.json
      end
    
    else
      redirect_to contents_path
    end
  end
  def create_like
    @like=ContentLike.create(like_params)
    redirect_to content_path(like_params[:content_id])
  end
  def show
    if signed_in?
      @q = Content.ransack(params[:q])
      @contents = @q.result(distinct: true)
      @answer = Answer.where(content_id:params[:id])
      @content=Content.find(params[:id])
      new_history = @content.history.new
      new_history.user_id = current_user.id
      new_history.save
      @comment=Answer.new
      @like=ContentLike.find_by(user_id:current_user.id,content_id:params[:id])
      @likes=ContentLike.where(content_id:params[:id]).count
    else
      redirect_to new_user_session_path
    end
  end
  def destroy
    @like=ContentLike.find_by(user_id:current_user.id,content_id:params[:id])
    @like.destroy
  end
  private
  def answer_params
    params.require(:answer).permit(:text,:content_id).merge(user_id: current_user.id)
  end
  def content_params
    params.require(:content).permit(:title, :image, :text, :name,:category_id).merge(user_id: current_user.id)
  end
  def set_contents
    @content= Content.find(params[:content_id])
  end
  def search_params
    params.require(:q).permit!
  end
  def comment_params
    params.require(:answer).permit(:text).merge(user_id: current_user.id,content_id:params[:id])
  end
  def like_params
    params.permit(:user_id,:content_id)
  end
end
