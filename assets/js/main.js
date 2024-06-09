/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

	// Add mobile class.
	// if (browser.mobile)
	// 		$body.addClass('is-touch');
	if (browser.mobile) {
		$body.addClass('is-touch');
		$window.on('load', function() {
			document.querySelector('#header').style.setProperty('--header-height', `${window.innerHeight}px`)
		})
	}

	// Set Header Height
	// const mobileDocumentHeight = () => {
	// 	const header = document.querySelector('#header');
	// 	if (header && browser.mobile) {
	// 	  header.style.setProperty('--header-height', `${window.innerHeight}px`);
	// 	}
	//   };
	//   window.addEventListener('load', mobileDocumentHeight);
	//   mobileDocumentHeight();
	  
	  const documentHeight = () => {
		const header = document.querySelector('#header');
		if (header && !browser.mobile) {
		  header.style.setProperty('--header-height', `${window.innerHeight}px`);
		}
	  };
		
		window.addEventListener('resize', documentHeight);
		documentHeight();
})(jQuery);