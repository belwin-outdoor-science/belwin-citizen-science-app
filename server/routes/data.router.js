var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');

//each query gets the column names from the database.
//because there are only five sets of questions between the 10 organisms, only 5 queries are
// necessary 
router.get('/bur_oak', function (req, res) { // GET for staff dashboard to staff data view
    // Add a SELECT query
    pool.connect(function (err, client, done) {
        if (err) {
            // when connecting to database failed
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            // when connecting to database worked!
            client.query('SELECT * FROM belwin.INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = N\'bur_oak\';', function (errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    console.log('Error making database query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    // console.log('result.rows is: ', result.rows);
                    res.send(result.rows);
                }
            });
        }
    });
});

router.get('/common_milkweed', function (req, res) { // GET for staff dashboard to staff data view
    // Add a SELECT query

    pool.connect(function (err, client, done) {
        if (err) {
            // when connecting to database failed
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            // when connecting to database worked!
            client.query('SELECT * FROM belwin.INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = N\'common_milkweed\';', function (errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    console.log('Error making database query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    // console.log('result.rows is: ', result.rows);
                    res.send(result.rows);
                }
            });
        }
    });
});

router.get('/common_buckthorn', function (req, res) { // GET for staff dashboard to staff data view
    // Add a SELECT query

    pool.connect(function (err, client, done) {
        if (err) {
            // when connecting to database failed
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            // when connecting to database worked!
            client.query('SELECT * FROM belwin.INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = N\'common_buckthorn\';', function (errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    console.log('Error making database query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    // console.log('result.rows is: ', result.rows);
                    res.send(result.rows);
                }
            });
        }
    });
});

router.get('/ground_squirrel', function (req, res) { // GET for staff dashboard to staff data view
    // Add a SELECT query

    pool.connect(function (err, client, done) {
        if (err) {
            // when connecting to database failed
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            // when connecting to database worked!
            client.query('SELECT * FROM belwin.INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = N\'ground_squirrel\';', function (errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    console.log('Error making database query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    // console.log('result.rows is: ', result.rows);
                    res.send(result.rows);
                }
            });
        }
    });
});

router.get('/eastern_bluebird', function (req, res) { // GET for staff dashboard to staff data view
    // Add a SELECT query

    pool.connect(function (err, client, done) {
        if (err) {
            // when connecting to database failed
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            // when connecting to database worked!
            client.query('SELECT * FROM belwin.INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = N\'eastern_bluebird\';', function (errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    console.log('Error making database query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    // console.log('result.rows is: ', result.rows);
                    res.send(result.rows);
                }
            });
        }
    });
});

router.get('/ruby_throated_hummingbird', function (req, res) { // GET for staff dashboard to staff data view
    // Add a SELECT query

    pool.connect(function (err, client, done) {
        if (err) {
            // when connecting to database failed
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            // when connecting to database worked!
            client.query('SELECT * FROM belwin.INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = N\'ruby_throated_hummingbird\';', function (errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    console.log('Error making database query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    // console.log('result.rows is: ', result.rows);
                    res.send(result.rows);
                }
            });
        }
    });
});

module.exports = router;