
$("#addComment button").on("click", function(){
  var $textareaValue = $("#addComment textarea").val();
  var $firstNameValue = $("#name").val();

  if (/^\s*$/.test($firstNameValue)){
    $firstNameValue = "Anonymous";
  }

  // the $comment varible is under the above if statement to make sure that the variable firstNameValue take its up-to-date value.
  var $comment = $("<h2>" + $firstNameValue + "<h2>" + "<p>" + $textareaValue + "</p> <br /> <hr />");

  if (/^\s*$/.test($textareaValue)){
    alert("dont leave the comment box empty. Please!");
  } else{
    $("#comments").append($comment);
  }



});
