$(function () {
  console.log("page ready");
  $("#loginForm").submit((event) => {
    event.preventDefault();
    ajaxPost();
  });

  function ajaxPost() {
    let formData = {
      email: $("#UserName").val(),
      password: $("#password").val(),
    };
    console.log(formData);
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: window.location + "api/login",
      data: JSON.stringify(formData),
      dataType: "json",
      success: function (customer) {
        console.log("success");
        if (customer.valid == true) {
          $("#result").addClass("success");
          $("#result").removeClass("fail");
        } else {
          $("#result").addClass("fail");
          $("#result").removeClass("success");
        }
      },
      error: function (e) {
        alert("error");
        console.log("error: " + e);
      },
    });
    resetData();
  }

  function resetData() {
    $("#UserName").val("");
    $("#password").val("");
  }
});
