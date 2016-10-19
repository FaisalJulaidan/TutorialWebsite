var vaildName = false;
var vaildEmail = false;
var vaildTele = false;

function validate($this, regExp, validMsg, invalidMsg) {

    var $value = $this.val();
    var $p = $this.prev("p");
    var valid = '<span class="fa fa-check-circle"></span> ' + validMsg;
    var invalid = '<span class="fa fa-exclamation-circle "></span> ' + invalidMsg;

    if ($value == '')
        $this.attr("placeholder", "Don't leave it empty");
    if (regExp.test($value)) {
        $p.html(valid);
        $p.addClass("green").removeClass("red");
    } else {
      $p.html(invalid);
      $p.addClass("red").removeClass("green");    }
}


$("#name").on("keyup change blur paste cut", function() {
    validate($(this),
      /^([a-zA-Z]+[,.]?[ ]?|[a-zA-Z]+['-]?)+$/,
      "Valid Name",
      "Invaild Name, no Numbers, Double Spaces or Symbols !@#$%^*&()");
});

$("#email").on("blur paste cut", function() {
    validate($(this),
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Valid Email",
      "Invaild Email, should be something similar to <strong>tutorial_website@cardiff.co.uk</strong");
});

$("#tele").on("blur keyup paste cut", function() {
    validate($(this),
    /^\+?([0-9]{2,3}[-\s])?[0-9]{7,11}$/,
      "Valid Number",
      "Invaild Number, no Letters");
});

$("#subject").on("blur", function() {
    validate($(this),
    /^[\w\s]+$/,
      "vaild Subject",
      "Invalid Subject");
});
