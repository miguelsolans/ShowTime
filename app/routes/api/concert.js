const express = require('express');
const app = express.Router();

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


module.exports = app;