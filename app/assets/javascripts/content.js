$(function(){
  function buildHTML(answer){
    var html =`<div class="answers">
    <div class="answer__user">
    <a class="main__menu__contents__content__user__link" href="/users/1">${answer.user.name}</a>
    </div>
    <div class="answer">
    <div class="answer__created_at">
    ${answer.created_at}
    </div>
    <div class="answer__text">
    <p>${answer.text}</p>
    </div>
    </div>
    </div>
              `
  }
  $("#answer_text").on("submit", function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url =$(this).attr("action");
    $.afax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json'
    })
    .done(function(answer){
      var html = buildHTML(answer)
      $('.answers').append(html);
      $('.answer-form__main__btn').prop('disabled', false);
      $(".answer-form__main__form")[0].reset();
    })
  });
});