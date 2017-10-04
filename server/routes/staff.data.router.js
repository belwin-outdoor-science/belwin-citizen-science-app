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

//leave this route to use for "view all classes"
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
                        // console.log('result.rows is: ', result.rows);
                        res.send(result.rows);
                    }
                });
            }
        });
    }
});

//pulls y/n/? totals for all 3 bur oaks matching today's date and the selected class number
router.get('/bur/:classNum', function (req, res) {
    // Add a SELECT query
    if (req.isAuthenticated()) {
        var userInfo = {
            username: req.user.username
        };
        var classNum = req.params.classNum.toString();
        console.log('classNum:', classNum)
        var query = buildGet(allData.bur_oak[0], 'bur_oak');
        console.log('bur oak get query: ');
        console.log(query);

        pool.connect(function (err, client, done) {
            if (err) {
                // when connecting to database failed
                console.log('Error connecting to database', err);
                res.sendStatus(500);
            } else {
                // when connecting to database worked!
                client.query(query, [classNum], function (errorMakingQuery, result) {
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
//SELECT site, 
function buildGet(row, organism) {
    console.log('buildGet called');

    var sumStatements = 'SELECT site,';
    var yesNoMaybe = ['yes', 'no', 'maybe'];
    Object.keys(row).forEach(function (question, i) {
        if (question !== 'class' && question !== 'site' && question !== 'notes') {
            yesNoMaybe.forEach(function (word) {

                sumStatements += ' sum(case when ' + question + ' = \'' + word + '\' then 1 else 0 end) as ' + question + '_' + word + ',';
            });
        }
    });
    
    //take off last comma
    sumStatements = sumStatements.substring(0, sumStatements.length - 1);;
    sumStatements += ' from ' + organism;
    sumStatements += ' WHERE recorded >= CURRENT_DATE AND class = $1 GROUP BY site ORDER BY site ASC';

    console.log('sum statements');
    console.log(sumStatements);
    return sumStatements;
}
function buildGetEverything(row, organism) {
    console.log('buildGetEverything called');

    var sumStatements = 'SELECT site,';
    var yesNoMaybe = ['yes', 'no', 'maybe'];
    Object.keys(row).forEach(function (question, i) {
        if (question !== 'site' && question !== 'notes') {
            yesNoMaybe.forEach(function (word) {

                sumStatements += ' sum(case when ' + question + ' = \'' + word + '\' then 1 else 0 end) as ' + question + '_' + word + ',';
            });
        }
    });
    
    //take off last comma
    sumStatements = sumStatements.substring(0, sumStatements.length - 1);
    // sumStatements += ' from ' + organism;
    sumStatements += ' WHERE recorded >= CURRENT_DATE GROUP BY site ORDER BY site ASC';

    console.log('sum statements');
    console.log(sumStatements);
    return sumStatements;
}
router.get('/allData', function (req, res) {
    // Add a SELECT query
    if (req.isAuthenticated()) {
        var userInfo = {
            username: req.user.username
        };
        // var classNum = req.params.classNum.toString();
        // console.log('classNum:', classNum)
        var query = buildGetEverything(allData, 'allData');
        console.log('allData get query: ');
        console.log(query);

        pool.connect(function (err, client, done) {
            if (err) {
                // when connecting to database failed
                console.log('Error connecting to database', err);
                res.sendStatus(500);
            } else {
                // when connecting to database worked!
                client.query(query, function (errorMakingQuery, result) {
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
//JEN'S REQUEST
// router.get('/bur/:classNum', function (req, res) {
//     // Add a SELECT query
//     if (req.isAuthenticated()) {
//         var userInfo = {
//             username: req.user.username
//         };
//         var classNum = req.params.classNum.toString();
//         console.log('classNum:', classNum)
//         pool.connect(function (err, client, done) {
//             if (err) {
//                 // when connecting to database failed
//                 console.log('Error connecting to database', err);
//                 res.sendStatus(500);
//             } else {
//                 // when connecting to database worked!
//                 client.query("SELECT site, sum(case when breaking_leaf_buds  = 'yes' then 1 else 0 end) as breaking_leaf_buds_yes, sum(case when breaking_leaf_buds  = 'no' then 1 else 0 end) as breaking_leaf_buds_no, sum(case when breaking_leaf_buds  = 'maybe' then 1 else 0 end) as breaking_leaf_buds_maybe, sum(case when leaves  = 'yes' then 1 else 0 end) as leaves_yes, sum(case when leaves = 'no' then 1 else 0 end) as leaves_no, sum(case when leaves = 'maybe' then 1 else 0 end) as leaves_maybe, sum(case when increasing_leaf_size = 'yes' then 1 else 0 end) as increasing_leaf_size_yes, sum(case when increasing_leaf_size = 'no' then 1 else 0 end) as increasing_leaf_size_no, sum(case when increasing_leaf_size = 'maybe' then 1 else 0 end) as increasing_leaf_size_maybe, sum(case when colored_leaves = 'yes' then 1 else 0 end) as colored_leaves_yes,sum(case when colored_leaves = 'no' then 1 else 0 end) as colored_leaves_no, sum(case when colored_leaves = 'maybe' then 1 else 0 end) as colored_leaves_maybe, sum(case when falling_leaves = 'yes' then 1 else 0 end) as falling_leaves_yes, sum(case when falling_leaves = 'no' then 1 else 0 end) as falling_leaves_no, sum(case when falling_leaves = 'maybe' then 1 else 0 end) as falling_leaves_maybe, sum(case when flowers_or_flower_buds = 'yes' then 1 else 0 end) as flowers_or_flower_buds_yes, sum(case when flowers_or_flower_buds = 'no' then 1 else 0 end) as flowers_or_flower_buds_no, sum(case when flowers_or_flower_buds = 'maybe' then 1 else 0 end) as flowers_or_flower_buds_maybe, sum(case when open_flowers = 'yes' then 1 else 0 end) as open_flowers_yes, sum(case when open_flowers = 'no' then 1 else 0 end) as open_flowers_no, sum(case when open_flowers = 'maybe' then 1 else 0 end) as open_flowers_maybe, sum(case when pollen_release = 'yes' then 1 else 0 end) as pollen_release_yes, sum(case when pollen_release = 'no' then 1 else 0 end) as pollen_release_no, sum(case when pollen_release = 'maybe' then 1 else 0 end) as pollen_release_maybe, sum(case when fruits = 'yes' then 1 else 0 end) as fruits_yes, sum(case when fruits = 'no' then 1 else 0 end) as fruits_no, sum(case when fruits = 'maybe' then 1 else 0 end) as fruits_maybe, sum(case when ripe_fruits = 'yes' then 1 else 0 end) as ripe_fruits_yes, sum(case when ripe_fruits = 'no' then 1 else 0 end) as ripe_fruits_no, sum(case when ripe_fruits = 'maybe' then 1 else 0 end) as ripe_fruits_maybe, sum(case when recent_fruit_or_seed_drop = 'yes' then 1 else 0 end) as recent_fruit_or_seed_drop_yes,sum(case when recent_fruit_or_seed_drop = 'no' then 1 else 0 end) as recent_fruit_or_seed_drop_no,sum(case when recent_fruit_or_seed_drop = 'maybe' then 1 else 0 end) as recent_fruit_or_seed_drop_maybe from bur_oak WHERE recorded >= CURRENT_DATE AND class = $1 GROUP BY site ORDER BY site ASC", [classNum], function (errorMakingQuery, result) {


//                     done();
//                     if (errorMakingQuery) {
//                         console.log('Error making database query', errorMakingQuery);
//                         res.sendStatus(500);
//                     } else {
//                         // console.log('result.rows is: ', result.rows);
//                         res.send(result.rows);
//                     }
//                 });
//             }
//         });
//     }
// });

//leave this route to use for "view all classes"
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



router.get('/buckthorn/:classNum', function (req, res) {
    // Add a SELECT query
    if (req.isAuthenticated()) {
        var userInfo = {
            username: req.user.username
        };
        var classNum = req.params.classNum.toString();
       // console.log('classNum:', classNum)
        pool.connect(function (err, client, done) {
            if (err) {
                // when connecting to database failed
                console.log('Error connecting to database', err);
                res.sendStatus(500);
            } else {
                // when connecting to database worked!
                client.query("SELECT site, sum(case when breaking_leaf_buds  = 'yes' then 1 else 0 end) as breaking_leaf_buds_yes, sum(case when breaking_leaf_buds  = 'no' then 1 else 0 end) as breaking_leaf_buds_no, sum(case when breaking_leaf_buds  = 'maybe' then 1 else 0 end) as breaking_leaf_buds_maybe, sum(case when leaves  = 'yes' then 1 else 0 end) as leaves_yes, sum(case when leaves = 'no' then 1 else 0 end) as leaves_no, sum(case when leaves = 'maybe' then 1 else 0 end) as leaves_maybe, sum(case when increasing_leaf_size = 'yes' then 1 else 0 end) as increasing_leaf_size_yes, sum(case when increasing_leaf_size = 'no' then 1 else 0 end) as increasing_leaf_size_no, sum(case when increasing_leaf_size = 'maybe' then 1 else 0 end) as increasing_leaf_size_maybe, sum(case when colored_leaves = 'yes' then 1 else 0 end) as colored_leaves_yes,sum(case when colored_leaves = 'no' then 1 else 0 end) as colored_leaves_no, sum(case when colored_leaves = 'maybe' then 1 else 0 end) as colored_leaves_maybe, sum(case when falling_leaves = 'yes' then 1 else 0 end) as falling_leaves_yes, sum(case when falling_leaves = 'no' then 1 else 0 end) as falling_leaves_no, sum(case when falling_leaves = 'maybe' then 1 else 0 end) as falling_leaves_maybe, sum(case when flowers_or_flower_buds = 'yes' then 1 else 0 end) as flowers_or_flower_buds_yes, sum(case when flowers_or_flower_buds = 'no' then 1 else 0 end) as flowers_or_flower_buds_no, sum(case when flowers_or_flower_buds = 'maybe' then 1 else 0 end) as flowers_or_flower_buds_maybe, sum(case when open_flowers = 'yes' then 1 else 0 end) as open_flowers_yes, sum(case when open_flowers = 'no' then 1 else 0 end) as open_flowers_no, sum(case when open_flowers = 'maybe' then 1 else 0 end) as open_flowers_maybe,  sum(case when fruits = 'yes' then 1 else 0 end) as fruits_yes, sum(case when fruits = 'no' then 1 else 0 end) as fruits_no, sum(case when fruits = 'maybe' then 1 else 0 end) as fruits_maybe, sum(case when ripe_fruits = 'yes' then 1 else 0 end) as ripe_fruits_yes, sum(case when ripe_fruits = 'no' then 1 else 0 end) as ripe_fruits_no, sum(case when ripe_fruits = 'maybe' then 1 else 0 end) as ripe_fruits_maybe, sum(case when recent_fruit_or_seed_drop = 'yes' then 1 else 0 end) as recent_fruit_or_seed_drop_yes, sum(case when recent_fruit_or_seed_drop = 'no' then 1 else 0 end) as recent_fruit_or_seed_drop_no, sum(case when recent_fruit_or_seed_drop = 'maybe' then 1 else 0 end) as recent_fruit_or_seed_drop_maybe from common_buckthorn WHERE recorded >= CURRENT_DATE AND class = $1 GROUP BY site ORDER BY site ASC", [classNum], function (errorMakingQuery, result) {
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





//save for whole class data pull
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

router.get('/milkweed/:classNum', function (req, res) {
    // Add a SELECT query
    if (req.isAuthenticated()) {
        var userInfo = {
            username: req.user.username
        };
        var classNum = req.params.classNum.toString();
      //  console.log('classNum:', classNum)
        pool.connect(function (err, client, done) {
            if (err) {
                // when connecting to database failed
                console.log('Error connecting to database', err);
                res.sendStatus(500);
            } else {
                // when connecting to database worked!
                client.query("SELECT site, sum(case when initial_growth = 'yes' then 1 else 0 end) as initial_growth_yes, sum(case when initial_growth = 'no' then 1 else 0 end) as initial_growth_no, sum(case when initial_growth  = 'maybe' then 1 else 0 end) as initial_growth_maybe, sum(case when leaves  = 'yes' then 1 else 0 end) as leaves_yes, sum(case when leaves = 'no' then 1 else 0 end) as leaves_no, sum(case when leaves = 'maybe' then 1 else 0 end) as leaves_maybe, sum(case when flowers_or_flower_buds = 'yes' then 1 else 0 end) as flowers_or_flower_buds_yes, sum(case when flowers_or_flower_buds = 'no' then 1 else 0 end) as flowers_or_flower_buds_no, sum(case when flowers_or_flower_buds = 'maybe' then 1 else 0 end) as flowers_or_flower_buds_maybe, sum(case when open_flowers = 'yes' then 1 else 0 end) as open_flowers_yes, sum(case when open_flowers = 'no' then 1 else 0 end) as open_flowers_no, sum(case when open_flowers = 'maybe' then 1 else 0 end) as open_flowers_maybe, sum(case when fruits = 'yes' then 1 else 0 end) as fruits_yes, sum(case when fruits = 'no' then 1 else 0 end) as fruits_no, sum(case when fruits = 'maybe' then 1 else 0 end) as fruits_maybe, sum(case when ripe_fruits = 'yes' then 1 else 0 end) as ripe_fruits_yes, sum(case when ripe_fruits = 'no' then 1 else 0 end) as ripe_fruits_no, sum(case when ripe_fruits = 'maybe' then 1 else 0 end) as ripe_fruits_maybe, sum(case when recent_fruit_or_seed_drop = 'yes' then 1 else 0 end) as recent_fruit_or_seed_drop_yes, sum(case when recent_fruit_or_seed_drop = 'no' then 1 else 0 end) as recent_fruit_or_seed_drop_no, sum(case when recent_fruit_or_seed_drop = 'maybe' then 1 else 0 end) as recent_fruit_or_seed_drop_maybe from common_milkweed WHERE recorded >= CURRENT_DATE AND class = $1 GROUP BY site ORDER BY site ASC", [classNum], function (errorMakingQuery, result) {
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

//use for all class data
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

router.get('/northern/:classNum', function (req, res) {
    // Add a SELECT query
    if (req.isAuthenticated()) {
        var userInfo = {
            username: req.user.username
        };
        var classNum = req.params.classNum.toString();        
        pool.connect(function (err, client, done) {
            if (err) {
                // when connecting to database failed
                console.log('Error connecting to database', err);
                res.sendStatus(500);
            } else {
                // when connecting to database worked!
                client.query("SELECT site, sum(case when breaking_leaf_buds  = 'yes' then 1 else 0 end) as breaking_leaf_buds_yes, sum(case when breaking_leaf_buds  = 'no' then 1 else 0 end) as breaking_leaf_buds_no, sum(case when breaking_leaf_buds  = 'maybe' then 1 else 0 end) as breaking_leaf_buds_maybe, sum(case when leaves  = 'yes' then 1 else 0 end) as leaves_yes, sum(case when leaves = 'no' then 1 else 0 end) as leaves_no, sum(case when leaves = 'maybe' then 1 else 0 end) as leaves_maybe, sum(case when increasing_leaf_size = 'yes' then 1 else 0 end) as increasing_leaf_size_yes, sum(case when increasing_leaf_size = 'no' then 1 else 0 end) as increasing_leaf_size_no, sum(case when increasing_leaf_size = 'maybe' then 1 else 0 end) as increasing_leaf_size_maybe, sum(case when colored_leaves = 'yes' then 1 else 0 end) as colored_leaves_yes,sum(case when colored_leaves = 'no' then 1 else 0 end) as colored_leaves_no, sum(case when colored_leaves = 'maybe' then 1 else 0 end) as colored_leaves_maybe, sum(case when falling_leaves = 'yes' then 1 else 0 end) as falling_leaves_yes, sum(case when falling_leaves = 'no' then 1 else 0 end) as falling_leaves_no, sum(case when falling_leaves = 'maybe' then 1 else 0 end) as falling_leaves_maybe, sum(case when flowers_or_flower_buds = 'yes' then 1 else 0 end) as flowers_or_flower_buds_yes, sum(case when flowers_or_flower_buds = 'no' then 1 else 0 end) as flowers_or_flower_buds_no, sum(case when flowers_or_flower_buds = 'maybe' then 1 else 0 end) as flowers_or_flower_buds_maybe, sum(case when open_flowers = 'yes' then 1 else 0 end) as open_flowers_yes, sum(case when open_flowers = 'no' then 1 else 0 end) as open_flowers_no, sum(case when open_flowers = 'maybe' then 1 else 0 end) as open_flowers_maybe, sum(case when pollen_release = 'yes' then 1 else 0 end) as pollen_release_yes, sum(case when pollen_release = 'no' then 1 else 0 end) as pollen_release_no, sum(case when pollen_release = 'maybe' then 1 else 0 end) as pollen_release_maybe, sum(case when fruits = 'yes' then 1 else 0 end) as fruits_yes, sum(case when fruits = 'no' then 1 else 0 end) as fruits_no, sum(case when fruits = 'maybe' then 1 else 0 end) as fruits_maybe, sum(case when ripe_fruits = 'yes' then 1 else 0 end) as ripe_fruits_yes, sum(case when ripe_fruits = 'no' then 1 else 0 end) as ripe_fruits_no, sum(case when ripe_fruits = 'maybe' then 1 else 0 end) as ripe_fruits_maybe, sum(case when recent_fruit_or_seed_drop = 'yes' then 1 else 0 end) as recent_fruit_or_seed_drop_yes, sum(case when recent_fruit_or_seed_drop = 'no' then 1 else 0 end) as recent_fruit_or_seed_drop_no, sum(case when recent_fruit_or_seed_drop = 'maybe' then 1 else 0 end) as recent_fruit_or_seed_drop_maybe from northern_red_oak WHERE recorded >= CURRENT_DATE AND class = $1 GROUP BY site ORDER BY site ASC", [classNum], function (errorMakingQuery, result) {
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

//save for get all classes
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

router.get('/paper/:classNum', function (req, res) {
    // Add a SELECT query
    if (req.isAuthenticated()) {
        var userInfo = {
            username: req.user.username
        };
        var classNum = req.params.classNum.toString();
      //  console.log('classNum:', classNum)
        pool.connect(function (err, client, done) {
            if (err) {
                // when connecting to database failed
                console.log('Error connecting to database', err);
                res.sendStatus(500);
            } else {
                // when connecting to database worked!
                client.query("SELECT site, sum(case when breaking_leaf_buds  = 'yes' then 1 else 0 end) as breaking_leaf_buds_yes, sum(case when breaking_leaf_buds  = 'no' then 1 else 0 end) as breaking_leaf_buds_no, sum(case when breaking_leaf_buds  = 'maybe' then 1 else 0 end) as breaking_leaf_buds_maybe, sum(case when leaves  = 'yes' then 1 else 0 end) as leaves_yes, sum(case when leaves = 'no' then 1 else 0 end) as leaves_no, sum(case when leaves = 'maybe' then 1 else 0 end) as leaves_maybe, sum(case when increasing_leaf_size = 'yes' then 1 else 0 end) as increasing_leaf_size_yes, sum(case when increasing_leaf_size = 'no' then 1 else 0 end) as increasing_leaf_size_no, sum(case when increasing_leaf_size = 'maybe' then 1 else 0 end) as increasing_leaf_size_maybe, sum(case when colored_leaves = 'yes' then 1 else 0 end) as colored_leaves_yes,sum(case when colored_leaves = 'no' then 1 else 0 end) as colored_leaves_no, sum(case when colored_leaves = 'maybe' then 1 else 0 end) as colored_leaves_maybe, sum(case when falling_leaves = 'yes' then 1 else 0 end) as falling_leaves_yes, sum(case when falling_leaves = 'no' then 1 else 0 end) as falling_leaves_no, sum(case when falling_leaves = 'maybe' then 1 else 0 end) as falling_leaves_maybe, sum(case when flowers_or_flower_buds = 'yes' then 1 else 0 end) as flowers_or_flower_buds_yes, sum(case when flowers_or_flower_buds = 'no' then 1 else 0 end) as flowers_or_flower_buds_no, sum(case when flowers_or_flower_buds = 'maybe' then 1 else 0 end) as flowers_or_flower_buds_maybe, sum(case when open_flowers = 'yes' then 1 else 0 end) as open_flowers_yes, sum(case when open_flowers = 'no' then 1 else 0 end) as open_flowers_no, sum(case when open_flowers = 'maybe' then 1 else 0 end) as open_flowers_maybe, sum(case when pollen_release = 'yes' then 1 else 0 end) as pollen_release_yes, sum(case when pollen_release = 'no' then 1 else 0 end) as pollen_release_no, sum(case when pollen_release = 'maybe' then 1 else 0 end) as pollen_release_maybe, sum(case when fruits = 'yes' then 1 else 0 end) as fruits_yes, sum(case when fruits = 'no' then 1 else 0 end) as fruits_no, sum(case when fruits = 'maybe' then 1 else 0 end) as fruits_maybe, sum(case when ripe_fruits = 'yes' then 1 else 0 end) as ripe_fruits_yes, sum(case when ripe_fruits = 'no' then 1 else 0 end) as ripe_fruits_no, sum(case when ripe_fruits = 'maybe' then 1 else 0 end) as ripe_fruits_maybe, sum(case when recent_fruit_or_seed_drop = 'yes' then 1 else 0 end) as recent_fruit_or_seed_drop_yes, sum(case when recent_fruit_or_seed_drop = 'no' then 1 else 0 end) as recent_fruit_or_seed_drop_no, sum(case when recent_fruit_or_seed_drop = 'maybe' then 1 else 0 end) as recent_fruit_or_seed_drop_maybe from paper_birch WHERE recorded >= CURRENT_DATE AND class = $1 GROUP BY site ORDER BY site ASC", [classNum], function (errorMakingQuery, result) {


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

//save for all class data pull
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

router.get('/quaking/:classNum', function (req, res) {
    // Add a SELECT query
    if (req.isAuthenticated()) {
        var userInfo = {
            username: req.user.username
        };
        var classNum = req.params.classNum.toString();
      //  console.log('classNum:', classNum)
        pool.connect(function (err, client, done) {
            if (err) {
                // when connecting to database failed
                console.log('Error connecting to database', err);
                res.sendStatus(500);
            } else {
                // when connecting to database worked!
                client.query("SELECT site, sum(case when breaking_leaf_buds  = 'yes' then 1 else 0 end) as breaking_leaf_buds_yes, sum(case when breaking_leaf_buds  = 'no' then 1 else 0 end) as breaking_leaf_buds_no, sum(case when breaking_leaf_buds  = 'maybe' then 1 else 0 end) as breaking_leaf_buds_maybe, sum(case when leaves  = 'yes' then 1 else 0 end) as leaves_yes, sum(case when leaves = 'no' then 1 else 0 end) as leaves_no, sum(case when leaves = 'maybe' then 1 else 0 end) as leaves_maybe, sum(case when increasing_leaf_size = 'yes' then 1 else 0 end) as increasing_leaf_size_yes, sum(case when increasing_leaf_size = 'no' then 1 else 0 end) as increasing_leaf_size_no, sum(case when increasing_leaf_size = 'maybe' then 1 else 0 end) as increasing_leaf_size_maybe, sum(case when colored_leaves = 'yes' then 1 else 0 end) as colored_leaves_yes,sum(case when colored_leaves = 'no' then 1 else 0 end) as colored_leaves_no, sum(case when colored_leaves = 'maybe' then 1 else 0 end) as colored_leaves_maybe, sum(case when falling_leaves = 'yes' then 1 else 0 end) as falling_leaves_yes, sum(case when falling_leaves = 'no' then 1 else 0 end) as falling_leaves_no, sum(case when falling_leaves = 'maybe' then 1 else 0 end) as falling_leaves_maybe, sum(case when flowers_or_flower_buds = 'yes' then 1 else 0 end) as flowers_or_flower_buds_yes, sum(case when flowers_or_flower_buds = 'no' then 1 else 0 end) as flowers_or_flower_buds_no, sum(case when flowers_or_flower_buds = 'maybe' then 1 else 0 end) as flowers_or_flower_buds_maybe, sum(case when open_flowers = 'yes' then 1 else 0 end) as open_flowers_yes, sum(case when open_flowers = 'no' then 1 else 0 end) as open_flowers_no, sum(case when open_flowers = 'maybe' then 1 else 0 end) as open_flowers_maybe, sum(case when pollen_release = 'yes' then 1 else 0 end) as pollen_release_yes, sum(case when pollen_release = 'no' then 1 else 0 end) as pollen_release_no, sum(case when pollen_release = 'maybe' then 1 else 0 end) as pollen_release_maybe, sum(case when fruits = 'yes' then 1 else 0 end) as fruits_yes, sum(case when fruits = 'no' then 1 else 0 end) as fruits_no, sum(case when fruits = 'maybe' then 1 else 0 end) as fruits_maybe, sum(case when ripe_fruits = 'yes' then 1 else 0 end) as ripe_fruits_yes, sum(case when ripe_fruits = 'no' then 1 else 0 end) as ripe_fruits_no, sum(case when ripe_fruits = 'maybe' then 1 else 0 end) as ripe_fruits_maybe, sum(case when recent_fruit_or_seed_drop = 'yes' then 1 else 0 end) as recent_fruit_or_seed_drop_yes, sum(case when recent_fruit_or_seed_drop = 'no' then 1 else 0 end) as recent_fruit_or_seed_drop_no, sum(case when recent_fruit_or_seed_drop = 'maybe' then 1 else 0 end) as recent_fruit_or_seed_drop_maybe from quaking_aspen WHERE recorded >= CURRENT_DATE AND class = $1 GROUP BY site ORDER BY site ASC", [classNum], function (errorMakingQuery, result) {


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

var allData = {
    //plants
    bur_oak: [{
        class: '',
        site: '1',
        breaking_leaf_buds: '',
        leaves: '',
        increasing_leaf_size: '',
        colored_leaves: '',
        falling_leaves: '',
        flowers_or_flower_buds: '',
        open_flowers: '',
        pollen_release: '',
        fruits: '',
        ripe_fruits: '',
        recent_fruit_or_seed_drop: '',
        notes: ''
    },
    {
        class: '',
        site: '2',
        breaking_leaf_buds: '',
        leaves: '',
        increasing_leaf_size: '',
        colored_leaves: '',
        falling_leaves: '',
        flowers_or_flower_buds: '',
        open_flowers: '',
        pollen_release: '',
        fruits: '',
        ripe_fruits: '',
        recent_fruit_or_seed_drop: '',
        notes: ''
    },
    {
        class: '',
        site: '3',
        breaking_leaf_buds: '',
        leaves: '',
        increasing_leaf_size: '',
        colored_leaves: '',
        falling_leaves: '',
        flowers_or_flower_buds: '',
        open_flowers: '',
        pollen_release: '',
        fruits: '',
        ripe_fruits: '',
        recent_fruit_or_seed_drop: '',
        notes: ''
    }
    ],
    common_buckthorn: [{
        class: '',
        site: '1',
        breaking_leaf_buds: '',
        leaves: '',
        increasing_leaf_size: '',
        colored_leaves: '',
        falling_leaves: '',
        flowers_or_flower_buds: '',
        open_flowers: '',
        pollen_release: '',
        fruits: '',
        ripe_fruits: '',
        recent_fruit_or_seed_drop: '',
        notes: ''
    },
    {
        class: '',
        site: '2',
        breaking_leaf_buds: '',
        leaves: '',
        increasing_leaf_size: '',
        colored_leaves: '',
        falling_leaves: '',
        flowers_or_flower_buds: '',
        open_flowers: '',
        pollen_release: '',
        fruits: '',
        ripe_fruits: '',
        recent_fruit_or_seed_drop: '',
        notes: ''
    },
    {
        class: '',
        site: '3',
        breaking_leaf_buds: '',
        leaves: '',
        increasing_leaf_size: '',
        colored_leaves: '',
        falling_leaves: '',
        flowers_or_flower_buds: '',
        open_flowers: '',
        pollen_release: '',
        fruits: '',
        ripe_fruits: '',
        recent_fruit_or_seed_drop: '',
        notes: ''
    }
    ],
    northern_red_oak: [{
        class: '',
        site: '1',
        breaking_leaf_buds: '',
        leaves: '',
        increasing_leaf_size: '',
        colored_leaves: '',
        falling_leaves: '',
        flowers_or_flower_buds: '',
        open_flowers: '',
        pollen_release: '',
        fruits: '',
        ripe_fruits: '',
        recent_fruit_or_seed_drop: '',
        notes: ''
    },
    {
        class: '',
        site: '2',
        breaking_leaf_buds: '',
        leaves: '',
        increasing_leaf_size: '',
        colored_leaves: '',
        falling_leaves: '',
        flowers_or_flower_buds: '',
        open_flowers: '',
        pollen_release: '',
        fruits: '',
        ripe_fruits: '',
        recent_fruit_or_seed_drop: '',
        notes: ''
    },
    {
        class: '',
        site: '3',
        breaking_leaf_buds: '',
        leaves: '',
        increasing_leaf_size: '',
        colored_leaves: '',
        falling_leaves: '',
        flowers_or_flower_buds: '',
        open_flowers: '',
        pollen_release: '',
        fruits: '',
        ripe_fruits: '',
        recent_fruit_or_seed_drop: '',
        notes: ''
    }
    ],
    common_milkweed: [{
        class: '',
        site: '1',
        initial_growth: '',
        leaves: '',
        flowers_or_flower_buds: '',
        open_flowers: '',
        fruits: '',
        ripe_fruits: '',
        recent_fruit_or_seed_drop: '',
        notes: ''
    },
    {
        class: '',
        site: '2',
        initial_growth: '',
        leaves: '',
        flowers_or_flower_buds: '',
        open_flowers: '',
        fruits: '',
        ripe_fruits: '',
        recent_fruit_or_seed_drop: '',
        notes: ''
    },
    {
        class: '',
        site: '3',
        initial_growth: '',
        leaves: '',
        flowers_or_flower_buds: '',
        open_flowers: '',
        fruits: '',
        ripe_fruits: '',
        recent_fruit_or_seed_drop: '',
        notes: ''
    }
    ],
    paper_birch: [{
        class: '',
        site: '1',
        breaking_leaf_buds: '',
        leaves: '',
        increasing_leaf_size: '',
        colored_leaves: '',
        falling_leaves: '',
        flowers_or_flower_buds: '',
        open_flowers: '',
        pollen_release: '',
        fruits: '',
        ripe_fruits: '',
        recent_fruit_or_seed_drop: '',
        notes: ''
    },
    {
        class: '',
        site: '2',
        breaking_leaf_buds: '',
        leaves: '',
        increasing_leaf_size: '',
        colored_leaves: '',
        falling_leaves: '',
        flowers_or_flower_buds: '',
        open_flowers: '',
        pollen_release: '',
        fruits: '',
        ripe_fruits: '',
        recent_fruit_or_seed_drop: '',
        notes: ''
    },
    {
        class: '',
        site: '3',
        breaking_leaf_buds: '',
        leaves: '',
        increasing_leaf_size: '',
        colored_leaves: '',
        falling_leaves: '',
        flowers_or_flower_buds: '',
        open_flowers: '',
        pollen_release: '',
        fruits: '',
        ripe_fruits: '',
        recent_fruit_or_seed_drop: '',
        notes: ''
    }
    ],
    quaking_aspen: [{
        class: '',
        site: '1',
        breaking_leaf_buds: '',
        leaves: '',
        increasing_leaf_size: '',
        colored_leaves: '',
        falling_leaves: '',
        flowers_or_flower_buds: '',
        open_flowers: '',
        pollen_release: '',
        fruits: '',
        ripe_fruits: '',
        recent_fruit_or_seed_drop: '',
        notes: ''
    },
    {
        class: '',
        site: '2',
        breaking_leaf_buds: '',
        leaves: '',
        increasing_leaf_size: '',
        colored_leaves: '',
        falling_leaves: '',
        flowers_or_flower_buds: '',
        open_flowers: '',
        pollen_release: '',
        fruits: '',
        ripe_fruits: '',
        recent_fruit_or_seed_drop: '',
        notes: ''
    },
    {
        class: '',
        site: '3',
        breaking_leaf_buds: '',
        leaves: '',
        increasing_leaf_size: '',
        colored_leaves: '',
        falling_leaves: '',
        flowers_or_flower_buds: '',
        open_flowers: '',
        pollen_release: '',
        fruits: '',
        ripe_fruits: '',
        recent_fruit_or_seed_drop: '',
        notes: ''
    }
    ],
    //mammals
    ground_squirrel: [{
        class: '',
        site: '1',
        active_individuals: '',
        feeding: '',
        young_individuals: '',
        dead_individuals: '',
        notes: ''
    },
    {
        class: '',
        site: '2',
        active_individuals: '',
        feeding: '',
        young_individuals: '',
        dead_individuals: '',
        notes: ''
    },
    {
        class: '',
        site: '3',
        active_individuals: '',
        feeding: '',
        young_individuals: '',
        dead_individuals: '',
        notes: ''
    }
    ],
    eastern_bluebird: [{
        class: '',
        site: '1',
        active_individuals: '',
        feeding: '',
        fruit_seed_consumption: '',
        insect_consumption: '',
        calls_or_song: '',
        singing_individuals: '',
        territorial_individuals: '',
        courtship: '',
        mating: '',
        nest_building: '',
        occupied_nest: '',
        nestlings: '',
        fledged_young: '',
        dead_individuals: '',
        dead_nestlings_or_fledlings: '',
        individuals_at_feeding_station: '',
        notes: ''
    },
    {
        class: '',
        site: '2',
        active_individuals: '',
        feeding: '',
        fruit_seed_consumption: '',
        insect_consumption: '',
        calls_or_song: '',
        singing_individuals: '',
        territorial_individuals: '',
        courtship: '',
        mating: '',
        nest_building: '',
        occupied_nest: '',
        nestlings: '',
        fledged_young: '',
        dead_individuals: '',
        dead_nestlings_or_fledlings: '',
        individuals_at_feeding_station: '',
        notes: ''
    },
    {
        class: '',
        site: '3',
        active_individuals: '',
        feeding: '',
        fruit_seed_consumption: '',
        insect_consumption: '',
        calls_or_song: '',
        singing_individuals: '',
        territorial_individuals: '',
        courtship: '',
        mating: '',
        nest_building: '',
        occupied_nest: '',
        nestlings: '',
        fledged_young: '',
        dead_individuals: '',
        dead_nestlings_or_fledlings: '',
        individuals_at_feeding_station: '',
        notes: ''
    }
    ],
    dark_eyed_junco: [{
        class: '',
        site: '1',
        active_individuals: '',
        feeding: '',
        fruit_seed_consumption: '',
        insect_consumption: '',
        calls_or_song: '',
        singing_individuals: '',
        territorial_individuals: '',
        courtship: '',
        mating: '',
        nest_building: '',
        occupied_nest: '',
        nestlings: '',
        fledged_young: '',
        dead_individuals: '',
        dead_nestlings_or_fledlings: '',
        individuals_at_feeding_station: '',
        notes: ''
    },
    {
        class: '',
        site: '2',
        active_individuals: '',
        feeding: '',
        fruit_seed_consumption: '',
        insect_consumption: '',
        calls_or_song: '',
        singing_individuals: '',
        territorial_individuals: '',
        courtship: '',
        mating: '',
        nest_building: '',
        occupied_nest: '',
        nestlings: '',
        fledged_young: '',
        dead_individuals: '',
        dead_nestlings_or_fledlings: '',
        individuals_at_feeding_station: '',
        notes: ''
    },
    {
        class: '',
        site: '3',
        active_individuals: '',
        feeding: '',
        fruit_seed_consumption: '',
        insect_consumption: '',
        calls_or_song: '',
        singing_individuals: '',
        territorial_individuals: '',
        courtship: '',
        mating: '',
        nest_building: '',
        occupied_nest: '',
        nestlings: '',
        fledged_young: '',
        dead_individuals: '',
        dead_nestlings_or_fledlings: '',
        individuals_at_feeding_station: '',
        notes: ''
    }
    ],
    ruby_throated_hummingbird: [{
        class: '',
        site: '1',
        active_individuals: '',
        feeding: '',
        insect_consumption: '',
        flower_consumption: '',
        calls_or_song: '',
        singing_individuals: '',
        territorial_individuals: '',
        courtship: '',
        mating: '',
        nest_building: '',
        occupied_nest: '',
        nestlings: '',
        fledged_young: '',
        dead_individuals: '',
        dead_nestlings_or_fledlings: '',
        individuals_at_feeding_station: '',
        notes: ''
    },
    {
        class: '',
        site: '2',
        active_individuals: '',
        feeding: '',
        insect_consumption: '',
        flower_consumption: '',
        calls_or_song: '',
        singing_individuals: '',
        territorial_individuals: '',
        courtship: '',
        mating: '',
        nest_building: '',
        occupied_nest: '',
        nestlings: '',
        fledged_young: '',
        dead_individuals: '',
        dead_nestlings_or_fledlings: '',
        individuals_at_feeding_station: '',
        notes: ''
    },
    {
        class: '',
        site: '3',
        active_individuals: '',
        feeding: '',
        insect_consumption: '',
        flower_consumption: '',
        calls_or_song: '',
        singing_individuals: '',
        territorial_individuals: '',
        courtship: '',
        mating: '',
        nest_building: '',
        occupied_nest: '',
        nestlings: '',
        fledged_young: '',
        dead_individuals: '',
        dead_nestlings_or_fledlings: '',
        individuals_at_feeding_station: '',
        notes: ''
    }
    ]
};

module.exports = router;
