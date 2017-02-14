var base_url = "http://api.giphy.com/v1/gifs/search?q=";
var api_key = "&api_key=dc6zaTOxFJmzC";

$('form').submit(function(event) {
	event.preventDefault();
	var search_string = $('input').val();
	getGifs(search_string);
});

function getGifs(search_string) {
	$.get(base_url + search_string + api_key, function(response){
		var gif_url = response.data[0].images.original.url;
		$('img').attr('src', gif_url);
		putResults(response.data)
	});
}

function putResults(resultsArray) {
	resultsArray.forEach(function(element) {
		console.log(element);
	})
}

// BASICS BELOW: TWO WAYS TO DO THE SAME THING

// var url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";
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
