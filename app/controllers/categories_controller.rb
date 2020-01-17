class CategoriesController < ApplicationController
  def index
    @q = Content.ransack(params[:q])
    @contents = @q.result(distinct: true)
    @categories_first = Category.first(4)
  end
  def index2
    @q = Content.ransack(params[:q])
    @contents = @q.result(distinct: true)
    @categories_last = Category.last(3)
  end
  def index3
    @q = Content.ransack(params[:q])
    @contents = @q.result(distinct: true)
    @categories = Category.all
  end
  def search
    @q = Content.search(search_params)
    @contents = @q.result(distinct: true)
  end
  def show
    @q = Content.ransack(params[:q])
    @contents = @q.result(distinct: true)
    @category_content = Content.where(category_id:params[:id])
    @category_name=Category.find(params[:id])
    end
end
