
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const request = require('request');

const Film = require('../../models/film/filmModel').Film;

const mongooseFilmApi = require('../../services/films/mongooseFilmApi');

router.get('/', (req, res) => {
    Film.find((err, response) =>{
        res.json(response);
    });
});

router.get('/:title', (req, res) => {
    const filmTitle = req.params.title;
    mongooseFilmApi.getFilmByTitle(filmTitle, (response) =>{
        res.json(response);
    });
});

router.post('/', (req, res) => {
    console.log(req.body);

    mongooseFilmApi.postNewFilm(req.body, (response) =>{

        response.save((err, Film) => {
            if (err) {
                res.send('An error ocurred whilst trying to save the film')
            } else {
                console.log(Film);
                res.send('success! ' + Film.title + ' has been saved correctly');
            }
        })
    }, err => console.log('error catch'))
    
});

module.exports = router;