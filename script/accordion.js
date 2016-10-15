$(".sub-list").on("click",function(){
  
  var $accordion = $(this).parent().next("ul");
  $accordion.slideToggle("slow");

});
