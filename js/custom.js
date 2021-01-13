(function($){
	'use strict'
	
/*
	//For menu
	$('.menu-icon').on('click', function(){
		$('.menu').slideToggle();
	});
*/	


	//For menu

	$('.menu-icon').on('click', function() {
	  $('.menu').animate({
	    'right' : '0'
	  });
	});

	  // For Close

	$('.menu .close').on('click', function() {
	  $('.menu').animate({
	    'left' : '-100%'
	  });
	});




// Top scroll ready korar jonno
	$(window).scroll(function(){
		var scrl = $(window).scrollTop();

		if(scrl > 500){
			$('.top').css({
				'opacity' : '1'
			});
		}
		else{
			$('.top').css({
				'opacity' : '0'
			});
		}
	});


	$('.top').on('click', function(){
		$('html').animate({
			'scrollTop' : '0'
		}, 2500);
	})






	


}) (jQuery);