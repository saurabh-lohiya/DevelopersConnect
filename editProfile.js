li = $('nav div ul li');

developers = $('nav div ul li:nth-child(1)');
register = $('nav div ul li:nth-child(2)');
login = $('nav div ul li:nth-child(3)');
submit = $('.container form button.btn-primary');
dashboard = $('a.navbar-brand');

dashboard.on('click', arguments => {
	window.location.href = '../dashboard/dashboard.html';
});
// goback = $('.container form button.btn-light');

function signIn() {
	window.location.href = '../signIn/signIn.html';
}
function signUp(param) {
	window.location.href = '../signUp/signUp.html';
}
function Developers() {
	window.location.href = '../developers/developers.html';
}
// function Goback(params) {
// 	window.location.href = '../dashboard/dashboard.html';
// }

developers.on('click', Developers);
register.on('click', signUp);
login.on('click', signIn);
// goback.on('click', Goback);
