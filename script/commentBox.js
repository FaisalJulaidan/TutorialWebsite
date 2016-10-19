
$("#addComment button").on("click", function(){
  var $textareaValue = $("#addComment textarea").val();
  var $comment = $("<p>" + $textareaValue + "</p> <br /> <hr />");

  
    $("#comments").append($comment);




});
