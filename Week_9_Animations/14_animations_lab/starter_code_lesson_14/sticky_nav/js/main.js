
// Step 1: Google .offset().top
var stickyNavOffset = $('.sticky-nav-wrapper').offset().top;
var flyBugOffset = $('#flybug').offset().top;
var butterflyOffset = $('#butterfly').offset().top;

$(window).on('scroll', function () {
	// Step 2: Google $(window).scrollTop();
	var distanceScrolled = $(window).scrollTop();

	console.log('The distance from the top of the page to the nav is: ' + stickyNavOffset);
	console.log('The distance scrolled is: ' + distanceScrolled);

	// Step 3: Write Rest of JS here

});