(function ($) {
	"use strict";
	var NAY = {};
	var plugin_track = 'static/plugin/';
	$.fn.exists = function () {
		return this.length > 0;
	};

	/* ---------------------------------------------- /*
	 * Pre load
	/* ---------------------------------------------- */
	NAY.PreLoad = function () {
		document.getElementById("loading").style.display = "none";
	}

	/*--------------------
	    * Menu Close
	----------------------*/
	NAY.MenuClose = function () {
		$('.navbar-nav a').on('click', function () {
			var toggle = $('.navbar-toggler').is(':visible');
			if (toggle) {
				$('.navbar-collapse').collapse('hide');
			}
		});
	}


	NAY.MenuTogglerClose = function () {
		$(".toggler-menu").on('click', function () {
			$(this).toggleClass('open');
			$('.header-left').stop().toggleClass('menu-open menu-open-desk');
		});
		$('.header-left a').on('click', function () {
			var toggle = $('.toggler-menu').is(':visible');
			if (toggle) {
				$('.header-left').removeClass('menu-open');
				$('.toggler-menu').removeClass('open');
			}
		});
	}

	/* ---------------------------------------------- /*
	 * Header Fixed
	/* ---------------------------------------------- */
	NAY.HeaderFixd = function () {
		var HscrollTop = $(window).scrollTop();
		if (HscrollTop >= 100) {
			$('body').addClass('fixed-header');
		} else {
			$('body').removeClass('fixed-header');
		}
	}

	/*--------------------
      * One Page
  ----------------------*/
	NAY.OnePage = function () {
		$('.header-nav a[href*="#"]:not([href="#"]), .go-to a[href*="#"]:not([href="#"])').on('click', function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top - 60,
					}, 1000);
					return false;
				}
			}
		});
	}

	/*--------------------
    * Counter JS
    ----------------------*/
	NAY.Counter = function () {
		var counter = jQuery(".counter");
		var $counter = $('.counter');
		if (counter.length > 0) {
			loadScript(plugin_track + 'counter/jquery.countTo.js', function () {
				$counter.each(function () {
					var $elem = $(this);
					$elem.appear(function () {
						$elem.find('.count').countTo({
							speed: 2000,
							refreshInterval: 10
						});
					});
				});
			});
		}
	}


	$(document).ready(function () {
		$(".owl-carousel").owlCarousel({
			loop: true,
			autoplay: true,
			autoplayHoverPause: true,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
					nav: false,
					loop: true
				},
				600: {
					items: 1,
					nav: false,
					loop: true
				},
				1000: {
					items: 3,
					nav: false,
					loop: true
				}
			}
		});
	});

	/* ---------------------------------------------- /*
     * lightbox gallery
    /* ---------------------------------------------- */
	NAY.Gallery = function () {
		if ($(".lightbox-gallery").exists() || $(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
			loadScript(plugin_track + 'magnific/jquery.magnific-popup.min.js', function () {
				if ($(".lightbox-gallery").exists()) {
					$('.lightbox-gallery').magnificPopup({
						delegate: '.gallery-link',
						type: 'image',
						tLoading: 'Loading image #%curr%...',
						mainClass: 'mfp-fade',
						fixedContentPos: true,
						closeBtnInside: false,
						gallery: {
							enabled: true,
							navigateByImgClick: true,
							preload: [0, 1] // Will preload 0 - before current, and 1 after NAY current image
						}
					});
				}
				if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
					$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
						disableOn: 700,
						type: 'iframe',
						mainClass: 'mfp-fade',
						removalDelay: 160,
						preloader: false,
						fixedContentPos: false
					});
				}
			});
		}
	}

	/*--------------------
        * Progress Bar 
    ----------------------*/
	NAY.ProgressBar = function () {
		$(".skill-bar .skill-bar-in").each(function () {
			var bottom_object = $(this).offset().top + $(this).outerHeight();
			var bottom_window = $(window).scrollTop() + $(window).height();
			var progressWidth = $(this).attr('aria-valuenow') + '%';
			if (bottom_window > bottom_object) {
				$(this).css({
					width: progressWidth
				});
			}
		});
	}

	new TypeIt("#type-it", {
		strings: ["Software Engineer", "Full-Stack .NET Developer"],
		breakLines: false,
		speed: 125,
		loop: true
	}).go();

	/* ---------------------------------------------- /*
	 * All Functions
	/* ---------------------------------------------- */
	// loadScript
	var _arr = {};

	function loadScript(scriptName, callback) {
		if (!_arr[scriptName]) {
			_arr[scriptName] = true;
			var body = document.getElementsByTagName('body')[0];
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = scriptName;
			script.onload = callback;
			// fire NAY loading
			body.appendChild(script);
		} else if (callback) {
			callback();
		}
	};

	// Window on Load
	$(window).on("load", function () {
		NAY.PreLoad();
	});
	// Document on Ready
	$(document).on("ready", function () {
		NAY.HeaderFixd(),
			NAY.OnePage(),
			NAY.Counter(),
			NAY.MenuClose(),
			NAY.MenuTogglerClose(),
			NAY.Gallery(),
			NAY.ProgressBar(),
			NAY.mTypeIt(),
			NAY.Owl(),
			$('[data-toggle="tooltip"]').tooltip({
				trigger: "hover"
			});
	});

	// Document on Scrool
	$(window).on("scroll", function () {
		NAY.ProgressBar(),
			NAY.HeaderFixd();
	});

	// Window on Resize
	$(window).on("resize", function () {});

	$(window).bind("resize", function () {
		if ($(this).width() < 500) {
			$(".cta-click").removeClass("btn-lg")
			$(".resume-btn").removeClass("resume-btn-big")
			$(".resume-btn").addClass("resume-btn-sm")
		} else {
			$(".cta-click").addClass("btn-lg")
			$(".resume-btn").addClass("resume-btn-big")
			$(".resume-btn").removeClass("resume-btn-sm")
		}
	}).trigger("resize");


})(jQuery);

// EmailJS

const btn = document.getElementById('button');

document.getElementById('form')
	.addEventListener('submit', function (event) {
		event.preventDefault();

		btn.value = 'Sending...';

		const serviceID = 'default_service';
		const templateID = 'template_8lxvliv';

		emailjs.sendForm(serviceID, templateID, this)
			.then(() => {
				btn.value = 'Send Email';
				Swal.fire({
					title: 'Email Sent!',
					text: 'Thank you for your message! I will respond within 24 hours.',
					icon: 'success',
					confirmButtonText: 'Great!'
				})
			}, (err) => {
				btn.value = 'Send Email';
				Swal.fire({
					title: 'Error!',
					text: JSON.stringify(err),
					icon: 'error',
					confirmButtonText: 'Try again'
				})
			});
	});

/* ---------------------------------------------- /*
	 * SweetAlert Modals for Projects
/* ---------------------------------------------- */
document.getElementById("calculatorBtn").addEventListener('click', function () {
	Swal.fire({
		title: 'Mortgage Calculator',
		text: 'Use this tool to get loan information such as amortization schedule, total principal, total interest, and total loan cost. Built with HTML, CSS, JavaScript, Bootstrap 4, and JQuery.',
		imageUrl: '/img/mortgage-calculator.jpg',
		showCloseButton: true,
		showCancelButton: true,
		imageWidth: 400,
		imageHeight: 300,
		imageAlt: 'Mortgage Calculator House',
		confirmButtonText: 'To the App!',
	}).then((result) => {
		if (result.value) {
			window.location.href = `//stephensouvall-mortgage.netlify.app`
		}

	})
});

document.getElementById("superdogBtn").addEventListener('click', function () {
	Swal.fire({
		title: 'SuperDog Events',
		text: 'SuperDog Events is an event company that produces comic cons. The marketing team has requested a site the displays stats from their events. The application allows the user to add and delete events and displays up-to-date stats for all events. Built with HTML, CSS, JavaScript, Bootstrap 4, and JQuery.',
		showCloseButton: true,
		showCancelButton: true,
		imageUrl: '/img/superdog.jpg',
		imageWidth: 300,
		imageHeight: 400,
		imageAlt: 'Super dog!',
		confirmButtonText: 'To the App!',
	}).then((result) => {
		if (result.value) {
			window.location.href = `//stephensouvall-superdog.netlify.app`
		}

	})
});

document.getElementById("tacocatBtn").addEventListener('click', function () {
	Swal.fire({
		title: 'Tacocat: a Palindrome Checker',
		text: 'Tacocat takes in a word, phrase, or paragraph and checks if it is a palindrome (i.e. it reads the same backward and forward). Built with HTML, CSS, JavaScript, Bootstrap 4, and JQuery.',
		showCloseButton: true,
		showCancelButton: true,
		imageUrl: '/img/cat.jpg',
		imageWidth: 300,
		imageHeight: 300,
		imageAlt: 'A funny cat',
		confirmButtonText: 'To the App!',
	}).then((result) => {
		if (result.value) {
			window.location.href = `//stephensouvall-tacocat.netlify.app`
		}

	})
});

document.getElementById("fizzbuzzBtn").addEventListener('click', function () {
	Swal.fire({
		title: 'FizzBuzz',
		text: 'FizzBuzz is a classic coding challenge that lists every number between 1 and 100. If a number is divisible by 3, it is replaced with "Fizz". If a number is divisible by 5, it is replaced with "Buzz". If a number is divisible by both 3 AND 5, it is replaced with "FizzBuzz". This app goes a step further, allowing the user to customize the number range and the two divisors. Built with HTML, CSS, JavaScript, and JQuery.',
		showCloseButton: true,
		showCancelButton: true,
		imageUrl: '/img/fizz-buzz.jpg',
		imageWidth: 200,
		imageHeight: 300,
		imageAlt: 'FizzBuzz soda',
		confirmButtonText: 'To the App!',
	}).then((result) => {
		if (result.value) {
			window.location.href = `//stephensouvall-fizzbuzz.netlify.app`
		}

	})
});

document.getElementById("calculatorBtn").addEventListener('click', function () {
	Swal.fire({
		title: 'Mortgage Calculator',
		text: 'Use this tool to get loan information such as amortization schedule, total principal, total interest, and total loan cost. Built with HTML, CSS, JavaScript, and JQuery.',
		showCloseButton: true,
		showCancelButton: true,
		imageUrl: '/img/mortgage-calculator.jpg',
		imageWidth: 400,
		imageHeight: 300,
		imageAlt: 'Mortgage Calculator House',
		confirmButtonText: 'To the App!',
	}).then((result) => {
		if (result.value) {
			window.location.href = `//stephensouvall-mortgage.netlify.app`
		}

	})
});

document.getElementById("calculatorBtn").addEventListener('click', function () {
	Swal.fire({
		title: 'Mortgage Calculator',
		text: 'Use this tool to get loan information such as amortization schedule, total principal, total interest, and total loan cost. Built with HTML, CSS, JavaScript, and JQuery.',
		showCloseButton: true,
		showCancelButton: true,
		imageUrl: '/img/mortgage-calculator.jpg',
		imageWidth: 400,
		imageHeight: 300,
		imageAlt: 'Mortgage Calculator House',
		confirmButtonText: 'To the App!',
	}).then((result) => {
		if (result.value) {
			window.location.href = `//stephensouvall-mortgage.netlify.app`
		}

	})
});