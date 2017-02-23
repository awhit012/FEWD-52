console.log('app.js linked', $)
// write your code here

// Step 1: write the submit event listener
//  It should prevent the default event behavior
//  grab the input
// create a li with class 'list-group-item' and concatenate the input into it
// clear the form

// Step 2:
// create a button to delete each item
// create an event listener that deletes the item from the list


// var form = document.getElementById('form')

$('#form').submit( function() {
  event.preventDefault();
  var input = $('input').val();
  var li = "<li class='list-group-item'>" + input + "<button class='btn btn-danger pull-right'>X</button></li>"
  $('ul').append(li);
})
