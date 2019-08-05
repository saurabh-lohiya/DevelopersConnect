var flag = 1;
li = $('nav div ul li');
developers = $('nav div ul li:nth-child(1)');
register = $('nav div ul li:nth-child(2)');
login = $('nav div ul li:nth-child(3)');
password = $('#password');
conformPassword = $('#conformPassword');
register1 = $('.container form input[value="register"]');
dashboard = $('a.navbar-brand');

dashboard.on('click', arguments => {
	window.location.href = '../dashboard/dashboard.html';
});
function signIn() {
	window.location.href = '../signIn/signIn.html';
}
function signUp(param) {
	window.location.href = '../signUp/signUp.html';
}
function Developers() {
	window.location.href = '../developers/developers.html';
}
function ViewProfile(params) {
	window.location.href = '../Profile/profile.html';
}
function addClassActive(e) {
	li.removeClass('active');
	$(this).addClass('active');
}

developers.on('click', Developers);
register.on('click', signUp);
login.on('click', signIn);

conformPassword.keyup(function(e) {
	if (password.val() !== conformPassword.val()) {
		$('#msg').html('Password and Conform Password values must match inorder to continue');
		flag = 1;
		$('#msg').show();
	} else if (password.val() === conformPassword.val()) {
		$('#msg').hide();
		flag = 0;
	}
});
li.on('click', addClassActive);
function addClassActive(e) {
	li.removeClass('active');
	$(this).addClass('active');
}
register1.click(function(param) {
	if (flag == 1) {
		$('#msg').show();
	} else {
		$('form').submit(function(e) {
			console.log($(this).serialize());
			e.preventDefault();
		});
	}
});
