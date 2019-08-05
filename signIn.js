li = $('nav div ul li');
developers = $('nav div ul li:nth-child(1)');
register = $('nav div ul li:nth-child(2)');
login = $('nav div ul li:nth-child(3)');
dashboard = $('a.navbar-brand');

dashboard.on('click', arguments => {
	window.location.href = '../dashboard/dashboard.html';
});
developers.on('click', function(param) {
	window.location.href = '../developers/developers.html';
});
register.on('click', function(param) {
	window.location.href = '../signUp/signUp.html';
});
login.on('click', function(param) {
	window.location.href = '../signIn/signIn.html';
});

$('nav div ul li').on('click', addClassActive);
function addClassActive(e) {
	li.removeClass('active');
	$(this).addClass('active');
}
