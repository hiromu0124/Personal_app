$(function(){
  function buildHTML(content){
    var html = `
                <div class="show-main__titles">
                <div class="show-main__titles__title">
                title:
                test1
                </div>
                <div class="show-main__titles__title__text">
                test
                </div>
              `
    search_list.append(html);
  }
  function appendErrMsgToHTML(msg) {
    var html = `<div class='name'>${ msg }</div>`
    search_list.append(html);
  }
  $(".header__content__form__input").on("keyup",function(){
    debugger
    var input=$(".header__content__form__input").val();
    $.ajax({
      url: "/contents/search", 
      type: 'GET',
      data: {keyword: input},  
      dataType: 'json'
    })
    .done(function(contents){
      var html =buildHTML(contents);
      search_list.empty();
      $(".show-main__titles").empty();
      if(contents.length!==0){
        contents.forEach(function(content){
          appendTweet(content);
        });
      }else{
        appendErrMsgToHTML("一致するものがありません");
      }
      
    })
    // .fail(function() {
    //   alert("失敗しました");
    // })
  })
});