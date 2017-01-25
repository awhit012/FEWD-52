// When the user submits the form
$('form').on('submit', function (e) {

	// Prevent the page from refreshing (will cover in future lesson)
	e.preventDefault();


	// CHALLENGE #1 - Form Validation

	// 1) Get the value from the #authorSelect field and save in variable author
		// Use console.log to log the value of author to the console.
		// Select an author, hit the submit button, and look at the console to see what value the author variable holds
		// Hint: to log to console: console.log('The author is' + author);

	// 2) Get the value from the #nounInput field and save in variable noun
		// Use console.log to log the value of noun to the console.
		// Enter a noun, hit the submit button, and look at the console to see what value the noun variable holds
		// Hint: to log to console: console.log('The noun is' + noun);

	// 3) Get the value from the #verbInput field and save in variable verb
		// Use console.log to log the value of verb to the console.
		// Enter a verb, hit the submit button, and look at the console to see what value the verb variable holds


	// Think about the above!!! Now we can access the values the user entered (author, noun, verb) by using these variable names.
	// We also have console.log statements that will tell us what value they hold.
	// If you're ever unsure, you can check the console after filling out the form and hitting submit.
	

	// 4) Take a look at the .error class in the CSS to see what styles it houses

	// 5) IF author is equal to an empty string (""), add the .error class to #authorSelect
		// Otherwise remove the error class.
		// HINT: You'll need to use a conditional statement here.


	// 6) IF noun.length is equal to an empty string (""), add the .error class to #nounInput
		// Otherwise remove the error class.

	// 7) IF verb.length is equal to an empty string (""), add the .error class to #verbInput
		// Otherwise remove the error class.


	// CHALLENGE #2 - Mad Libs

	// 1) Make sure that any elements with a class .quote are hidden
		// Explanation: This code will hide any quotes that might have been previously displayed
		// if the user already made a mad lib.

	// 2) Fade in the quote by the selected author
		// (HINT: You'll want to use a conditional statement here. 
		// Take a look in the HTML to see what classes/IDs you have available to select those quotes)


	// 3) Look in index.html at the quotes. Find the span where the noun should be replaced with the user's noun. 
		// Update the value of that span to the text stored in the noun variable.
		// Hint: You can use either the text() or html() method.


	// 3) Look in index.html at the quotes. Find the span where the verb should be replaced with the user's verb. 
		// Update the value of that span to the text stored in the verb variable.
		// Hint: You can use either the text() or html() method.


	// BONUS CHALLENGE:
		// Only perform the actions in Challenge #2 if the user has filled out all fields in the form.
		// Hint you'll need to add a conditional statement around some of the above statements.


// DO NOT DELETE!!
});
// DO NOT ADD ANY CODE BELOW THIS!!