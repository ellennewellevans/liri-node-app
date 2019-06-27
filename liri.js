// Set up the config because that's how this whole thing works
require("dotenv").config();

// var what?! consts are where it's at
const axios = require("axios");
const fs = require("fs");
const keys = require("./keys.js");
const moment = require("moment");
const Spotify = require("node-spotify-api");

const spotify = new Spotify(keys.spotify);

// ok, let's set up the inputs by the user
const command = process.argv[2];
const input = process.argv.slice(3).join("+");

// let's process the input from the user
const processCommand = function (command, input) {
    switch (command) {
    //if command is "concert-this"
        case "concert-this":
            //magic word
            axios
                //search for the band (input) events at bandsintown
                .get(
                    "https://rest.bandsintown.com/artists/" +
                    input +
                    "/events?app_id=codingbootcamp"
                )
                //  pull back the response from bandsintown
                .then(function (response) {
                    // build an array of the data
                    const eventArray = response.data;
                    eventArray.forEach(function(response) {
                        //use moment to format the date
                        const formattedDate = moment(response.datetime).format(
                            "MM/DD/YYYY"
                        );
                        //console log the info (yay template literals!)
                        console.log(`${response.venue.name}
                        ${response.venue.city}, ${response.venue.region}
                        ${formattedDate}
                        __________________________________________________`);
                            //and the great "what if there's no response"
                            err => {
                                if (err) console.log(`Could not log due to ${err.message}`);
                            }
                    });
                });
            break;
    //if command is "spotify-this-song"           
        case "spotify-this-song":
            if (input === "") {
                //Setting up Ace of Base as the Default
                input = "The Sign Ace of Base";
            }
            //setting up search for spotify and limiting to 1 result
            spotify.search({
                    type: "track",
                    query: `'${input}'`,
                    limit: 1
                },
                //"what if"
                function (err, data) {
                    if (err) {
                        return console.log("Error occurred: " + err);
                    }
                    //log artist info
                    console.log(`Artist: ${data.tracks.items[0].album.artists[0].name}
                                Song: ${data.tracks.items[0].name}`);
                    //log preview url
                    const previewURL = data.tracks.items[0].preview_url;
                    console.log(
                        previewURL === null ?
                        "Preview not available for this song" :
                        `Preview: ${previewURL}`);
                    //log album
                    console.log(`Album: ${data.tracks.items[0].album.name}`);
                }
            );
            break;
    //if command is "movie-this"
        case "movie-this":
            if (input === "") {
                //set default to Mr. Nobody
                input = "Mr Nobody";
            }
            //Magic words
            axios
                //query OMDB with my API key
                .get(
                    "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=e8cc34df"
                )
                //Print our response data (using ALL the template literals)
                .then(function (response) {
                    console.log(`Title: ${response.data.Title}
                    Release Year: ${response.data.Year}
                    IMDB Rating: ${response.data.imdbRating}
                    Rotten Tomatoes Rating: ${response.data.Ratings[1].Value}
                    Country: ${response.data.Country}
                    Language: ${response.data.Language}
                    Plot: ${response.data.Plot}
                    Actors: ${response.data.Actors}`);
                });
            break;
    //if command is "do-what-it-says"
        case "do-what-it-says":
            fs.readFile("random.txt", "utf8", function (err, data) {
                if (err) throw err;
                // process the text in the file, comma seperated
                var randomText = data.split(",");
                // if it's a file with command, input
                if (randomText.length == 2) {
                    processCommand(randomText[0], randomText[1]);
                }
                // if it's a file with command only ("like do-what-it-says")
                else if (randomText.length == 1) {
                    processCommand(randomText[0]);
                }
            });
    }
};

processCommand(command, input);