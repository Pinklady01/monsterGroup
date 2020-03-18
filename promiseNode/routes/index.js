const eventRoutes = require('./events');
const requetesRoutes = require('./requetes');

module.exports = function(app) {
    eventRoutes(app);
    requetesRoutes(app);
};
