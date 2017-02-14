var base_url = "http://api.giphy.com/v1/gifs/search?q=";
var api_key = "&api_key=dc6zaTOxFJmzC";

$('form').submit(function(event) {
	event.preventDefault();
	var search_string = $('input').val();
	clearImgs();
	getMovie(search_string);
	getGifs(search_string);
});

function clearImgs() {
	$('#gif').attr('src', '');
	$('#movie').attr('src', '');
}


function getGifs(search_string) {
	$.get(base_url + search_string + api_key, function(response){
		var gif_url = response.data[0].images.original.url;
		$('#gif').attr('src', gif_url);
	});
}

// BASICS BELOW: TWO WAYS TO DO THE SAME THING

// Short Hand .get
// $.get(url, function(response) {
// 	console.log(response);
// })

// Long Hand .ajax
// $.ajax({
// 	method: 'GET',
// 	url: url,
// 	success: function(response) {
// 		console.log(response);
// 	}
// });



var omdb_url = "http://www.omdbapi.com/?t=";


function getMovie(search_string) {
	$.get(omdb_url + search_string, function(response){
		var poster_url = response.Poster;
		$('#movie').attr('src', poster_url);
	});
}