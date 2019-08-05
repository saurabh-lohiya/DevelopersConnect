li = $('nav div ul li');
developers = $('nav div ul li:nth-child(1)');
register = $('nav div ul li:nth-child(2)');
login = $('nav div ul li:nth-child(3)');
viewProfile = $('.container div.dev div.col1:nth-child(2) button');
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
viewProfile.on('click', ViewProfile);
li.on('click', addClassActive);
