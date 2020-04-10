const express = require('express');
const app = express();
const Genres = require('../../models/genre');

app.get('/', (req, res) => {
    console.log("Genre GET / ");

    Genres.findAll()
        .then(data => res.jsonp(data))
        .catch(err => res.jsonp(err));

});

app.post('/', (req, res) => {
    console.log("Genre POST / ");

    console.log(req.body);
});

module.exports = app;