var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');

router.get('/', function (req, res) { // GET for staff dashboard to staff data view
    // Add a SELECT query
    if (req.isAuthenticated()) {
        var userInfo = {
            username: req.user.username
        };
        pool.connect(function (err, client, done) {
            if (err) {
                // when connecting to database failed
                console.log('Error connecting to database', err);
                res.sendStatus(500);
            } else {
                // when connecting to database worked!
                client.query('SELECT * FROM users;', function (errorMakingQuery, result) {
                    done();
                    if (errorMakingQuery) {
                        console.log('Error making database query', errorMakingQuery);
                        res.sendStatus(500);
                    } else {
                        console.log('result.rows is: ', result.rows);
                        res.send(result.rows);
                    }
                });
            }
        });
    }
});

router.get('/boData', function (req, res) { // GET for staff dashboard to staff data view
    // Add a SELECT query
    if (req.isAuthenticated()) {
        var userInfo = {
            username: req.user.username
        };
        pool.connect(function (err, client, done) {
            if (err) {
                // when connecting to database failed
                console.log('Error connecting to database', err);
                res.sendStatus(500);
            } else {
                // when connecting to database worked!
                client.query('SELECT * FROM bur_oak;', function (errorMakingQuery, result) {
                    done();
                    if (errorMakingQuery) {
                        console.log('Error making database query', errorMakingQuery);
                        res.sendStatus(500);
                    } else {
                        console.log('result.rows is: ', result.rows);
                        res.send(result.rows);
                    }
                });
            }
        });
    }
});

module.exports = router;
