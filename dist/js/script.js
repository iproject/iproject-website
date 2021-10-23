runEvents();

function runEvents() {
	// Header Transition on scroll
	window.addEventListener('scroll', changeMainHeaderStyle);

	// Toggle about tabs
	document
		.querySelector('#home-about .buttons')
		.addEventListener('click', toggleAboutTab);

	window.addEventListener('orientationchange', orientationAdvisor);

	document
		.querySelector('body .video-player')
		.addEventListener('click', closeVideoPlayer);

	document
		.querySelector('#home-services .watch-video-btn a')
		.addEventListener('click', openVideoPlayer);
}

function openVideoPlayer(e) {
	const videoLightbox = document.querySelector('.video-player');
	const myPlayer = document.querySelector('.video-player video');
	myPlayer.play();
	myPlayer.currentTime = 0;
	videoLightbox.style.display = 'flex';
	videoLightbox.style.opacity = 1;

	e.preventDefault();
}

function closeVideoPlayer(e) {
	if (e.target.classList.contains('close-btn')) {
		const myPlayer = document.querySelector('.video-player video');
		myPlayer.pause();
		myPlayer.currentTime = 0;
		this.style.opacity = 0;
		this.style.display = 'none';
	}
}

// Change the main header styling on page scroll
function changeMainHeaderStyle() {
	if (window.scrollY > 40) {
		document.querySelector('#home-header').style.borderBottomColor =
			'#fb841b33';
		document.querySelector('#home-header').style.height = '60px';
		document.querySelector('#home-header .top-section').style.maxHeight = '0%';
		document.querySelector('#home-header .bottom-section').style.height =
			'100%';
		document.querySelector(
			'#home-header .bottom-section .menu-wrap'
		).style.height = '100%';
		// > Brand Logo
		document.querySelector('#home-header .branding img').style.width = '2rem';
		document.querySelector('#home-header h1 a').style.fontSize = '1rem';
	} else {
		document.querySelector('#home-header').style.borderBottomColor =
			'transparent';
		document.querySelector('#home-header').style.height = '90px';
		document.querySelector('#home-header .top-section').style.maxHeight = '45%';

		document.querySelector('#home-header .bottom-section').style.height = '55%';
		document.querySelector(
			'#home-header .bottom-section .menu-wrap'
		).style.height = '100%';

		// > Brand Logo
		document.querySelector('#home-header .branding img').style.width = '2.5rem';
		document.querySelector('#home-header h1 a').style.fontSize = '1.2rem';

		// > Using media queries to style header on smartphones
		var x = window.matchMedia('(max-width: 1100px)');
		myFunction(x); // Call listener function at run time
		x.addListener(myFunction); // Attach listener function on state changes
		function myFunction(x) {
			if (x.matches) {
				document.querySelector('#home-header .bottom-section').style.height =
					'100%';
			} else {
				document.querySelector('#home-header .bottom-section').style.height =
					'55%';
			}
		}
	}
}

// Toggle about tabs
function toggleAboutTab(e) {
	const buttons = document.querySelectorAll('#home-about .buttons button');

	const panels = document.querySelectorAll('#home-about .panels div');

	// > Check the selected button
	buttons.forEach((button) => {
		if (e.target.className === button.className) {
			// > Save selected button className
			const selectedBtnClass = button.className;
			// > Change button background color
			button.style.backgroundColor = '#fb841b';

			// > Compare selected button to its marching panel
			panels.forEach((panel) => {
				if (panel.classList.contains(selectedBtnClass)) {
					panel.style.display = 'block';
				} else {
					panel.style.display = 'none';
				}
			});
		} else {
			button.style.backgroundColor = '#5C5C5C';
		}
	});
}

//  Services Swiper
var swiper = new Swiper('#home-services .swiper', {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

//  Team members Swiper
// window.addEventListener("resize", updateSwiperSize);
window.addEventListener('load', updateSwiperSize);
window.addEventListener('orientationchange', updateSwiperSize);
window.addEventListener('resize', updateSwiperSize);

function updateSwiperSize() {
	let windowWidth = window.screen.width;
	if (windowWidth <= 500) {
		myTeamSwiper(1);
	} else if (windowWidth > 500 && windowWidth <= 769) {
		myTeamSwiper(2);
	} else {
		myTeamSwiper(3);
	}
}

function myTeamSwiper(slidesPerView) {
	var swiper = new Swiper('.about-team .swiper', {
		slidesPerView: slidesPerView,
		spaceBetween: 30,
		slidesPerGroup: slidesPerView,
		loop: true,
		loopFillGroupWithBlank: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
}

// Smooth Scrolling
// This code is jQuery so use the minified CDN in the html code
$(
	'#home-header .main-menu a, #home-header .menu-wrap .menu a, #home-showcase .indicator a, #home-showcase .buttons a, #home-main-footer .navigation a, #showcase a'
).on('click', function (event) {
	if (this.hash !== '') {
		event.preventDefault();

		const hash = this.hash;

		$('html, body').animate(
			{
				scrollTop: $(hash).offset().top - 10,
			},
			800
		);
	}
});

// Advice user on landscape orientation
function orientationAdvisor() {
	if (window.innerWidth > window.innerHeight) {
		// > Using media queries to style header on smartphones
		var x = window.matchMedia('(max-height: 500px)');
		myFunction(x); // Call listener function at run time
		x.addListener(myFunction); // Attach listener function on state changes
		function myFunction(x) {
			if (x.matches) {
				document.querySelector('body .alert-div').style.display = 'block';
			} else {
				document.querySelector('body .alert-div').style.display = 'none';
			}
		}
	}
}

$('.testimonial-carousel').owlCarousel({
	autoplay: true,
	dots: true,
	loop: true,
	responsive: {
		0: {
			items: 1,
		},
		768: {
			items: 1,
		},
		900: {
			items: 1,
		},
	},
});
