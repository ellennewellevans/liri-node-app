require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var request = require('request');
var fs = require('fs');
var Spotify = require('node-spotify-api');
var moment = require('moment');
    moment().format();
var command = process.argv[2];
var input = process.argv[3];

if (userCommandChoice === "concert-this") {
    console.log ("worked");
} else if (inserCommandChoice === "spotify-this-song") {
    console.log ("worked");
} else if (inserCommandChoice === "movie-this") {
    console.log ("worked");
} else if (inserCommandChoice === "do-what-it-says") {
    console.log ("worked");
}

//    * `concert-this`
https://rest.bandsintown.com/artists/adel/events?app_id=codingbootcamp#
function concertIt(bandSearch) {

    // Then run a request to the OMDB API with the movie specified
    var queryUrl = "https://rest.bandsintown.com/artists/" + bandSearch + "/events?app_id=codingbootcamp#";
    console.log(queryUrl);

    request(queryUrl, function (error, response, body) {

        // If the request is successful
        if (!error && response.statusCode === 200) {

            var concertData = JSON.parse(body);
            var momentDT = moment().format('L');

            console.log("===============================");
            // * Name of the venue
            console.log("Venue Name : " + concertData[0].venue.name +
                // * Venue location
                "\nVenue Location: " + concertData[0].venue.city + "," + concertData[0].venue.country +
                //  * Date of the Event (use moment to format this as "MM/DD/YYYY")
                "\nDate of the Event: " + momentDT +
                "\n===============================");
            
        };
    });
}
//     * `spotify-this-song`
function spotifyIt(musicSearch) {

    //  * If no song is provided then your program will default to "The Sign" by Ace of Base.
    if (musicSearch === undefined || null) {
        musicSearch = "The Sign Ace of Base";
    }

    spotify.search({ type: 'track', query: musicSearch }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
                    
        else {
            for (i = 0; i < data.tracks.items.length && i < 5; i++){
            
                var musicQuery = data.tracks.items[i];
                 // Artist(s)
                console.log("Artist: " + musicQuery.artists[0].name +
                // The song's name
                "\nSong Name: " + musicQuery.name +
                // A link of the song from Spotify
                "\nLink to Song: " + musicQuery.preview_url +
                // The album that it is from
                "\nAlbum Name: " + musicQuery.album.name +
                "\n===============================");
            }
        };  
    });
}
    // * `movie-this`
function movieIt(movieSearch) {
 
    // * If the user doesn't type a movie in, the program will output data for the movie 'Mr.Nobody.'
     if (movieSearch === undefined || null) {
            movieSearch = "Mr.Nobody";
        }

    // Then run a request to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + movieSearch + "&y=&plot=short&apikey=e8cc34df";

    // This line is just to help us debug against the actual URL.
    console.log(queryUrl);

    request(queryUrl, function (error, response, body) { 
        
    // If the request is successful
       if (!error && response.statusCode === 200) {      
           // JSON.parse for legibility
            var movieData = JSON.parse(body);
                                   
            // for (i = 0; i < movieData.length && i < 5; i++) {
                console.log("===============================");
            // * Title of the movie.              
                console.log("Movie Title: " + movieData.Title +
            // * Year the movie came out.
                "\nYear: " + movieData.released +
            // * IMDB Rating of the movie.
                "\nIMDB Rating: " + movieData.imdbRating +
            // * Rotten Tomatoes Rating of the movie.
                "\nRotten Tomatoes Rating: " + movieData.Ratings[1].Value +
            // * Country where the movie was produced.
                "\nCountry: " + movieData.Country +
            // * Language of the movie.
                "\nLanguage: " + movieData.Language +
            // * Plot of the movie.
                "\nPlot: " + movieData.Plot +
            // * Actors in the movie.
                "\nActors: " + movieData.Actors +
                "\n===============================");             
            // };
        };
    }); 
}

var ask = function (commands, funData){
    switch(commands) {
        case "concert-this":
            concertIt(funData);
            break;  
        case 'spotify-this-song':
            spotifyIt(funData); 
            break;
        case "movie-this" :
            movieIt(funData);
            break;  
        case 'do-what-it-says':
            doWhatItSays(); 
            break;
        default:
        console.log("Invalid command. Please try again");
    }
};

//Do what it says reads text from random.txt file, command is ran
var doWhatItSays = function() {
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) throw err;
            var randomText = data.split(",");
        
        if (randomText.length == 2) {
            ask(randomText[0], randomText[1]);
        }
        else if (randomText.length == 1) {
            ask(randomText[0]);
        }
    });
}
// asigns args to ask for switch case
ask (command, input);