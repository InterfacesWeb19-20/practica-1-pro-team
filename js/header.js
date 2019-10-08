
$(document).ready(function(){

	$(window).scroll(function(){

		if( $(this).scrollTop() > 0 ){

			$('header').addClass('header2');
			$('nav').addClass('.nav2');
			$('header h1').addClass('.header2 h1');
			//$('padding-top-salto').addClass('padding-top-salto');

		} else {

			$('header').removeClass('header2');
			$('nav').removeClass('.nav2');
			$('header h1').removeClass('.header2 h1');
			//$('padding-top-salto').removeClass('padding-top-salto');
		}
	});

});