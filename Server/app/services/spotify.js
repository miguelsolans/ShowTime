const Spotify = require('node-spotify-api');

const spotifyKeys = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET,
};

const spotify =
module.exports = new Spotify(spotifyKeys);