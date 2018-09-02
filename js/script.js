(function($) {
	
	"use strict";
	
	//Hide Loading Box (Preloader)
	function Preloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}	
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			if (windowpos >= 50) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
		}
	}
	
	headerStyle();
	
	
	
	
	//Hidden Sidebar
	if ($('.hidden-bar').length) {
		var hiddenBar = $('.hidden-bar');
		var hiddenBarOpener = $('.hidden-bar-opener');
		var hiddenBarCloser = $('.hidden-bar-closer');
		var navToggler = $('.nav-toggler');		
		//Show Sidebar
		hiddenBarOpener.on('click', function () {
			hiddenBar.toggleClass('visible-sidebar');
			navToggler.toggleClass('open');
		});		
		//Hide Sidebar
		hiddenBarCloser.on('click', function () {
			hiddenBar.toggleClass('visible-sidebar');
			navToggler.toggleClass('open');
		});	
		hiddenBar.niceScroll({
        	cursorcolor: "#fff",
	        cursoropacitymin: 0, 
	        cursoropacitymax: 1, 
	        cursorwidth: "2px",
	        zindex: "9999", 
	        scrollspeed: 60,
	        mousescrollstep: 40,
	        touchbehavior: false,
        });

	}

	// Smooth Scrollspy
    $(".main-header .nav-link").on('click', function(e) {
	   e.preventDefault();
	   // store hash
	   var hash = this.hash;
	   $('html, body').animate({
	       scrollTop: $(hash).offset().top
	    }, 300, function(){
	       window.location.hash = hash;
	    });
	});
	

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
		
/* =========================================
   When document is loading, do
============================================*/
	
	$(window).on('load', function() {
		Preloader();
	});

	$(document).ready(function() {  
        $("html").niceScroll({
        	cursorcolor: "#333",
	        cursoropacitymin: 0, 
	        cursoropacitymax: 1, 
	        cursorwidth: "5px",
	        zindex: "999", 
	        scrollspeed: 60,
	        mousescrollstep: 40,
	        touchbehavior: false,
        });
    });

    // Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	};

	//Masonary
	function enableMasonry() {
		if($('._mscntnr').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('._mscntnr');
	
			$container.isotope({
				itemSelector: '._msitm',
				 masonry: {
					columnWidth : '._msitm'
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
	
			winDow.on('resize', function(){

				$container.isotope({ 
					itemSelector: '._msitm',
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
		}
	}
	
	enableMasonry();

	

})(window.jQuery);
