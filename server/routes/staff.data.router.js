var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');
var moment = require('../public/vendors/moment.js')

//to compare today's current date to dates in db
var todaysDate = new Date();
console.log(todaysDate);
var todaysDateString = pgFormatDate(todaysDate);
console.log(typeof todaysDateString);

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

//pulls y/n/? totals for all 3 bur oaks matching today's date and the selected class number
router.get('/bur/:classNum', function (req, res) {
    // Add a SELECT query
    if (req.isAuthenticated()) {
        var userInfo = {
            username: req.user.username
        };
        var classNum = req.params.classNum.toString();
        console.log('classNum:', classNum)
        var query = buildGet(allData.bur_oak[0], 'bur_oak', classNum);
        console.log('bur oak get query: ');
        console.log(query);

        pool.connect(function (err, client, done) {
            if (err) {
                // when connecting to database failed
                console.log('Error connecting to database', err);
                res.sendStatus(500);
            } else {
                // when connecting to database worked!
                if (classNum == "0") {
                    client.query(query, function (errorMakingQuery, result) {
                        done();
                        if (errorMakingQuery) {
                            console.log('Error making database query', errorMakingQuery);
                            res.sendStatus(500);
                        } else {
                            console.log('result.rows is: ', result.rows);
                            res.send(result.rows);
                        }
                    });
                } else {
                    client.query(query, [classNum], function (errorMakingQuery, result) {
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
            }
        });
    }
});

router.get('/bur/notes/:classNum', function (req, res) {
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
                if (classNum == "0") {
                    client.query('SELECT notes FROM bur_oak WHERE date = \'' + todaysDateString + '\';' , function (errorMakingQuery, result) {
                        done();
                        if (errorMakingQuery) {
                            console.log('Error making database query', errorMakingQuery);
                            res.sendStatus(500);
                        } else {
                            console.log('result.rows is: ', result.rows);
                            res.send(result.rows);
                        }
                    });
                } else {
                    client.query('SELECT notes FROM bur_oak WHERE date = \'' + todaysDateString + '\' AND class = $1;', [classNum], function (errorMakingQuery, result) {
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
        console.log('classNum:', classNum)
        var query = buildGet(allData.common_buckthorn[0], 'common_buckthorn', classNum);
        console.log('common buckthorn get query: ');
        console.log(query);

        pool.connect(function (err, client, done) {
            if (err) {
                // when connecting to database failed
                console.log('Error connecting to database', err);
                res.sendStatus(500);
            } else {
                // when connecting to database worked!
                if (classNum == "0") {
                    client.query(query, function (errorMakingQuery, result) {
                        done();
                        if (errorMakingQuery) {
                            console.log('Error making database query', errorMakingQuery);
                            res.sendStatus(500);
                        } else {
                            console.log('result.rows is: ', result.rows);
                            res.send(result.rows);
                        }
                    });
                } else {
                    client.query(query, [classNum], function (errorMakingQuery, result) {
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
            }
        });
    }
});

router.get('/buckthorn/notes/:classNum', function (req, res) {
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
                if (classNum == "0") {
                    client.query('SELECT notes FROM common_buckthorn WHERE date = \'' + todaysDateString + '\';', function (errorMakingQuery, result) {
                        done();
                        if (errorMakingQuery) {
                            console.log('Error making database query', errorMakingQuery);
                            res.sendStatus(500);
                        } else {
                            console.log('result.rows is: ', result.rows);
                            res.send(result.rows);
                        }
                    });
                } else {
                    client.query('SELECT notes FROM common_buckthorn WHERE date = \'' + todaysDateString + '\';', [classNum], function (errorMakingQuery, result) {
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
        console.log('classNum:', classNum)
        var query = buildGet(allData.common_milkweed[0], 'common_milkweed', classNum);
        console.log('common milkweed get query: ');
        console.log(query);

        pool.connect(function (err, client, done) {
            if (err) {
                // when connecting to database failed
                console.log('Error connecting to database', err);
                res.sendStatus(500);
            } else {
                // when connecting to database worked!
                if (classNum == "0") {
                    client.query(query, function (errorMakingQuery, result) {
                        done();
                        if (errorMakingQuery) {
                            console.log('Error making database query', errorMakingQuery);
                            res.sendStatus(500);
                        } else {
                            console.log('result.rows is: ', result.rows);
                            res.send(result.rows);
                        }
                    });
                } else {
                    client.query(query, [classNum], function (errorMakingQuery, result) {
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
            }
        });
    }
});

router.get('/milkweed/notes/:classNum', function (req, res) {
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
                if (classNum == "0") {
                    client.query('SELECT notes FROM common_milkweed WHERE date = \'' + todaysDateString + '\';', function (errorMakingQuery, result) {
                        done();
                        if (errorMakingQuery) {
                            console.log('Error making database query', errorMakingQuery);
                            res.sendStatus(500);
                        } else {
                            console.log('result.rows is: ', result.rows);
                            res.send(result.rows);
                        }
                    });
                } else {
                    client.query('SELECT notes FROM common_milkweed WHERE date = \'' + todaysDateString + '\' AND class = $1;', [classNum], function (errorMakingQuery, result) {
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
            }
        });
    }
});



router.get('/dark/:classNum', function (req, res) {
    // Add a SELECT query
    if (req.isAuthenticated()) {
        var userInfo = {
            username: req.user.username
        };
        var classNum = req.params.classNum.toString();
        console.log('classNum:', classNum)
        var query = buildGet(allData.dark_eyed_junco[0], 'dark_eyed_junco', classNum);
        console.log('dark eyed junco get query: ');
        console.log(query);

        pool.connect(function (err, client, done) {
            if (err) {
                // when connecting to database failed
                console.log('Error connecting to database', err);
                res.sendStatus(500);
            } else {
                // when connecting to database worked!
                if (classNum == "0") {
                    client.query(query, function (errorMakingQuery, result) {
                        done();
                        if (errorMakingQuery) {
                            console.log('Error making database query', errorMakingQuery);
                            res.sendStatus(500);
                        } else {
                            console.log('result.rows is: ', result.rows);
                            res.send(result.rows);
                        }
                    });
                } else {
                    client.query(query, [classNum], function (errorMakingQuery, result) {
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
            }
        });
    }
});

router.get('/dark/notes/:classNum', function (req, res) {
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
                if (classNum == "0") {
                    client.query('SELECT notes FROM dark_eyed_junco WHERE date = \'' + todaysDateString + '\';', function (errorMakingQuery, result) {
                        done();
                        if (errorMakingQuery) {
                            console.log('Error making database query', errorMakingQuery);
                            res.sendStatus(500);
                        } else {
                            console.log('result.rows is: ', result.rows);
                            res.send(result.rows);
                        }
                    });
                } else {
                    client.query('SELECT notes FROM dark_eyed_junco WHERE date = \'' + todaysDateString + '\' AND class = $1;', [classNum], function (errorMakingQuery, result) {
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
            }
        });
    }
});


router.get('/eastern/:classNum', function (req, res) {
    // Add a SELECT query
    if (req.isAuthenticated()) {
        var userInfo = {
            username: req.user.username
        };
        var classNum = req.params.classNum.toString();
        console.log('classNum:', classNum)
        var query = buildGet(allData.eastern_bluebird[0], 'eastern_bluebird', classNum);
        console.log('eastern bluebird get query: ');
        console.log(query);

        pool.connect(function (err, client, done) {
            if (err) {
                // when connecting to database failed
                console.log('Error connecting to database', err);
                res.sendStatus(500);
            } else {
                // when connecting to database worked!
                if (classNum == "0") {
                    client.query(query, function (errorMakingQuery, result) {
                        done();
                        if (errorMakingQuery) {
                            console.log('Error making database query', errorMakingQuery);
                            res.sendStatus(500);
                        } else {
                            console.log('result.rows is: ', result.rows);
                            res.send(result.rows);
                        }
                    });
                } else {
                    client.query(query, [classNum], function (errorMakingQuery, result) {
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
            }
        });
    }
});

router.get('/eastern/notes/:classNum', function (req, res) {
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
                if (classNum == "0") {
                    client.query('SELECT notes FROM eastern_bluebird WHERE date = \'' + todaysDateString + '\';', function (errorMakingQuery, result) {
                        done();
                        if (errorMakingQuery) {
                            console.log('Error making database query', errorMakingQuery);
                            res.sendStatus(500);
                        } else {
                            console.log('result.rows is: ', result.rows);
                            res.send(result.rows);
                        }
                    });
                } else {
                    client.query('SELECT notes FROM eastern_bluebird WHERE date = \'' + todaysDateString + '\' AND class = $1;', [classNum], function (errorMakingQuery, result) {
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
            }
        });
    }
});

router.get('/ground/:classNum', function (req, res) {
    // Add a SELECT query
    if (req.isAuthenticated()) {
        var userInfo = {
            username: req.user.username
        };
        var classNum = req.params.classNum.toString();
        console.log('classNum:', classNum)
        var query = buildGet(allData.ground_squirrel[0], 'ground_squirrel', classNum);
        console.log('ground squirrel get query: ');
        console.log(query);

        pool.connect(function (err, client, done) {
            if (err) {
                // when connecting to database failed
                console.log('Error connecting to database', err);
                res.sendStatus(500);
            } else {
                // when connecting to database worked!
                if (classNum == "0") {
                    client.query(query, function (errorMakingQuery, result) {
                        done();
                        if (errorMakingQuery) {
                            console.log('Error making database query', errorMakingQuery);
                            res.sendStatus(500);
                        } else {
                            console.log('result.rows is: ', result.rows);
                            res.send(result.rows);
                        }
                    });
                } else {
                    client.query(query, [classNum], function (errorMakingQuery, result) {
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
            }
        });
    }
});

router.get('/ground/notes/:classNum', function (req, res) {
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
                if (classNum == "0") {
                    client.query('SELECT notes FROM ground_squirrel WHERE date = \'' + todaysDateString + '\';', function (errorMakingQuery, result) {
                        done();
                        if (errorMakingQuery) {
                            console.log('Error making database query', errorMakingQuery);
                            res.sendStatus(500);
                        } else {
                            console.log('result.rows is: ', result.rows);
                            res.send(result.rows);
                        }
                    });
                } else {
                    client.query('SELECT notes FROM ground_squirrel WHERE date = \'' + todaysDateString + '\' AND class = $1;', [classNum], function (errorMakingQuery, result) {
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
        console.log('classNum:', classNum)
        var query = buildGet(allData.northern_red_oak[0], 'northern_red_oak', classNum);
        console.log('northern red oak get query: ');
        console.log(query);

        pool.connect(function (err, client, done) {
            if (err) {
                // when connecting to database failed
                console.log('Error connecting to database', err);
                res.sendStatus(500);
            } else {
                // when connecting to database worked!
                if (classNum == "0") {
                    client.query(query, function (errorMakingQuery, result) {
                        done();
                        if (errorMakingQuery) {
                            console.log('Error making database query', errorMakingQuery);
                            res.sendStatus(500);
                        } else {
                            console.log('result.rows is: ', result.rows);
                            res.send(result.rows);
                        }
                    });
                } else {
                    client.query(query, [classNum], function (errorMakingQuery, result) {
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
            }
        });
    }
});

router.get('/northern/notes/:classNum', function (req, res) {
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
                if (classNum == "0") {
                    client.query('SELECT notes FROM northern_red_oak WHERE date = \'' + todaysDateString + '\';', function (errorMakingQuery, result) {
                        done();
                        if (errorMakingQuery) {
                            console.log('Error making database query', errorMakingQuery);
                            res.sendStatus(500);
                        } else {
                            console.log('result.rows is: ', result.rows);
                            res.send(result.rows);
                        }
                    });
                } else {
                    client.query('SELECT notes FROM northern_red_oak WHERE date = \'' + todaysDateString + '\' AND class = $1;', [classNum], function (errorMakingQuery, result) {
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
        console.log('classNum:', classNum)
        var query = buildGet(allData.paper_birch[0], 'paper_birch', classNum);
        console.log('paper birch get query: ');
        console.log(query);

        pool.connect(function (err, client, done) {
            if (err) {
                // when connecting to database failed
                console.log('Error connecting to database', err);
                res.sendStatus(500);
            } else {
                // when connecting to database worked!
                if (classNum == "0") {
                    client.query(query, function (errorMakingQuery, result) {
                        done();
                        if (errorMakingQuery) {
                            console.log('Error making database query', errorMakingQuery);
                            res.sendStatus(500);
                        } else {
                            console.log('result.rows is: ', result.rows);
                            res.send(result.rows);
                        }
                    });
                } else {
                    client.query(query, [classNum], function (errorMakingQuery, result) {
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
            }
        });
    }
});

router.get('/paper/notes/:classNum', function (req, res) {
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
                if (classNum == "0") {
                    client.query('SELECT notes FROM paper_birch WHERE date = \'' + todaysDateString + '\';', function (errorMakingQuery, result) {
                        done();
                        if (errorMakingQuery) {
                            console.log('Error making database query', errorMakingQuery);
                            res.sendStatus(500);
                        } else {
                            console.log('result.rows is: ', result.rows);
                            res.send(result.rows);
                        }
                    });
                } else {
                    client.query('SELECT notes FROM paper_birch WHERE date = \'' + todaysDateString + '\' AND class = $1;', [classNum], function (errorMakingQuery, result) {
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
        console.log('classNum:', classNum)
        var query = buildGet(allData.quaking_aspen[0], 'quaking_aspen', classNum);
        console.log('quaking aspen get query: ');
        console.log(query);

        pool.connect(function (err, client, done) {
            if (err) {
                // when connecting to database failed
                console.log('Error connecting to database', err);
                res.sendStatus(500);
            } else {
                // when connecting to database worked!
                if (classNum == "0") {
                    client.query(query, function (errorMakingQuery, result) {
                        done();
                        if (errorMakingQuery) {
                            console.log('Error making database query', errorMakingQuery);
                            res.sendStatus(500);
                        } else {
                            console.log('result.rows is: ', result.rows);
                            res.send(result.rows);
                        }
                    });
                } else {
                    client.query(query, [classNum], function (errorMakingQuery, result) {
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
            }
        });
    }
});

router.get('/quaking/notes/:classNum', function (req, res) {
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
                if (classNum == "0") {
                    client.query('SELECT notes FROM quaking_aspen WHERE date = \'' + todaysDateString + '\';', function (errorMakingQuery, result) {
                        done();
                        if (errorMakingQuery) {
                            console.log('Error making database query', errorMakingQuery);
                            res.sendStatus(500);
                        } else {
                            console.log('result.rows is: ', result.rows);
                            res.send(result.rows);
                        }
                    });
                } else {
                    client.query('SELECT notes FROM quaking_aspen WHERE date = \'' + todaysDateString + '\' AND class = $1;', [classNum], function (errorMakingQuery, result) {
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
            }
        });
    }
});


router.get('/ruby/:classNum', function (req, res) {
    // Add a SELECT query
    if (req.isAuthenticated()) {
        var userInfo = {
            username: req.user.username
        };
        var classNum = req.params.classNum.toString();
        console.log('classNum:', classNum)
        var query = buildGet(allData.ruby_throated_hummingbird[0], 'ruby_throated_hummingbird', classNum);
        console.log('ruby throated hummingbird get query: ');
        console.log(query);

        pool.connect(function (err, client, done) {
            if (err) {
                // when connecting to database failed
                console.log('Error connecting to database', err);
                res.sendStatus(500);
            } else {
                // when connecting to database worked!
                if (classNum == "0") {
                    client.query(query, function (errorMakingQuery, result) {
                        done();
                        if (errorMakingQuery) {
                            console.log('Error making database query', errorMakingQuery);
                            res.sendStatus(500);
                        } else {
                            console.log('result.rows is: ', result.rows);
                            res.send(result.rows);
                        }
                    });
                } else {
                    client.query(query, [classNum], function (errorMakingQuery, result) {
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
            }
        });
    }
});

router.get('/ruby/notes/:classNum', function (req, res) {
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
                if (classNum == "0") {
                    client.query('SELECT notes FROM ruby_throated_hummingbird WHERE date = \'' + todaysDateString + '\';', function (errorMakingQuery, result) {
                        done();
                        if (errorMakingQuery) {
                            console.log('Error making database query', errorMakingQuery);
                            res.sendStatus(500);
                        } else {
                            console.log('result.rows is: ', result.rows);
                            res.send(result.rows);
                        }
                    });
                } else {
                    client.query('SELECT notes FROM ruby_throated_hummingbird WHERE date = \'' + todaysDateString + '\' AND class = $1;', [classNum], function (errorMakingQuery, result) {
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
            }
        });
    }
});

//pulls y/n/? totals for all 3 bur oaks matching today's date and the selected class number
router.get('/pin/:classNum', function (req, res) {
    // Add a SELECT query
    if (req.isAuthenticated()) {
        var userInfo = {
            username: req.user.username
        };
        var classNum = req.params.classNum.toString();
        console.log('classNum:', classNum)
        var query = buildGet(allData.pin_oak[0], 'pin_oak', classNum);
        console.log('pin oak get query: ');
        console.log(query);

        pool.connect(function (err, client, done) {
            if (err) {
                // when connecting to database failed
                console.log('Error connecting to database', err);
                res.sendStatus(500);
            } else {
                // when connecting to database worked!
                if (classNum == "0") {
                    client.query(query, function (errorMakingQuery, result) {
                        done();
                        if (errorMakingQuery) {
                            console.log('Error making database query', errorMakingQuery);
                            res.sendStatus(500);
                        } else {
                            console.log('result.rows is: ', result.rows);
                            res.send(result.rows);
                        }
                    });
                } else {
                    client.query(query, [classNum], function (errorMakingQuery, result) {
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
            }
        });
    }
});

router.get('/pin/notes/:classNum', function (req, res) {
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
                if (classNum == "0") {
                    client.query('SELECT notes FROM pin_oak WHERE date = \'' + todaysDateString + '\';', function (errorMakingQuery, result) {
                        done();
                        if (errorMakingQuery) {
                            console.log('Error making database query', errorMakingQuery);
                            res.sendStatus(500);
                        } else {
                            console.log('result.rows is: ', result.rows);
                            res.send(result.rows);
                        }
                    });
                } else {
                    client.query('SELECT notes FROM pin_oak WHERE date = \'' + todaysDateString + '\' AND class = $1;', [classNum], function (errorMakingQuery, result) {
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
            }
        });
    }
});

//SELECT site, 
function buildGet(row, organism, classNum) {
    // console.log('buildGet called');

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
    sumStatements += ' WHERE date = \'' + todaysDateString + '\'';
    if (classNum != "0") {
        sumStatements += ' AND class = $1'
    } 
    sumStatements += ' GROUP BY site ORDER BY site ASC';

    // console.log('sum statements');
     console.log('sum statements', sumStatements);
    return sumStatements;
}

//date formatting

function pgFormatDate(date) {
    // via https://stackoverflow.com/questions/44988104/remove-time-and-timezone-from-string-dates/44997832#44997832
    if (typeof date != "string") {
        date = date.toDateString();
    }

    if (date) {
        if (moment(date.substring(4, 15), 'MMM DD YYYY').isValid() && date.substring(4, 15).length === 11) {
            // this handles dates like: "Fri Jul 06 2017 22:10:08 GMT-0500 (CDT)"    
            return moment(date.substring(4, 15), 'MMM DD YYYY').format('YYYY-MM-DD');
        } else if (moment(date.substring(0, 10), "YYYY-MM-DD").isValid() && date.substring(0, 10).length === 10) {
            // this handles dates like: "2017-07-06T02:59:12.037Z" and "2017-07-06"
            return date.substring(0, 10);
        } else {
            throw 'Date not formatted correctly';
        }
    } else {
        throw 'Date must exists for availability to insert'
    }
}

// function buildGetEverything(row, organism) {
//     // console.log('buildGetEverything called');

//     var sumStatements = 'SELECT site,';
//     var yesNoMaybe = ['yes', 'no', 'maybe'];
//     Object.keys(row).forEach(function (question) {
//         if (question !== 'class' && question !== 'site' && question !== 'notes') {
//             yesNoMaybe.forEach(function (word) {

//                 sumStatements += ' sum(case when ' + question + ' = \'' + word + '\' then 1 else 0 end) as ' + question + '_' + word + ',';
//             });
//         }
//     });

//     //take off last comma
//     sumStatements = sumStatements.substring(0, sumStatements.length - 1);;
//     sumStatements += ' from ' + organism;
//     sumStatements += ' WHERE date = CURRENT_DATE GROUP BY site ORDER BY site ASC';

//     // console.log('sum statements');
//     // console.log(sumStatements);
//     return sumStatements;
// }

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
        fruit_or_seed_consumption: '',
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
        dead_nestlings_or_fledglings: '',
        individuals_at_feeding_station: '',
        notes: ''
    },
    {
        class: '',
        site: '2',
        active_individuals: '',
        feeding: '',
        fruit_or_seed_consumption: '',
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
        dead_nestlings_or_fledglings: '',
        individuals_at_feeding_station: '',
        notes: ''
    },
    {
        class: '',
        site: '3',
        active_individuals: '',
        feeding: '',
        fruit_or_seed_consumption: '',
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
        dead_nestlings_or_fledglings: '',
        individuals_at_feeding_station: '',
        notes: ''
    }
    ],
    dark_eyed_junco: [{
        class: '',
        site: '1',
        active_individuals: '',
        feeding: '',
        fruit_or_seed_consumption: '',
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
        dead_nestlings_or_fledglings: '',
        individuals_at_feeding_station: '',
        notes: ''
    },
    {
        class: '',
        site: '2',
        active_individuals: '',
        feeding: '',
        fruit_or_seed_consumption: '',
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
        dead_nestlings_or_fledglings: '',
        individuals_at_feeding_station: '',
        notes: ''
    },
    {
        class: '',
        site: '3',
        active_individuals: '',
        feeding: '',
        fruit_or_seed_consumption: '',
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
        dead_nestlings_or_fledglings: '',
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
        flower_visitation: '',
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
        dead_nestlings_or_fledglings: '',
        individuals_at_feeding_station: '',
        notes: ''
    },
    {
        class: '',
        site: '2',
        active_individuals: '',
        feeding: '',
        insect_consumption: '',
        flower_visitation: '',
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
        dead_nestlings_or_fledglings: '',
        individuals_at_feeding_station: '',
        notes: ''
    },
    {
        class: '',
        site: '3',
        active_individuals: '',
        feeding: '',
        insect_consumption: '',
        flower_visitation: '',
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
        dead_nestlings_or_fledglings: '',
        individuals_at_feeding_station: '',
        notes: ''
    }
    ],
    pin_oak: [{
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
    ]
};

module.exports = router;
