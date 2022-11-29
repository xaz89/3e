$(document).ready(function() {

	
	if( $(window).width()<890) {
		
		$(".opt__open").on("click",function(){
		    var 
		    opt__menu = $('.opt__menu nav ul li'),
		    opt__open = $('.opt__open'),
		    opt__close = $('.opt__close'),

		    tl = new TimelineLite();
		    tl

		    .to(opt__open, 1, {display: 'none'})
		    .to(opt__close, 1, {display: 'block'},"-=.9")
		    .staggerFromTo(opt__menu, .5, {autoAlpha: 0, x: '-10%'}, {autoAlpha:1, x: '0%', ease: Elastic.easeOut.config(1, 0.7)},0.10, "-=.9")

		    $('.cont__chatBot').addClass('inactive');
		    $('.menu').addClass('active');
		    $('.btn__mb').addClass('active');
		    $('.donde__comprar').addClass( "send__back" );

		});


		$(".opt__close, .opt__menu nav ul li a").on("click",function(){
		    var 
		    opt__menu = $('.opt__menu nav ul li'),
		    opt__open = $('.opt__open'),
		    opt__close = $('.opt__close'),

		    tl = new TimelineLite();
		    tl

		    .to(opt__close, 1, {display: 'none'})
		    .to(opt__open, 1, {display: 'block'},"-=.9")
		    .staggerTo(opt__menu, .5, {autoAlpha: 0, x: '-10%', ease: Elastic.easeOut.config(1, 0.7)},0.10, "-=.9")

		    $('.cont__chatBot').removeClass('inactive');
		    $('.btn__mb').removeClass('active');
		    $('.menu').removeClass('active');
		    $('.btn__mb').removeClass('active');
		    $('.donde__comprar').removeClass( "send__back" );
		});
	}


	$(window).on('resize', function(){
		if( $(window).width()>890) {	
			$('.btn__mb').removeClass('active');
			$('.menu').removeClass('active');
			$('.opt__open').removeAttr('style');
			$('.opt__close').removeAttr('style');
			$('.opt__menu nav ul li').removeAttr('style');
			$('.cont__chatBot').removeClass('inactive');
			$('.donde__comprar').removeClass( "send__back" );
		}
	});

	$( ".user__log" ).mouseover(function() {
	  $('.donde__comprar').addClass( "send__back" );
	});

	$( ".user__log" ).mouseleave(function() {
	  $('.donde__comprar').removeClass( "send__back" );
	});


	$("#btn__com").on("click",function(){
		$(this).addClass('active');
		$('.c__retailers').addClass('active');
		$('.cont__chatBot').addClass('inactive');
	});

	$("#clos__com").on("click",function(){
		$('.c__retailers').removeClass('active');
		$('.cont__chatBot').removeClass('inactive');
	});

	
	
});