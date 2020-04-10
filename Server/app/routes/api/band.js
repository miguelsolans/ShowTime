const express = require('express');
const app = express.Router();

const Band = require('../../controllers/bands');
const Spotify = require('../../services/spotify');

app.get('/', (req, res) => {
    Band.list()
        .then(data => res.jsonp(data))
        .catch(err => res.jsonp(err));
});

app.post('/', (req, res) => {
    const newBand = {
        bandName: req.body.bandName,
        countryCode: req.body.country,
        genreId: req.body.genreId
    };

    Band.add(newBand)
        .then(result => res.jsonp(result))
        .catch(err => res.jsonp(err));
});

app.get('/without-spotify', (req, res) => {
    let limit = req.query.limit || 1;

    Band.withoutSpotify(limit)
        .then(data => {
            res.jsonp(data);
        })
        .catch(err => res.jsonp(err));
});

app.get('/spotify/:artist', (req, res) => {
    const artist = req.params.artist;

    Spotify.search({ type: 'artist', query: artist }, (err, data) => {
        if(err) res.jsonp(err);

        res.jsonp(data);
    })
});


module.exports = app;