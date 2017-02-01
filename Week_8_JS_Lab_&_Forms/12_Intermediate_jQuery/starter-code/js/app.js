// $('#addHome').removeClass('btn-danger').addClass('btn-success');
// $('h1').addClass('text-center');

// var newLink = $('<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com<a>' );
// newLink.appendTo('body');

// $('#zillowLink').attr('target','_blank');
// var href = $('#zillowLink').attr("href");

// console.log(href);

// $('tbody').on('click', 'tr', function() {
// 	console.log(this);
// });


var newHomes = [
    {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
    {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
    {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
    {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
];


// FOR OBJECT IN NEW HOMES ARRAY
// 	   CREATE NEW ELEMENT CONCATONATING HTML STRINGS WITH THE DATA
// 		... '<tr><td>' + object.address + "</td><td>" + ...
// 		APPEND ELEMENT TO TBODY

for(var i = 0; i < newHomes.length; i++) {
	console.log(i);
	var $newRow = $('<tr><td>' + newHomes[i].address + '</td><td>' + newHomes[i].sf + '</td><td>' + newHomes[i].bedrooms + '</td><td>'+ newHomes[i].baths +'</td><td>' + newHomes[i].price + '</td><td><button class="btn btn-xs btn-danger">Remove</button></td></tr>');
	$newRow.appendTo('tbody');
};


// STEP 1: element using $('some html...')
// STEP 2: save that element in a variable
// STEP 3: append to DOM 
// STEP 4: dynamically create a td element using the first element in Homes array
// STEP 5: create the loop



