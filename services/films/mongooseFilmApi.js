
const request = require('request');
const mongoose = require('mongoose');

const Film = require('../../models/film/filmModel').Film;

 module.exports = {
     getFilmByTitle: (title, callback) => {
         Film.find({title: title})
            .exec( (err, film) => {
                if(err) {
                    console.error(err);
                    callback(err);
                } else {
                    callback(film);
                }
            });
     }
 }