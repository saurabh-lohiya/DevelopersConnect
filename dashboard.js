li = $('nav div ul li');
developers = $('nav div ul li:nth-child(1)');
register = $('nav div ul li:nth-child(2)');
login = $('nav div ul li:nth-child(3)');
editProfile = $('.container div.mt-2 span:nth-child(1)');
addExperience = $('.container div.mt-2 span:nth-child(2)');
addEducation = $('.container div.mt-2 span:nth-child(3)');
delete1 = $('.container table tbody tr td :button');
delete2 = $('.container button:contains("Delete My Account")');
dashboard = $('a.navbar-brand');

dashboard.on('click', arguments => {
	window.location.href = '../dashboard/dashboard.html';
});
function signIn(params) {
	window.location.href = '../signIn/signIn.html';
}
function signUp(param) {
	window.location.href = '../signUp/signUp.html';
}
function Developers(params) {
	window.location.href = '../developers/developers.html';
}
function EditProfile(params) {
	window.location.href = '../editProfile/editProfile.html';
}
function AddEducation(param) {
	window.location.href = '../addEducation/addEducation.html';
}
function AddExperience(param) {
	window.location.href = '../addExperience/addExperience.html';
}
delete2.on('click', function(param) {
	$('body').hide();
});
delete1.on('click', function() {
	$(this)
		.parent('td')
		.parent('tr')
		.hide();
});

developers.on('click', Developers);
register.on('click', signUp);
login.on('click', signIn);
editProfile.on('click', EditProfile);
addEducation.on('click', AddEducation);
addExperience.on('click', AddExperience);

$('nav div ul li').on('click', addClassActive);
function addClassActive(e) {
	li.removeClass('active');
	$(this).addClass('active');
}
