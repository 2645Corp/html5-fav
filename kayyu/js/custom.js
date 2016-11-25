/* --------------------------------------------
Page Loader
-------------------------------------------- */
$(window).load(function() {
	'use strict';
	$(".loader-item").delay(700).fadeOut();
	$("#pageloader").delay(800).fadeOut("slow");
});

/* --------------------------------------------
 Pretty Photo
-------------------------------------------- */		
jQuery(document).ready(function(){
	'use strict';
	jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
		deeplinking:false
	});
});
/* --------------------------------------------
Sticky Navigation
-------------------------------------------- */		
jQuery(document).ready(function($) {	
	$(".header").sticky({topSpacing:0});
});
$(function() {
	'use strict';
	jQuery('.scroll').bind('click', function(event) {
		var $anchor = jQuery(this);
		var headerH = jQuery('#header').outerHeight();
			jQuery('html, body').stop().animate({					
				scrollTop : jQuery($anchor.attr('href')).offset().top  - 30 + "px"
			}, 1200, 'easeInOutExpo');

		event.preventDefault();
	});
});
jQuery('body').scrollspy({ 
	target: '#nav',
	offset: 95
});
// Menus hide after click --  mobile devices
$(document).ready(function() {  
	$('.nav li a').click(function () {
		 $('.navbar-collapse').removeClass('in');
	});
});
/* --------------------------------------------
Flexslider
-------------------------------------------- */	
$(window).load(function() {
	$('.flexslider').flexslider({
		animation: "slide",
		useCSS: false,
	});
});
/* --------------------------------------------
Testimonial Ticker Slider
-------------------------------------------- */	
$('.ticker').easyTicker({
	direction: 'up',
	easing: 'swing',
	speed: 'slow',
	interval: 3000,
	height: 'auto',
	visible: 2,
	mousePause: 1,
	controls: {
		up: '',
		down: '',
		toggle: '',
		playText: 'Play',
		stopText: 'Stop'
	}
});
jQuery( document ).ready(function($) {
	/* --------------------------------------------
	Counter
	-------------------------------------------- */	
	$(".count-number").appear(function(){
		$('.count-number').each(function(){
			datacount = $(this).attr('data-count');
			$(this).find('.counter').delay(6000).countTo({
				from: 10,
				to: datacount,
				speed: 3000,
				refreshInterval: 50,
			});
		});
	});
	/* --------------------------------------------
	Animation Items
	-------------------------------------------- */	
	$('.animated').appear(function() {
		var elem = $(this);
		var animation = elem.data('animation');
		if ( !elem.hasClass('visible') ) {
			var animationDelay = elem.data('animation-delay');
			if ( animationDelay ) {
			
				setTimeout(function(){
				 elem.addClass( animation + " visible" );
				}, animationDelay);
				
			} else {
				elem.addClass( animation + " visible" );
			}
		}
	});
});
/* --------------------------------------------
Mixit Up Portfolio
-------------------------------------------- */	
$(function(){
	$('#Container').mixItUp();

});
/* --------------------------------------------
Parallax Background
-------------------------------------------- */
$(document).ready(function(){
	'use strict';	
	$('div[data-type="background"]').each(function(){
		var $bgobj = $(this);
		$(window).scroll(function(){
			var yPos = -($window.scrollTop()/$bgobj.data('speed'));
			var coords = '50% ' + yPos + 'px';
			$bgobj.css({backgroundPosition: coords});
		});
	});
});
/* --------------------------------------------
Contact Form Validation
-------------------------------------------- */
$(document).ready(function(){
$('#contactform').bootstrapValidator({
	container: 'tooltip',
	feedbackIcons: {
		valid: 'fa fa-check',
		invalid: 'fa fa-times',
		validating: 'fa fa-refresh'
	},
	fields: {            
		name: {
			validators: {
				notEmpty: {
					message: 'Name is required. Please enter name.'
				}
			}
		},
		email: {
			validators: {
				notEmpty: {
					message: 'Email is required. Please enter email.'
				},
				emailAddress: {
					message: 'Please enter a correct email address.'
				}
			}
		},			
		message: {
			validators: {
				notEmpty: {
					message: 'Message is required. Please enter your message.'
				}                    
			}
		}
	}
})
.on('success.form.bv', function(e) {
				
	var data = $('#contactform').serialize();
	
	$.ajax({
			type: "POST",
			url: "process.php",					
			data: $('#contactform').serialize(),
			success: function(msg){						
				$('.form-message').html(msg);
				$('.form-message').show();
				submitButton.removeAttr("disabled");
				resetForm($('#contactform'));						
			},
			error: function(msg){						
				$('.form-message').html(msg);
				$('.form-message').show();
				submitButton.removeAttr("disabled");
				resetForm($('#contactform'));
			}
	 });
	 
	return false;
});
function resetForm($form) {
	$form.find('input:text, input:password, input, input:file, select, textarea').val('');
	$form.find('input:radio, input:checkbox').removeAttr('checked').removeAttr('selected');		
	$form.find('input:text, input:password, input, input:file, select, textarea, input:radio, input:checkbox').parent().find('.form-control-feedback').hide();
}
});