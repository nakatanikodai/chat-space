
$(function(){
     function buildHTML(message){
       if (message.image) {
       var html =  `<div class="messsage">
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
                        <img class="lower-message__image" src="lower-message__image">
                          ${message.image} 
                      </div>
                   </div>`
        return html;
      } else {
        var html = `<div class="messsage">
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
       return html;
       };
     }
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
});
