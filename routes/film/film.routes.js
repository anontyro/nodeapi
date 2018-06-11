
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const request = require('request');

const Film = require('../../models/film/filmModel').Film;

router.get('/', (req, res) => {
    Film.find((err, response) =>{
        res.json(response);
    });
});

module.exports = router;