var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');


//post requests for student data.  
//Each request can post multiple rows to a table.
router.post('/bur_oak', function (req, res) {
    //see buildStatement function explanation below
    var query = buildStatement('INSERT INTO bur_oak (class, site, breaking_leaf_buds, leaves, increasing_leaf_size, colored_leaves, falling_leaves, flowers_or_flower_buds, open_flowers, pollen_release, fruits, ripe_fruits, recent_fruit_or_seed_drop, notes) VALUES ', req.body);
    console.log('bur_oak router post called ');
    pool.connect(function (err, client, done) {
        if (err) {
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            client.query(query, function (err, result) {
                    done();
                    if (err) {
                        console.log('Error making bur_oak post query: ', err);
                        res.sendStatus(500);
                    } else {
                        res.sendStatus(201);
                    }
                }
            );
        }
    });
});

router.post('/paper_birch', function (req, res) {
    var query = buildStatement('INSERT INTO paper_birch (class, site, breaking_leaf_buds, leaves, increasing_leaf_size, colored_leaves, falling_leaves, flowers_or_flower_buds, open_flowers, pollen_release, fruits, ripe_fruits, recent_fruit_or_seed_drop, notes) VALUES ', req.body);
    console.log('bur_oak router post called ');
    pool.connect(function (err, client, done) {
        if (err) {
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            client.query(query, function (err, result) {
                    done();
                    if (err) {
                        console.log('Error making paper_birch post query: ', err);
                        res.sendStatus(500);
                    } else {
                        res.sendStatus(201);
                    }
                }
            );
        }
    });
});

router.post('/quaking_aspen', function (req, res) {
    var query = buildStatement('INSERT INTO paper_birch (class, site, breaking_leaf_buds, leaves, increasing_leaf_size, colored_leaves, falling_leaves, flowers_or_flower_buds, open_flowers, pollen_release, fruits, ripe_fruits, recent_fruit_or_seed_drop, notes) VALUES ', req.body);
    console.log('bur_oak router post called ');
    pool.connect(function (err, client, done) {
        if (err) {
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            client.query(query, function (err, result) {
                    done();
                    if (err) {
                        console.log('Error making paper_birch post query: ', err);
                        res.sendStatus(500);
                    } else {
                        res.sendStatus(201);
                    }
                }
            );
        }
    });
});

router.post('/northern_red_oak', function (req, res) {
    var query = buildStatement('INSERT INTO paper_birch (class, site, breaking_leaf_buds, leaves, increasing_leaf_size, colored_leaves, falling_leaves, flowers_or_flower_buds, open_flowers, pollen_release, fruits, ripe_fruits, recent_fruit_or_seed_drop, notes) VALUES ', req.body);
    console.log('bur_oak router post called ');
    pool.connect(function (err, client, done) {
        if (err) {
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            client.query(query, function (err, result) {
                    done();
                    if (err) {
                        console.log('Error making paper_birch post query: ', err);
                        res.sendStatus(500);
                    } else {
                        res.sendStatus(201);
                    }
                }
            );
        }
    });
});

router.post('/common_buckthorn', function (req, res) {
    var query = buildStatement('INSERT INTO common_buckthorn (class, site, breaking_leaf_buds, leaves, increasing_leaf_size, colored_leaves, falling_leaves, flowers_or_flower_buds, open_flowers, pollen_release, fruits, ripe_fruits, recent_fruit_or_seed_drop, notes) VALUES ', req.body);
    console.log('bur_oak router post called ');
    pool.connect(function (err, client, done) {
        if (err) {
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            client.query(query, function (err, result) {
                    done();
                    if (err) {
                        console.log('Error making common_buckthorn post query: ', err);
                        res.sendStatus(500);
                    } else {
                        res.sendStatus(201);
                    }
                }
            );
        }
    });
});

router.post('/common_milkweed', function (req, res) {
    var query = buildStatement('INSERT INTO common_milkweed (class, site, initial_growth, leaves, flowers_or_flower_buds, open_flowers, fruits, ripe_fruits, recent_fruit_or_seed_drop, notes) VALUES ', req.body);
    console.log('bur_oak router post called ');
    pool.connect(function (err, client, done) {
        if (err) {
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            client.query(query, function (err, result) {
                    done();
                    if (err) {
                        console.log('Error making common_milkweed post query: ', err);
                        res.sendStatus(500);
                    } else {
                        res.sendStatus(201);
                    }
                }
            );
        }
    });
});



router.post('/ground_squirrel', function (req, res) {
    var query = buildStatement('INSERT INTO ground_squirrel (class, site, active_individuals, feeding, young_individuals, dead_individuals, notes) VALUES ', req.body);
    console.log('bur_oak router post called ');
    pool.connect(function (err, client, done) {
        if (err) {
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            client.query(query, function (err, result) {
                    done();
                    if (err) {
                        console.log('Error making ground squirrel post query: ', err);
                        res.sendStatus(500);
                    } else {
                        res.sendStatus(201);
                    }
                }
            );
        }
    });
});

router.post('/eastern_bluebird', function (req, res) {
    var query = buildStatement('INSERT INTO eastern_bluebird (class, site, active_individuals, feeding, fruit_seed_consumption, insect_consumption, calls_or_song, singing_individuals, territorial_individuals, courtship, mating, nest_building, occupied_nest, nestlings, fledged_young, dead_individuals, dead_nestlings_or_fledlings, individuals_at_feeding_station, notes) VALUES ', req.body);
    console.log('bur_oak router post called ');
    pool.connect(function (err, client, done) {
        if (err) {
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            client.query(query, function (err, result) {
                    done();
                    if (err) {
                        console.log('Error making eastern_bluebird post query: ', err);
                        res.sendStatus(500);
                    } else {
                        res.sendStatus(201);
                    }
                }
            );
        }
    });
});

router.post('/dark_eyed_junco', function (req, res) {
    var query = buildStatement('INSERT INTO dark_eyed_junco (class, site, active_individuals, feeding, fruit_seed_consumption, insect_consumption, calls_or_song, singing_individuals, territorial_individuals, courtship, mating, nest_building, occupied_nest, nestlings, fledged_young, dead_individuals, dead_nestlings_or_fledlings, individuals_at_feeding_station, notes) VALUES ', req.body);
    console.log('bur_oak router post called ');
    pool.connect(function (err, client, done) {
        if (err) {
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            client.query(query, function (err, result) {
                    done();
                    if (err) {
                        console.log('Error making dark_eyed_junco post query: ', err);
                        res.sendStatus(500);
                    } else {
                        res.sendStatus(201);
                    }
                }
            );
        }
    });
});

router.post('/ruby_throated_hummingbird', function (req, res) {
    var query = buildStatement('INSERT INTO ruby_throated_hummingbird (class, site, active_individuals, feeding, insect_consumption, flower_visitation, calls_or_song, singing_individuals, territorial_individuals, courtship, mating, nest_bulding, occupied_nest, nestlings, fledged_young, dead_individuals, dead_nestlings_or_fledlings, individuals_at_feeding_station, notes) VALUES ', req.body);
    console.log('bur_oak router post called ');
    pool.connect(function (err, client, done) {
        if (err) {
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            client.query(query, function (err, result) {
                    done();
                    if (err) {
                        console.log('Error making ruby_throated_hummingbird post query: ', err);
                        res.sendStatus(500);
                    } else {
                        res.sendStatus(201);
                    }
                }
            );
        }
    });
});

//modified from kethinov's comment on https://github.com/brianc/node-postgres/issues/530
//creates a query object from the data with this format:
// { text: 'INSERT INTO bur_oak (column names) VALUES ($1, $2...), ($3, $4...)',
// values: [ 'yes', 'no', 'yes', 'no' ] }
//client.query supports this object syntax instead of a string like we normally have done: https://node-postgres.com/features/queries
//I did it this way so that we could easily do multiple requests and don't need to know the number of requests
//that will be made for one table.
function buildStatement (insert, rows) { 
    var params = [];
    var columns = [];
    rows.forEach(function(row) {
      var valueClause = []; //the bling list
      Object.keys(row).forEach(function (property) {//row is an object of data for one site one organism
        params.push(row[property])//property will be the property of the data object, such as breaking_leaf_buds
        valueClause.push('$' + params.length)
      });
      columns.push('(' + valueClause.join(', ') + ')')
    })
    return {
      text: insert + columns.join(', '),
      values: params
    }
  }

  function buildStatement (insert, rows) { 
    var params = [];
    var columns = [];
    rows.forEach(function(row) { 
      var valueClause = []; 
      Object.keys(row).forEach(function (property) { 
        params.push(row[property])
        valueClause.push('$' + params.length)
      });
      columns.push('(' + valueClause.join(', ') + ')')
    })
    return {
      text: insert + columns.join(', '),
      values: params
    }
  }

module.exports = router;