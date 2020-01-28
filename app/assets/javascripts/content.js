// $(function(){
//   // setInterval(function(){
//   //   var time=new Date();
//   //   document.getElementById("time").innerHTML=time.toLocaleString();
    
//   // })
//   $(".like").on("submit",function(e){
//     console.log("ok")
//     e.preventDefault();
//     var formData = new FormData(this);
//     $.ajax({
//       url: "content/create_like",  
//       type: 'POST',  
//       data: formData , 
//       dataType: 'json',
//     });
//     done(function(){
//       $('.show-likes').append(`<a class="heart_btn" rel="nofollow" data-method="delete" href="/contents/1/content_likes/1"><div class="heart_sub"></div>
//       </a>`);
//     })
//     .fail(function() {
//       alert("メッセージ送信に失敗しました");
//     });
//   });
// });