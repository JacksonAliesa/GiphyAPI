//array of Artists for Giphy
var topics = [
	'Beyonce',
	'Jhene Aiko',
	'Snoh Aalegra',
	'Notorious B.I.G.',
	'Jay-Z',
	'The Weeknd',
	'PartyNextDoor',
	'DVSN',
	'Ella Mai',
	'H.E.R.',
	'Whitney Houston',
	'Nipsey Hussle',
	'Jeezy',
	'Meek Mill',
	'Rihanna',
	'Cardi B',
];

// Created a function that creates the buttons for my topic array
function btnFunction(response) {
	$('#buttonDisplay').empty();
	for (var i = 0; i < topics.length; i++) {
		//to create the beginning and end tag for the buttons on HTML
		var artistBtn = $('<button>');
		//add class to click button it knows to run ajax
		artistBtn.addClass('artistClass');
		//add attribute for datastate -- for animation
		// var state = $(this).attr("data-state");
		// to display the text on each button
		artistBtn.text(topics[i]);
		// Adds the buttons to the buttonDisplay div tag on HTML page
		$('#buttonDisplay').append(artistBtn);
	}
}

function giph(response) {
	//made variable for the array of artists rating
	// var ratingDiv = response.rating;
	//made another variable to display the rating in a P tag on page
	var results = response.data;
	for (var i = 0; i < results.length; i++) {
		// Creating a div for the gif Ptag and image tage to be held in
		var gifDiv = $('<div>');
		//created a ptag to hold the image tags for gif
		var ratingPtag = $('<p>');
		var rating = results[i].rating;
		ratingPtag.text('Rating: ' + rating);
		console.log(rating);

		
		// Creating an image tag
		var imgTag = $('<img>');
		// Giving the image tag an src attribute of a property pulled off the
		// added added additional atrributes to the image to later pull for them to capture the pause/animate setting
		imgTag.attr('src', results[i].images.fixed_height_still.url);
		imgTag.addClass("gif")
		imgTag.attr("data-state", "still")
		imgTag.attr("data-still", results[i].images.fixed_height_still.url)
		imgTag.attr("data-animate", results[i].images.fixed_height.url)


		// Appending the paragraph and imgTag we created to the "gifDiv" div we created
		gifDiv.append(ratingPtag);
		gifDiv.append(imgTag);

		// Prepending the gifDiv to the "#giphDisplay" div in the HTML
		$('#gifDisplay').prepend(gifDiv);
	}
}
//need this onclick function since it is dynamic
//  (NOTE: Pay attention to the unusual syntax here for the click event.
//  Because we are creating click events on "dynamic" content, we can't just use the usual "on" "click" syntax.)
$(document).on('click', '.artistClass', function() {
	//ajax function to capture the data
	console.log("Button clicked")
	// constructing a queryURL variable we will use instead of the literal string inside of the ajax method
	var title = $(this).text();
	// query url broken down with a variable that specifies what to search for when the ajax function is ran
	//added limit of 10 parameter to the end of the API key
	var queryURL =
		'https://api.giphy.com/v1/gifs/search?q=' + title + '&api_key=YSUfzDPFf4tYp4lEWxOOBMrChSYXE1p2&limit=10';

	$.ajax({
		url: queryURL,
		method: 'GET'
	}).then(function(response) {
		console.log("AJAX response")
		console.log(response);
		giph(response);
		btnFunction();
		
	});
});
btnFunction();



//This create a new button and pushes it into your topics array every time user types in the input field and clicks the "add button"//


//you would need an ID of your add button and your input field
$("#add-artist").on("click", function (event) {

    event.preventDefault();
  
    var gif = $("#userSubmit").val().trim();
  
    topics.push(gif);
  console.log(topics)
    btnFunction();
  });
/////////////////////////////////////////////

// btnFunction();
// ​$(document).on('click', '.artistClass', giph);{

// }

$(document).on("click", ".gif", function() {
	var state = $(this).attr("data-state");
	// If the clicked image's state is still, update its src attribute to what its data-animate value is.
	// Then, set the image's data-state to animate
	// Else set src to the data-still value
	if (state === "still") {
	  $(this).attr("src", $(this).attr("data-animate"));
	  $(this).attr("data-state", "animate");
	} else {
	  $(this).attr("src", $(this).attr("data-still"));
	  $(this).attr("data-state", "still");
	}


});



