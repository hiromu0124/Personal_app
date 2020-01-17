class HistoriesController < ApplicationController
  def show
    @q = History.ransack(params[:q])
  @answer = @q.result(distinct: true)
  @history=History.where(user_id:current_user.id)
  end
  def destroy
    @histories=History.where(user_id:current_user.id)
    @histories.destroy_all
    redirect_to history_path(current_user)
  end
  def destroy2
    @history=History.find(params[:history_id])
    @history.destroy
    redirect_to history_path(current_user)
  end
  private
  def search_params
    params.require(:q).permit(:content_cont)
  end
end
