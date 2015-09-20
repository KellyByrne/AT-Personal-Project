$(document).ready(function(){

	$('.townbtn').on('click', function(){
		$(this).next().slideToggle();
	});

	$('.postoffice').on('click', function(){
		$(this).closest('.info').find('.tab').slideToggle();
	});

});


