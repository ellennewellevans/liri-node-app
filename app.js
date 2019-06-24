
   * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

   search: function({ type: 'artist OR album OR track', query: 'My search query', limit: 20 }, callback);  
   
   var Spotify = require('node-spotify-api');
  
     var spotify = new Spotify({
       id: <your spotify client id>,
       secret: <your spotify client secret>
     });
      
     spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
       if (err) {
         return console.log('Error occurred: ' + err);
       }
      
     console.log(data); 
     });
 
    * [Axios](https://www.npmjs.com/package/axios)
 
    const axios = require('axios');
 
    axios.get('/user', {
     params: {
       ID: 12345
     }
   })
   .then(function (response) {
     console.log(response);
   })
   .catch(function (error) {
     console.log(error);
   })
   .then(function () {
     // always executed
   });  
 
      * You'll use Axios to grab data from the [OMDB API](http://www.omdbapi.com) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)
 
    * [Moment](https://www.npmjs.com/package/moment)
 
    npm install moment
 
    var moment = require('moment');
     moment().format();
 
    * [DotEnv](https://www.npmjs.com/package/dotenv)
 
    npm install dotenv
 
    const db = require('db')
   db.connect({
   host: process.env.DB_HOST,
   username: process.env.DB_USER,
   password: process.env.DB_PASS
 })