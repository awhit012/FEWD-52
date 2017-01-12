var keypress = require('keypress');
// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

var names = ['George', 'Anna', 'Ashley', 'David', 'Vitor', 'Jefferey', 'Sofia', 'Drew', 'Yara'];

var questions = [
  "List some HTML document structure tags",
  "List some HTML text formatting tags",
  "What are two things that should always go in img tags?",
  "List 3 HTML5 elements and what they are for",
  "What is a good reason to use an ID instead of a class",
  "List 3 ways to make text bold",
  "Describe the Cascade in CSS",
  "Describe CSS inheritance",
  "Draw the box model",
  "Name 3 valid CSS values for the display property",
  "What HTML5 element is most likely to have clear:both;",
  "Tell us 3 things about Bootstrap",
  "Describe class based CSS?",
  "What is a responsive grid system?",
  "What is a CDN? What does it stand for? What are two examples of something we would use a CDN for?",
  "What is a web font? What is its purpose?",
  "What is a font icon and what is its purpose?",
  "What is a breakpoint?",
  "What is a media query? Max-width is one kind. Name 2 more.",
  "What is bash? Name one bash command.",
  "What is an absolute URL? Why shouldn't we use them in our projects?",
  "Describe the steps to make two collumns in html and CSS without a grid system.",
  "What are three things you can do if you don't know how to do something?",
  "When is it bad to copy and paste code?"
];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
  if ((key && key.name == 'q') || questions.length === 0) {
    process.exit()
  }
  var name = names[getRandomInt(0, names.length -1)];
  var question_index = getRandomInt(0, questions.length -1)
  var question = questions[question_index];
  questions.splice(question_index, 1)

  console.log(name + ':', question, '\n');
});

process.stdin.setRawMode(true);
process.stdin.resume();
