class EventController < ApplicationController
  before_action :set_event, only: [:show, :edit, :update, :destroy]
  
def index
  @events = Event.all

  respond_to do |format|
    format.html # index.html.erb
    format.xml { render :xml => @events }
    format.json { render :json => @events }
  end
end
def show
def edit

end
end
def new
  @event = Event.new
end
def create
    @event=Event.new
  end
def update
  respond_to do |format|
    if @event.update(event_params)
      format.html { redirect_to @event, notice: 'Event was successfully updated.' }
      format.json { render :show, status: :ok, location: @event }
    else
      format.html { render :edit }
      format.json { render json: @event.errors, status: :unprocessable_entity }
    end
  end
end
def destroy
  @event.destroy
  respond_to do |format|
    format.html { redirect_to events_url, notice: 'Event was successfully destroyed.' }
    format.json { head :no_content }
  end
end
  def events
    @event = Event.all
    # render :json => @event
    respond_to do |format|
      format.json {
        render json:
        @event.to_json(
          only: [:title, :start, :end]
        )
      }
    end
  end
private
def set_event
  @event = Event.find(params[:id])
end

def event_params
  params.require(:event).permit(
    :title,
    :start,
    :end,
    :color,
    :allday
  )
end
end
