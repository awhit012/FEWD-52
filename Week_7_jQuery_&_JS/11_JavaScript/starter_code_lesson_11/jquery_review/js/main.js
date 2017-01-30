// 1) Follow step 1 in style.css
// 2) When the user clicks on the button
	// a) TOGGLE the class .highlight to the element with the class .square

// $('button').click(function() {
// 	$('.square').toggleClass('highlight');
// });

var button = $('button');
var square = $('square');

button.click(toggleHighlight);

var toggleHighlight = function() {
	square.toggleClass('highlight');
};