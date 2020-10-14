const express = require('express');
const app = express.Router();
const Place = require('../../controllers/place');
const Concerts = require('../../controllers/concerts');

app.get('/', (req, res) => {
    Concerts.list()
        .then(data => res.jsonp(data))
        .catch(err => res.jsonp(err));
});

app.get('/drilldown/:query', (req, res) => {
    let query = req.params.query;
    console.log(query);

    if(query === 'genre') {
        Concerts.countByGenre()
            .then(data => res.jsonp(data))
            .catch(err => res.jsonp(err));


    } else {

        res.jsonp({title: "Error!", message: "Invalid query parameter. Check API documentation for more info"});
    }
});

app.post('/:id', async (req, res) => {
    const id = req.params.id;

    let p = await Place.getPlaceById(id);
    // Fetch Vanue ...

    res.json(p);
    // Band Exists

    // Insert
});

module.exports = app;