const eventRoutes = require('./events');

module.exports = function(app) {
    eventRoutes(app);
};
