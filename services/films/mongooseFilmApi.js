
const request = require('request');
const mongoose = require('mongoose');

const Film = require('../../models/film/filmModel').Film;

 module.exports = {
     getFilmByTitle: (title, callback) => {
         const rex = new RegExp('^' + title, 'i');
         Film.find({title: rex})
            .exec( (err, film) => {
                if(err) {
                    console.error(err);
                    callback(err);
                } else {
                    callback(film);
                }
            });
     },
     postNewFilm: (body, callback) =>{

        if(!body.title || !body.releaseDate || !body.blurb) {
            console.error('not all fields present');
            throw new Error('not all fields have been entered correctly');
        } else { 

            const film = new Film({
                title: body.title,
                releaseDate: body.releaseDate,
                blurb: body.blurb,
                dateAdded: Date.now()
            });
            callback(film);
        }

    }

 }