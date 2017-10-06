var express = require('express');
var router = express.Router();
var path = require('path');
var pool = require('../modules/pool.js');
var encryptLib = require('../modules/encryption');

// Handles request for HTML file
router.get('/', function (req, res, next) {
  console.log('get /register route');
  res.sendFile(path.resolve(__dirname, '../public/views/templates/register.html'));
});

// Handles POST request with new user data
// Handles POST request with new user data
router.post('/', function (req, res) {
  if (req.isAuthenticated()) {
    var saveUser = {
      username: req.body.username,
      password: encryptLib.encryptPassword(req.body.password)
    };
    pool.connect(function (err, client, done) {
      if (err) {
        // when connecting to database failed
        console.log('Error connecting to database', err);
        res.sendStatus(500);
      }
      // when connecting to database worked!
      client.query("INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id",
        [saveUser.username, saveUser.password],
        function (err, result) {
          client.end();

          if (err) {
            console.log("Error inserting data: ", err);
            res.sendStatus(500);
          } else {
            res.sendStatus(201);
          }
        });

    });
  }
});

module.exports = router;
