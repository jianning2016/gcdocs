const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// When the login button is clicked, the following code is executed
loginButton.addEventListener("click", (e) => {
	$("#login-error-msg").hide(1000);
    // Prevent the default submission of the form
    e.preventDefault();
//the following we added
	const usernameValue = loginForm.username.value;
    const passwordValue = loginForm.password.value;
	alert(usernameValue);
	alert(passwordValue);
	var urlValue = "https://dev.gcdocs.gc.ca/gccase-gccas/llisapi.dll/api/v1/auth";
    var credentials = { username:usernameValue, password: passwordValue };
	$.ajax({
		url : urlValue,
		type: "POST", // data type (can be get, post, put, delete)
		data : credentials, // data in json format
		async : false, // enable or disable async (optional, but suggested as false if you need to populate data afterwards)
		success: function(response, textStatus, jqXHR) {
			console.log(response);
		},
		error: function (jqXHR, textStatus, errorThrown) {
			$("#login-error-msg").show(1000);
			console.log(jqXHR);
			console.log(textStatus);
			console.log(errorThrown);
		}
    });


})