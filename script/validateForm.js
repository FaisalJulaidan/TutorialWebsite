var vaildName = false;
var vaildEmail = false;
var vaildTele = false;

function validate($this, regExp, validMsg, invalidMsg) {

    var $value = $this.val();
    var valid = '<span class="fa fa-check-circle green"></span> ' + validMsg;
    var invalid = '<span class="fa fa-exclamation-circle red"></span> ' + invalidMsg;

    if (regExp.test($value)) {
        $this.prev("p").html(valid);
    } else {
        $this.prev("p").html(invalid);
    }
}


$("#name").on("keyup change blur paste cut", function() {
    validate($(this), /^([a-zA-z]+[,.]?[ ]?|[a-z]+['-]?)+$/, "Valid Name", "Invaild Name, no Numbers, Double Spaces or Symbols !@#$%^*&()");
});
