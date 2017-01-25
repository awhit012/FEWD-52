// Read through the following piece of code.
// What is the role of score, bonus and totalScore?
// What is if (score > 100) doing?
// Which block of code will run? The if or else statement?
// Right click in the html file and open the page in your browser.
// What is this line doing: totalScore = score + bonus;
// What are the plus signs doing here: $('#message').html("Score: " + score + ", Bonus: " + bonus + ", Total: " + totalScore);
// Try updating the code on line 11 to var score = 90;  Now which message will get added to the page? Check in your browser.


var score = 105;
var bonus = 50;
var totalScore = 0;

if (score > 100) {
	totalScore = score + bonus;
	$('#message').html("Score: " + score + ", Bonus: " + bonus + ", Total: " + totalScore);
} else {
	totalScore = score;
	$('#message').html("Score: " + score);
}


