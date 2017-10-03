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
                        // console.log('result.rows is: ', result.rows);
                        res.send(result.rows);
                    }
                });
            }
        });
    }
});

router.get('/bur/:classNum', function (req, res) { 
    // Add a SELECT query
    if (req.isAuthenticated()) {
        var userInfo = {
            username: req.user.username
        };
        var classNum = req.params.classNum.toString();
        console.log('classNum:', classNum)
        pool.connect(function (err, client, done) {
            if (err) {
                // when connecting to database failed
                console.log('Error connecting to database', err);
                res.sendStatus(500);
            } else {
                // when connecting to database worked!
                // client.query('SELECT * FROM bur_oak WHERE recorded >= CURRENT_DATE;', function (errorMakingQuery, result) {
                client.query("SELECT site, sum(case when breaking_leaf_buds  = 'yes' then 1 else 0 end) as breaking_leaf_buds_yes, sum(case when breaking_leaf_buds  = 'no' then 1 else 0 end) as breaking_leaf_buds_no, sum(case when breaking_leaf_buds  = 'maybe' then 1 else 0 end) as breaking_leaf_buds_maybe, sum(case when leaves  = 'yes' then 1 else 0 end) as leaves_yes, sum(case when leaves = 'no' then 1 else 0 end) as leaves_no, sum(case when leaves = 'maybe' then 1 else 0 end) as leaves_maybe, sum(case when increasing_leaf_size = 'yes' then 1 else 0 end) as increasing_leaf_size_yes, sum(case when increasing_leaf_size = 'no' then 1 else 0 end) as increasing_leaf_size_no, sum(case when increasing_leaf_size = 'maybe' then 1 else 0 end) as increasing_leaf_size_maybe, sum(case when colored_leaves = 'yes' then 1 else 0 end) as colored_leaves_yes,sum(case when colored_leaves = 'no' then 1 else 0 end) as colored_leaves_no, sum(case when colored_leaves = 'maybe' then 1 else 0 end) as colored_leaves_maybe, sum(case when falling_leaves = 'yes' then 1 else 0 end) as falling_leaves_yes, sum(case when falling_leaves = 'no' then 1 else 0 end) as falling_leaves_no, sum(case when falling_leaves = 'maybe' then 1 else 0 end) as falling_leaves_maybe, sum(case when flowers_or_flower_buds = 'yes' then 1 else 0 end) as flowers_or_flower_buds_yes, sum(case when flowers_or_flower_buds = 'no' then 1 else 0 end) as flowers_or_flower_buds_no, sum(case when flowers_or_flower_buds = 'maybe' then 1 else 0 end) as flowers_or_flower_buds_maybe, sum(case when open_flowers = 'yes' then 1 else 0 end) as open_flowers_yes, sum(case when open_flowers = 'no' then 1 else 0 end) as open_flowers_no, sum(case when open_flowers = 'maybe' then 1 else 0 end) as open_flowers_maybe, sum(case when pollen_release = 'yes' then 1 else 0 end) as pollen_release_yes, sum(case when pollen_release = 'no' then 1 else 0 end) as pollen_release_no, sum(case when pollen_release = 'maybe' then 1 else 0 end) as pollen_release_maybe, sum(case when fruits = 'yes' then 1 else 0 end) as fruits_yes, sum(case when fruits = 'no' then 1 else 0 end) as fruits_no, sum(case when fruits = 'maybe' then 1 else 0 end) as fruits_maybe, sum(case when ripe_fruits = 'yes' then 1 else 0 end) as ripe_fruits_yes, sum(case when ripe_fruits = 'no' then 1 else 0 end) as ripe_fruits_no, sum(case when ripe_fruits = 'maybe' then 1 else 0 end) as ripe_fruits_maybe, sum(case when recent_fruit_or_seed_drop = 'yes' then 1 else 0 end) as recent_fruit_or_seed_drop_yes, sum(case when recent_fruit_or_seed_drop = 'no' then 1 else 0 end) as recent_fruit_or_seed_drop_no, sum(case when recent_fruit_or_seed_drop = 'maybe' then 1 else 0 end) as recent_fruit_or_seed_drop_maybe from bur_oak WHERE recorded >= CURRENT_DATE AND class = $1 GROUP BY site ORDER BY site ASC", [classNum], function (errorMakingQuery, result) {

             
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
                        // console.log('result.rows is: ', result.rows);
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
                        // console.log('result.rows is: ', result.rows);
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
                        // console.log('result.rows is: ', result.rows);
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
                        // console.log('result.rows is: ', result.rows);
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
                        // console.log('result.rows is: ', result.rows);
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
                        // console.log('result.rows is: ', result.rows);
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
                        // console.log('result.rows is: ', result.rows);
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
                        // console.log('result.rows is: ', result.rows);
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
                        // console.log('result.rows is: ', result.rows);
                        res.send(result.rows);
                    }
                });
            }
        });
    }
});

module.exports = router;
