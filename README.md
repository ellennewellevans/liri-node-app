<h1>#liri-node-app</h1>
https://ellennewellevans.github.io/liri-node-app/

Screenshots are located in repo https://github.com/ellennewellevans/liri-node-app/screenshots

This app lets you search Spotify for songs, Bands in Town for concerts, and OMBD for movies.

<h2>Directions</h2>
Use node to run this program. Use "node liri.js" then run one of the following comands, then add search text:

concert-this
spotify-this-song
movie-this
do-what-it-says

When running a command follow it by desired text/search.
Ex: node liri.js movie-this drive

<h3>When concert-this command is used it will return the following:</h3>
Name of the venue
Venue location
Date of the Event

<h3>When spotify-this-song command is used it will return the following:</h3>
Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from

If no song is provided then your program will default to "The Sign" by Ace of Base.

<h3>When movie-this command is used it will return the following:</h3>
Title of the movie.
Year the movie came out.
IMDB Rating of the movie.
Rotten Tomatoes Rating of the movie.
Country where the movie was produced.
Language of the movie.
Plot of the movie.
Actors in the movie.

If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody."
 
<h3>When do-what-it-says command is run:</h3>

This will read a file called random.txt which can store commands and inputs to run teh app.

<h2>Technologies Used</h2>
JavaScript
Node.js
Spotify API
Bands in Town API
OMDB API
