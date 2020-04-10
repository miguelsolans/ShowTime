/**
 * TODO: This is temporary while Vue App isn't ready
 */

const express = require('express');
const app = express.Router();
const axios = require('axios');

app.get(['/', '/home'], (req, res) => {

    res.render('main');
});

app.get('/list-concerts', (req, res) => {

    axios.get(`${process.env.APP_URL}/api/concert` )
        .then(response => {
            console.log(response.data);

            res.render('list-concerts', { concerts: response.data });

        })
        .catch(err => res.jsonp(err));

});

app.get('/list-bands', (req, res) => {
    axios.get(`${process.env.APP_URL}/api/band`)
        .then(response => {
            res.render('list-bands', { bands: response.data })
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

        res.render('new-band', { genres: genres, countries: countries});
        // use/access the results
    })).catch(errors => {
        // react on errors.
        res.jsonp(errors);
    });
});

app.get('/new-concert', (req, res) => {
    res.send("New Concert");
});

app.get('/new-place', (req, res) => {
    res.send('New Place');
});

app.get('/spotify', (req, res) => {

    axios.get(`${process.env.APP_URL}/api/band/without-spotify?limit=1`)
        .then(response => {

            let artistData = response.data;

            axios.get(`${process.env.APP_URL}/api/band/spotify/${artistData[0][0].bandName}`)
                .then(result => {
                    let spotifyData = result.data;


                    res.render('spotify', { artist: artistData[0][0].bandName, spotifyData: spotifyData.artists.items });

                })
                .catch(err => res.jsonp(err));
        })
        .catch(err => res.jsonp(err));
});


app.get('/search/band', (req, res) => {


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