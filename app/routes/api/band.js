const express = require('express');
const app = express.Router();

const Band = require('../../controllers/bands');

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

module.exports = app;