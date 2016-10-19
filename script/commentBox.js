
$("#addComment button").on("click", function(){
  var $textareaValue = $("#addComment textarea").val();
  var $comment = $("<p>" + $textareaValue + "</p> <br /> <hr />");

  if (/^\s*$/.test($textareaValue)){
    alert("dont leave the comment box empty. Please!");
  } else{
    $("#comments").append($comment);
  }



});
