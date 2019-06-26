<h1>#liri-node-app</h1>
https://ellennewellevans.github.io/liri-node-app/

Screenshots are located in repo https://github.com/ellennewellevans/liri-node-app/screenshots

This app lets you search Spotify for songs, Bands in Town for concerts, and OMBD for movies!

<h2>Directions</h2>
Use node to run this program. Use "node liri.js" then run one of the following comands, then add search text:
<ul>
<li>concert-this</li>
<li>spotify-this-song</li>
<li>movie-this</li>
<li>do-what-it-says</li>
</ul>
When running a command follow it by desired text/search.
Ex: node liri.js movie-this drive

<h3>When concert-this command is used it will return the following:</h3>
<ul>
<li>Name of the venue</li>
<li>Venue location</li>
<li>Date of the Event</li>
</ul>


<h3>When spotify-this-song command is used it will return the following:</h3>
<ul>
<li>Artist(s)</li>
<li>The song's name</li>
<li>A preview link of the song from Spotify</li>
<li>The album that the song is from</li>
</ul>


If no song is provided then your program will default to "The Sign" by Ace of Base.

<h3>When movie-this command is used it will return the following:</h3>
<ul>
<li>Title of the movie.</li>
<li>Year the movie came out.</li>
<li>IMDB Rating of the movie.</li>
<li>Rotten Tomatoes Rating of the movie.</li>
<li>Country where the movie was produced.</li>
<li>Language of the movie.</li>
<li>Plot of the movie.</li>
<li>Actors in the movie.</li>
</ul>


If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody."
 
<h3>When do-what-it-says command is run:</h3>

This will read a file called random.txt which can store commands and inputs to run teh app.

<h2>Technologies Used</h2>
<ul>
<li>JavaScript</li>
<li>Node.js</li>
<li>Spotify API</li>
<li>Bands in Town API</li>
<li>OMDB API</li>
</ul>
