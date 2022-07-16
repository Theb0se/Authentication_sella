$(document).ready(function () {
  $("#form_btn").click(function (event) {
    event.preventDefault();

    var error_msg = "";
    if (
      $.trim($("#email").val()).length === 0 ||
      $.trim($("#password").val()).length === 0
    ) {
      error_msg = "Campo obbligatorio";
      $("#error_data").text(error_msg);
      $("#error_data2").text(error_msg);
    } else {
      $("#error_data").text("");
      $("#error_data2").text("");
      $("#form_email").hide();
      $("#form_number").show();
    }
  });

  $("#form-number_btn").click(function (event) {
    event.preventDefault();
    var error_msg = "";
    if ($.trim($("#number_input").val()).length === 0) {
      error_msg = "Campo obbligatorio";
      $("#error_data3").text(error_msg);
    } else {
      $("#error_data3").text("Success");
    }
  });

  $("#showbtn").click(function () {
    if ($("#password").attr("type") == "password") {
      $("#password").attr("type", "text");
    } else {
      $("#password").attr("type", "password");
    }
  });
});
