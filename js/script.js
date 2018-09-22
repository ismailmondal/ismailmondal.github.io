(function($) {	
	"use strict";

	//  Hide Preloader
	function Preloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	
	//  Update Header Style and Scroll to Top
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

	//  Masonary js
	function enableMasonry() {
		if($('._mscntnr').length){		
			var winDow = $(window);
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

	function ScrollSpy(event){
	    $('.main-header .nav-link').each(function () {  
	        var scrollPos = $(document).scrollTop();
	        var nav_height = $(".main-header").innerHeight();
	        //console.log(nav_height);
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));    	
	        var p_top = refElement.position().top - nav_height;
	        var el_height = refElement.position().top + refElement.innerHeight();
	    
	        if ( p_top <= scrollPos && el_height > scrollPos) {
	            $('.main-header .nav-link').removeClass("active");
	            currLink.addClass("active");
	        }
	        else{
	            currLink.removeClass("active");
	        }
	    });	    
	}

	
/* =========================================
   When document is ready
============================================*/
$(document).ready(function() {  
	//add margin to top of the banner
	// var navHeight = $("nav").innerHeight();
	// $(".main-slider").css({
	// 	"padding-top":navHeight
	// });

	//custom scroll bar
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

    // Elements Animation
	if($('.wow').length){
		var wow = new WOW({
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       0,
			mobile:       true,
			live:         true
		  });
		wow.init();
	};

	//LightBox | Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}

	//Material design input
	$('.form-control').on('focus blur', function (e) {
    	$(this).parents('.form-group').toggleClass('focused', 
    	(e.type === 'focus' || this.value.length > 0));
	}).trigger('blur');

	//revolution slider setting
	var rev;
    if($(".rev_slider").revolution == undefined){
        revslider_showDoubleJqueryError(".rev_slider");
    } else {
        rev = $(".rev_slider").show().revolution({
		    sliderType:"standard",
        sliderLayout:"auto",
        dottedOverlay:"yes",
        delay:10000,
        navigation: {
            keyboardNavigation:"off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation:"off",
                mouseScrollReverse:"default",
            onHoverStop:"off",
            touch:{
                touchenabled:"on",
                touchOnDesktop:"off",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
            },
            arrows: {
                style:"metis",
                enable:true,
                hide_onmobile:true,
                hide_under:600,
                hide_onleave:true,
                tmp:'',
                left: {
                    h_align:"left",
                    v_align:"center",
                    h_offset:0,
                    v_offset:0
                },
                right: {
                    h_align:"right",
                    v_align:"center",
                    h_offset:0,
                    v_offset:0
                }
            }                    
        },
        responsiveLevels:[1200,1400,778,600],
        visibilityLevels:[1200,1400,778,600],
        gridwidth:[1200,1400,778,600],
        gridheight:[890,790,690,590],
        lazyType:"none",
        parallax: {
          type:"mouse",
          origo:"slidercenter",
          speed:2000,
          speedbg:0,
          speedls:0,
          levels:[2,3,4,5,10,7,12,16,10,50,47,48,49,50,51,55],
        },
        shadow:0,
        spinner:"off",
        stopLoop:"off",
        stopAfterLoops:-1,
        stopAtSlide:-1,
        shuffle:"off",
        autoHeight:"off",
        hideThumbsOnMobile:"off",
        hideSliderAtLimit:0,
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,
        debugMode:false,
        fallbacks: {
           simplifyAll:"off",
           nextSlideOnWindowFocus:"off",
           disableFocusListener:false,
        }
      });
    };

    //scroll to top
    $('.scroll-to-top').click(function(){
		$('html, body').animate({
	       scrollTop: 0
	    }, 300);
	});
	
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
		//Sidebar scroll
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

	//smoothscroll
	$('.main-header .nav-link').on('click', function (e) {
	  e.preventDefault();
	  $(document).off("scroll");
	  $('.main-header .nav-link').removeClass('active');        
	  $(this).addClass('active'); 
	  var target = this.hash; 
	  $('html, body').animate({
	    'scrollTop': $(target).offset().top - 40
	  }, 300, function () {
	    $(document).on("scroll", ScrollSpy);
	  });
	});

  // line progress
  var bar = new ProgressBar.Line( _html , {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#e44d26',
    trailColor: '#ffa993',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  bar.animate(.85);

  var bar = new ProgressBar.Line( _css , {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#2163af',
    trailColor: '#33a9dc',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  bar.animate(.80);

  var bar = new ProgressBar.Line( _jquery , {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#0a293d',
    trailColor: '#617e90',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  bar.animate(.75);

  var bar = new ProgressBar.Line( _javaScript , {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#efc725',
    trailColor: '#fbde34',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  bar.animate(.55);

  

  
});

/* =============================================
   When document is Scrollig
==============================================*/	
$(window).on('scroll', function() {
	headerStyle();
	ScrollSpy();
});
		
/* =========================================
   When document is loading
============================================*/	
$(window).on('load', function() {
	Preloader();	
	enableMasonry();
});



// Initialize Firebase
var config = {
	apiKey: "AIzaSyBwYKlh8laAVm2cOXLi-VCCZU90HiZ-Po0",
	authDomain: "my-portfolio-c0e50.firebaseapp.com",
	databaseURL: "https://my-portfolio-c0e50.firebaseio.com",
	projectId: "my-portfolio-c0e50",
	storageBucket: "my-portfolio-c0e50.appspot.com",
	messagingSenderId: "226226104990"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');



$("#contactMe").validate({
    rules: {
        "name": {
            required: true
        },
        "phone": {
            required: true,
            digits: true,
            minlength: 10,
            maxlength: 10
        },
        "email": {
            required: true,
            email: true
        },
        "company": {
            required: true,
        },
        "message": {
            required: true
        },
    },
    messages: {
        "name": {
            required: "Please enter your name"
        },
        "phone": {
            required: "Please enter your phone"
        },
        "email": {
            required: "Please enter your email",
            email: "Please enter valid email"
        },
        "company": {
            required: "Please enter company name"
        },
        "message": {
            required: "Please enter your message"
        },
    },
    errorElement : 'span',
    submitHandler: function (form) {
    	//alert();
    	submitForm();
    }
});

// Submit form
function submitForm(){
	$("._btnsbmt").html("Sending...");
  // Get values
  var name = $("[name='name']").val();
  var phone = $("[name='phone']").val();
  var email = $("[name='email']").val();
  var company = $("[name='company']").val();
  var message = $("[name='message']").val();

  // Save message
  saveMessage(name, phone, email, company, message);

  // Show alert
  $('.alert').addClass('show');

  // Clear form
  $('#contactMe')[0].reset()

  // Hide alert after 5 seconds
  setTimeout(function(){
    $('.alert').removeClass('show');
    $("._btnsbmt").html("Send");
  },5000);

  
  
}

// Save message to firebase
function saveMessage(name, phone, email, company, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    phone: phone,
    email: email,
    company: company,
    message: message
  });
}


})(window.jQuery);
