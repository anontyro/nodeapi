/**
 * Route Bundle
 */
// route imports
const homeRoutes = require('./home/home.routes');

const errorRoutes = require('./error.routes');

module.exports = (app) => {
    app.use('/', homeRoutes);
    app.use('**', errorRoutes);
}