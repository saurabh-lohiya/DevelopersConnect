li = $('nav div ul li');
developers = $('nav div ul li:nth-child(1)');
register = $('nav div ul li:nth-child(2)');
login = $('nav div ul li:nth-child(3)');
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

developers.on('click', Developers);
register.on('click', signUp);
login.on('click', signIn);

$('nav div ul li').on('click', addClassActive);
function addClassActive(e) {
	li.removeClass('active');
	$(this).addClass('active');
}
$('div.flex div.flexR .bg-primary').on('click', signUp);
$('div.flex div.flexR button:nth-child(2)').on('click', signIn);
