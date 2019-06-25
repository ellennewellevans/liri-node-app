require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var userCommandChoice = process.argv[2];

if (userCommandChoice === "concert-this") {
    console.log ("worked");
} else if (inserCommandChoice === "spotify-this-song") {
    console.log ("worked");
} else if (inserCommandChoice === "movie-this") {
    console.log ("worked");
} else if (inserCommandChoice === "do-what-it-says") {
    console.log ("worked");
}