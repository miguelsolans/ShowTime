const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const path       = require('path');


app.use(bodyParser.urlencoded({
    extended: true
}));

// To read it in JSON
app.use(bodyParser.json());


// Tell node where Public Files are located
// app.use(express.static(path.join(__dirname, '../public')));
app.use('/', express.static(path.join(__dirname, '../app/public')));

// Setup EJS View Engine
app.set('view engine', 'ejs');
app.set('views', './app/views');

/**
 * API Routes
 */
const UserAPI  = require('../app/routes/api/user');
const BandAPI = require('../app/routes/api/band');
const GenreAPI = require('../app/routes/api/genre');
const ConcertAPI = require('../app/routes/api/concert');
const CountryAPI = require('../app/routes/api/country');

app.use('/api/user', UserAPI);
app.use('/api/band', BandAPI);
app.use('/api/genre', GenreAPI);
app.use('/api/concert', ConcertAPI);
app.use('/api/country', CountryAPI);

/**
 * Web Pages Routes
 */
const HomeRoute = require('../app/routes/pages/index');
app.use('/', HomeRoute);

// catch 404 and forward to error handler
// app.use((req, res, next) => {
//     next(createError(404));
// });

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.jsonp({title: "Error!", message: err.message});
});



module.exports = app;