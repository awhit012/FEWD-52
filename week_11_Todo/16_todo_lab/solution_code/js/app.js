var $form     = $('form');
var $list     = $('.list-group');
var button = "<button type='button' style='margin-top:-7px;' class='btn btn-danger pull-right'>X</button>";

$form.submit(function(event) {
  event.preventDefault();
  var $todoItem = $('input').val();
  $('input').val("");
  $list.append("<li class='list-group-item'>" + $todoItem + button + "</li>");
  addListenerToDeleteButton();
})

function addListenerToDeleteButton() {
  var $deleteButton = $('button');
  $deleteButton.click(function() {
    $(this).parent().remove();
  })
}
