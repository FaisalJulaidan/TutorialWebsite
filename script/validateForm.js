var validName = false;
var validEmail = false;
var validTele = false;
var validSub = false;
var validMsg = false;



function validate($this, regExp, validMsg, invalidMsg) {

    var $value = $this.val();
    var $p = $this.prev("p");
    var valid = '<span class="fa fa-check-circle"></span> ' + validMsg;
    var invalid = '<span class="fa fa-exclamation-circle "></span> ' + invalidMsg;


    if (regExp.test($value)) {
        $p.html(valid);
        $p.addClass("green").removeClass("red");
         return true;

    } else {
      if ($value == ''){
          $this.attr("placeholder", "Don't leave it empty");
      }
      $p.html(invalid);
      $p.addClass("red").removeClass("green");
      return false;
    }
}

//validating Full Name input
$("#name").on("keyup change blur paste cut", function() {
  validName = validate($(this),
      /^([a-zA-Z]+[,.]?[ ]?|[a-zA-Z]+['-]?)+$/,
      "Valid Name",
      "Invaild Name, no Numbers, Double Spaces or Symbols !@#$%^*&()");

});

//validating Email input
$("#email").on("blur keyup paste cut", function() {
    validEmail = validate($(this),
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Valid Email",
      "Invaild Email, should be something similar to <strong>tutorial_website@cardiff.co.uk</strong");
});

//validating Telephone input
$("#tele").on("blur keyup paste cut", function() {
    validTele = validate($(this),
    /^\+?([0-9]{2,3}[-\s])?[0-9]{7,11}$/,
      "Valid Number",
      "Invaild Number, no Letters, number of digits should be between 7-11");
});

//validating Subject input
$("#subject").on("blur keyup paste cut", function() {
    validSub = validate($(this),
    /^(?!\s*$).+/,
      "vaild Subject",
      "Invalid Subject, should't left empty!");
});

$("#message").on("blur keyup paste cut", function() {
    validMsg = validate($(this),
    /^(?!\s*$).+/,
      "vaild Message",
      "Invalid Message, should't left empty!");
});


$("#submitBtn").on("click", function(){
  if (validName && validEmail && validTele && validSub && validMsg){
    alert("Message sent! Thank you for contacting us")
  } else {
    alert("Rejected, please fill all fields and use valid info. before you submit");
  }
});
