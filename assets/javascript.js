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
  "Cardi B"
];


	// constructing a queryURL variable we will use instead of the literal string inside of the ajax method
	var title = 'artists';
	// query url broken down with a variable that specifies what to search for when the ajax function is ran
	//added limit of 10 parameter to the end of the API key
	var queryURL =
		'https://api.giphy.com/v1/gifs/search?q=' + title + '&api_key=YSUfzDPFf4tYp4lEWxOOBMrChSYXE1p2&limit=10';

	//ajax function to capture the data
	$.ajax({
		url: queryURL,
		method: 'GET'
	}).then(function(response) {
		console.log(response);
		//function for the buttons to display
    btnFunction();
 

	//button display function
	function btnFunction() {
		for (var i = 0; i < topics.length; i++) {
			//made variable for the array of artists rating
			var ratingDiv = topics[i].rating;
			//made another variable to display the rating in a P tag on page
			var rating = $('<p>').text('Rating: ' + ratingDiv);
			//to create the beginning and end tag for the buttons on HTML
			var artistBtn = $('<button>');
			// to display the text on each button
			artistBtn.text(topics[i]);
		// Adds the buttons to the buttonDisplay div tag on HTML page
      $('#buttonDisplay').append(artistBtn);
      // $("#buttonDisplay").on("click", function(){
      // need to understand placement of the on-click function 
      //why are my buttons disappearing?

      // });
		}
  }
})
// });

//need to the onlick event listener for each button
//set a p tag within the div tag w/ id of giph tag to display giphs once that specific artist's button is clicked on
//set the rating to be displayed for each pic
//make the pic animated when clicked on and paused after