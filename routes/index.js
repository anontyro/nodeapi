/**
 * Route Bundle
 */
// route imports
const homeRoutes = require('./home/home.routes');
const filmRoutes = require('./film/film.routes');
const errorRoutes = require('./error.routes');

module.exports = (app) => {
    app.use('/', homeRoutes);
    app.use('/film', filmRoutes);
    app.use('**', errorRoutes);
}