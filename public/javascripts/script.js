$(document).ready(function(){
	var townlat;
	var townlng;

	$('.townbtn').on('click', function(){
		$(this).next().slideToggle();
		townlat = $(this).data('townlat');
		townlng = $(this).data('townlng');
		statelat = $(this).data('townlat');
		statelng = $(this).data('townlng');
		initialize();
	});

	$('.milesofftrail').on('click', function(){
		$(this).closest('.info').find('.miles').slideToggle();
	});

	$('.postoffice').on('click', function(){
		$(this).closest('.info').find('.post').slideToggle();
	});

	$('.laundromat').on('click', function(){
		$(this).closest('.info').find('.placename').slideToggle();
	});

	$('.grocery').on('click', function(){
		$(this).closest('.info').find('.buy').slideToggle();
	});

	$('.placename').on('click', function(){
		$(this).find('.wash').slideToggle();
	})

	var statelat = $('.statetitle').children().data('statelat');
	var statelng = $('.statetitle').children().data('statelng');

function initialize() {
      var mapCanvas = document.getElementById('map');
      var mapOptions = {
      center: new google.maps.LatLng(statelat, statelng),
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      var map = new google.maps.Map(mapCanvas, mapOptions);

      var marker = new google.maps.Marker({
   	position: {lat: townlat, lng: townlng},
    map: map
  });

  var marker = new google.maps.Marker({
   	position: {lat: 34.6267, lng: -84.1936},
    map: map
  });

  var marker = new google.maps.Marker({
   	position: {lat: 45.9044, lng: -68.9213},
    map: map
  });


  }
 
google.maps.event.addDomListener(window, 'load', initialize);
});