const express = require('express');
const app = express.Router();

const Country = require('../../models/country');

app.get('/', (req, res) => {
    Country.findAll()
        .then(data => res.jsonp(data))
        .catch(err => res.jsonp(err));
});

module.exports = app;