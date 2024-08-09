$(document).ready(function() {
	var bt = $('.top');
	
	$(window).scroll(function() {
		if($(window).scrollTop() > 300) {
			bt.addClass('voirBt');
		} else {
			bt.removeClass('voirBt');
		}
	});
	
	bt.on('click', function() {
		$('html, body').animate({scrollTop:0}, '350');
	});
	
});