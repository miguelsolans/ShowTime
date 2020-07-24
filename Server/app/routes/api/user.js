const express = require('express');
const app = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../controllers/users');

app.get('/', (req, res) => {

    console.log("USER GET /");

    User.findOne({ username: req.body.username })
        .then(data => {
            if(data === null ) res.jsonp({title: "Error!", message: "Username doesn't exist!"});

            res.jsonp(data);
        })
        .catch(err => res.jsonp(err));
});

app.post('/login', (req, res) => {

    console.log("Login user");

    User.findOne({ username: req.body.username })
        .then(data => {

            bcrypt.compare(req.body.password, data.usrPassword, (err, res) => {
                if( err ) res.jsonp(err);

                console.log(res ? "User password matches" : "Password does not match");
            })

        })
        .catch(err => res.jsonp(err));
});

app.post('/register', async (req, res) => {
    console.log("Add new user");

    User.findOne({username: req.body.username})
        .then(data => {
            if(data !== null) {
                res.jsonp({title: "Error!", message: "User already exists!"})
            } else {

                bcrypt.genSalt(10, (err, salt) => {

                    if(err) res.jsonp(err);

                    bcrypt.hash(req.body.password, salt, function(err, hash) {
                        if( err ) res.jsonp(err);

                        let newUser = {
                            username: req.body.username,
                            email: req.body.email,
                            usrPassword: hash
                        };

                        User.create(newUser)
                            .then(result => res.jsonp(result))
                            .catch(err => res.jsonp(err));
                    });
                });
            }
        })
        .catch(err => res.jsonp(err));
});


module.exports = app;