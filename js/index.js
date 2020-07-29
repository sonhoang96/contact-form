$(document).ready(function() {
	let inputs = $('.form_info').find('input');
	let message = $('.form_info').find('textarea');
	//message, phone, email, name
	let text = $('.form_info').find('p');
	
	inputs.focus(function(event) {
		$(this).parent().find('p').addClass('typing');
	});
	inputs.blur(function(event) {
		let val = event.target.value;
		if(val == ''){
			$(this).parent().find('p').removeClass('typing');
		}
	});
	message.focus(function(event) {
		$(this).parent().find('p').addClass('typing');
	});
	message.blur(function(event) {
		let val = event.target.value;
		if(val == ''){
			$(this).parent().find('p').removeClass('typing');
		}
	});
});