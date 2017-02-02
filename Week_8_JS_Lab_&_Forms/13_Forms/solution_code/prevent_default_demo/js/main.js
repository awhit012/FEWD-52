$('form').submit(function(event) {
  	event.preventDefault();
	var name = $('#name').val();
	console.log(name);
	$("<h2>" + name + "</h2>").appendTo('#form-col');
	$('#name').val("")
});
