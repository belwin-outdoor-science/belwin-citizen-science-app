var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');

router.post('/bur_oak', function (req, res) {
    var newBurOak = req.body;
    console.log('bur_oak router post called ');
    pool.connect(function (err, client, done) {
        if (err) {
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            client.query('INSERT INTO bur_oak (current_date, class, breaking_leaf_buds, leaves, increasing_leaf_size, colored_leaves, falling_leaves, flowers_or_flower_buds, open_flowers, pollen_release, fruits, ripe_fruits, recent_fruit_or_seed_drop, notes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15);',
                [newBurOak.current_date, newBurOak.class, newBurOak.breaking_leaf_buds, newBurOak.leaves, newBurOak.increasing_leaf_size, newBurOak.colored_leaves, newBurOak.falling_leaves, newBurOak.flowers_or_flower_buds, newBurOak.open_flowers, newBurOak.pollen_release, newBurOak.fruits, newBurOak.ripe_fruits, newBurOak.recent_fruit_or_seed_drop, newBurOak.notes]);
            done();
            if (err) {
                console.log('Error making query: ', err);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    });
});

module.exports = router;