require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var command = process.argv[2]
var input = process.argv[3];
var moment = require('moment');
moment().format();

/* `node liri.js concert-this <artist/band name here>`

   * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:

     * Name of the venue

     * Venue location

     * Date of the Event (use moment to format this as "MM/DD/YYYY")
*/

//    * `concert-this`
function concertIt(bandQuery) {
    var queryUrl = "https://rest.bandsintown.com/artists/" + bandQuery + "/events?app_id=codingbootcamp#";
    console.log(queryUrl);
    request(queryUrl, function(error, response, body) {
        if (!error && response.statusCode === 200) {
        var concertData = JSON.parse(body);
        var momentDT = moment().format('L');
        console.log("Venue Name : " + concertData[0].venue.name +
                    "\nVenue Location: " + concertData[0].venue.city + 
                    "," + concertData[0].venue.country + "\nDate of the Event: "
                     + momentDT);
            
        };
    });
};

var ask = function (commands, funData){
    switch(commands) {
        case "concert-this":
            concertIt(funData);
            break;
        case "movie-this" :
            movieIt(funData);
            break;    
        case 'spotify-this-song':
            spotifyIt(funData); 
            break;
        case 'do-what-it-says':
            doWhatItSays(); 
            break;
        default:
        console.log("Invalid command. Please try again");
    }
};

ask (command, input);