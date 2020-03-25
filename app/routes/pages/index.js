/**
 * TODO: This is temporary while Vue App isn't ready
 */

const express = require('express');
const app = express.Router();
const axios = require('axios');

app.get(['/', '/home'], (req, res) => {

    res.render('main');
});

app.get('/list', (req, res) => {

    axios.get(`${process.env.APP_URL}/api/concert` )
        .then(response => {
            console.log(response.data);

            res.render('list', { concerts: response.data });

        })
        .catch(err => res.jsonp(err));

});

app.get('/new-band', (req, res) => {
    const genresRequest = axios.get(`${process.env.APP_URL}/api/genre`);
    const countriesRequest = axios.get(`${process.env.APP_URL}/api/country`);

    axios.all([genresRequest, countriesRequest]).then(axios.spread((...responses) => {
        const genres = responses[0].data;
        const countries = responses[1].data;

        console.log(genres);

        res.render('new', { genres: genres, countries: countries});
        // use/access the results
    })).catch(errors => {
        // react on errors.
        res.jsonp(errors);
    });
});

// app.get('/new', (req, res) => {
//     const genresRequest = axios.get(`${process.env.APP_URL}/api/genre`);
//     const bandsRequest = axios.get(`${process.env.APP_URL}/api/band`);
//
//     axios.all([genresRequest, bandsRequest]).then(axios.spread((...responses) => {
//         const genres = responses[0].data;
//         const bands = responses[1].data;
//
//         console.log(genres);
//
//         res.render('new', { genres: genres, bands: bands});
//         // use/access the results
//     })).catch(errors => {
//         // react on errors.
//         res.jsonp(errors);
//     });
// });

module.exports = app;