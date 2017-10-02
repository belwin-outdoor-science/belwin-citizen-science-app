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

router.get('/bur', function (req, res) { 
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
                client.query('SELECT * FROM bur_oak WHERE recorded >= CURRENT_DATE;', function (errorMakingQuery, result) {
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

router.get('/buckthorn', function (req, res) { 
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
                client.query('SELECT * FROM common_buckthorn WHERE recorded >= CURRENT_DATE;', function (errorMakingQuery, result) {
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

router.get('/milkweed', function (req, res) { 
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
                client.query('SELECT * FROM common_milkweed WHERE recorded >= CURRENT_DATE;', function (errorMakingQuery, result) {
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

router.get('/dark', function (req, res) { 
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
                client.query('SELECT * FROM dark_eyed_junco WHERE recorded >= CURRENT_DATE;', function (errorMakingQuery, result) {
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

router.get('/eastern', function (req, res) { 
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
                client.query('SELECT * FROM eastern_bluebird WHERE recorded >= CURRENT_DATE;', function (errorMakingQuery, result) {
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

router.get('/ground', function (req, res) { 
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
                client.query('SELECT * FROM ground_squirrel WHERE recorded >= CURRENT_DATE;', function (errorMakingQuery, result) {
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

router.get('/northern', function (req, res) { 
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
                client.query('SELECT * FROM northern_red_oak WHERE recorded >= CURRENT_DATE;', function (errorMakingQuery, result) {
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

router.get('/paper', function (req, res) { 
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
                client.query('SELECT * FROM paper_birch WHERE recorded >= CURRENT_DATE;', function (errorMakingQuery, result) {
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

router.get('/quaking', function (req, res) { 
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
                client.query('SELECT * FROM quaking_aspen WHERE recorded >= CURRENT_DATE;', function (errorMakingQuery, result) {
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

router.get('/ruby', function (req, res) { 
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
                client.query('SELECT * FROM ruby_throated_hummingbird WHERE recorded >= CURRENT_DATE;', function (errorMakingQuery, result) {
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
