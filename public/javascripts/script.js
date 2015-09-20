$(document).ready(function(){

	$('.town').on('click', function(){
		$(this).closest('.work').find('.info').slideToggle();
	});


});