var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');

if(process.env.DATABASE_URL != undefined) {
    connectionString = process.env.DATABASE_URL + "?ssl=true";
} else {
    // running locally, use our local database instead
    connectionString = 'postgres://localhost:5432/heroku-belwin';
}

//gets table names from belwin database
router.get('/table_names', function (req, res) { // GET for staff dashboard to staff data view
    pool.connect(function (err, client, done) {
        if (err) {
            // when connecting to database failed
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            // when connecting to database worked!
            client.query('SELECT table_name FROM'+connectionString+ '.INFORMATION_SCHEMA.TABLES WHERE table_schema=\'public\' AND table_type=\'BASE TABLE\' AND table_name != \'users\';', 
            function (errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    console.log('Error making table_names query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    // console.log('result.rows is: ', result.rows);
                    res.send(result.rows);
                }
            });
        }
    });
});

//each of the following queries gets the column names from the database.
//because there are only five sets of questions between the 10 organisms, only 5 queries are
// necessary 
router.get('/columns', function (req, res) { // GET for staff dashboard to staff data view
    // Add a SELECT query
    pool.connect(function (err, client, done) {
        if (err) {
            // when connecting to database failed
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            // when connecting to database worked!
            client.query('SELECT table_name, column_name FROM' + connectionString +'.INFORMATION_SCHEMA.COLUMNS WHERE columns.table_schema=\'public\' AND columns.table_name != \'users\' AND columns.column_name NOT IN (\'id\', \'recorded\');', 
            function (errorMakingQuery, result) {
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