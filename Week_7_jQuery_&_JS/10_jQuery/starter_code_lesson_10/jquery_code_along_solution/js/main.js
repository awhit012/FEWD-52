/**
* Part 1 - Together:
*/

// 1. Remove the highlight class from #box2 (use the .removeClass() method)

$('#box2').removeClass('highlight');

// 2. Select the anchor within #box3. Change the HTML to 'jQuery!'

$('#box3').html('jQuery');

/**
* Part 1 - Now you try:
*/

// 1. Add the .highlight class to #box4 (use the .addClass() method)
$('#box4').addClass('highlight');

// 2. Make the text color of the strong tag within #box2 green (use the .css() method)
// $('#box2').children('strong').css('color', 'green');
$('#box2 strong').css('color', 'green');


/**-----------------------------------------------------------------------------------------------*/


/**
*
* Part 2 - Together:
*
*/

// 1. When the anchor within #box3 is clicked
	// a) Slide toggle #box4
	// b) Fade out #box1 slowly

$('#box3').click(function() {
	$('#box4').slideToggle(3000);
	$('#box1').fadeOut('slow');
});


/**
*
* Part 2 - Now you try:
*
*/

// 1. When the h2 is clicked on
$('h2').click(function() {
	$('h2').slideUp();
	$('h1').addClass('snazzy');
});



// BONUS 
$('#box1').hover(function(){
	$('#box1').fadeOut('slow');
});

