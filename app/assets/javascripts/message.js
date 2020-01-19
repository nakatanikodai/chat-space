$(function(){

  
  
var buildHTML = function(message){
  if (message.content && message.image){
    var html = `
    <div class="message" data-message-id= "${message.id}" > 
      <div class="messages-parts__data"> 
        <div class="messages-parts__user-name"> 
          ${message.user_name} 
        </div>
        <div class="messages-parts__day-time"> 
          ${message.created_at} 
        </div> 
      </div>
      <div class="messages-parts__messages">
        <p class="lower-message__content">
          ${message.content} 
        </p> 
        <img src="  ${message.image} " class="lower-message__image" > 
      </div>
    </div>`
  } 
  else if (message.content) {
    var html = `<div class="message" data-message-id= "${message.id}" > 
      <div class="messages-parts__data">
        <div class="messages-parts__user-name">
          ${message.user_name}
        </div>
        <div class="messages-parts__day-time">
          ${message.created_at}
        </div>
      </div>
      <div class="messages-parts__messages">
        <p class="lower-message__content">
          ${message.content}
        </p>
      </div>
    </div>`
  } else if (message.image) {
    var html = `<div class="message" data-message-id= "${message.id}"> 
      <div class="messages-parts__data">
        <div class="messages-parts__user-name">
          ${message.user_name}
        </div>
        <div class="messages-parts__day-time">
          ${message.created_at}
        </div>
      </div>
      <div class="messages-parts__messages">
        <img src=" ${message.image}  " class="lower-message__image" >
      </div>
    </div>
    `
  };
  return html;
};

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
     .done(function(data){
       var html = buildHTML(data);
       $('.messages').append(html);
       $('form')[0].reset();
       $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
       $('.send-button').prop('disabled', false);
     })

     .fail(function(){
          alert("メッセージ送信に失敗しました");
     });


})

  var reloadMessages = function(){
    last_message_id = $('.message:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })

    .done(function(messages){
      if (messages.length !== 0){
        var insertHTML = '';
        $.each(messages, function(i, message){
          insertHTML += buildHTML(message)
        });
        $('.messages').append(insertHTML);
        $('.messages').animate({ scrollTp: $('.messages')[0].scrllHeight});
      }
    })

    .fail(function(){
      alert("自動更新に失敗しました");
    });
  };
  if (document.location.href.match(/\/groups\/\d+\/messages/)){
    setInterval(reloadMessages, 7000);
  }
});
