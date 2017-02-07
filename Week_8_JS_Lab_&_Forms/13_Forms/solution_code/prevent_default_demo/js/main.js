$('form').submit(function(event) {
  event.preventDefault();
	var name = $('#name').val();
	$("<h2>" + name + "</h2>").appendTo('#form-col');
	$('#name').val("")
});
