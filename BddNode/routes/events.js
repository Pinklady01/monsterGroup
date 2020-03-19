const bodyParser = require('body-parser');
const Event = require('../models').Event;
const eventController = require('../controllers').EventController;

module.exports = function(app) {


    app.get('/test', (req, res, next) => {
        eventController.connect();
    });

    app.post('/events', bodyParser.json(), (req, res, next) => {
        if(req.body.name && req.body.date && req.body.price !== undefined) {
            const event = new Event(undefined,
                                    req.body.name,
                                    req.body.date,
                                    req.body.price);
            eventController.addEvent(event);
            res.status(201).end();
        } else {
            res.status(400).end();
        }
    });

    app.get('/events', (req, res, next) => {
        eventController.findAll().then( (val) => {
            res.json(val);
        });
    });

    app.get('/events/:id', (req, res, next) => {
        const id = parseInt(req.params.id);
        const event = eventController.findById(id);
        if(!event) {
            res.status(404).end();
            return;
        }
        res.json(event);
    });

    app.delete('/events/:id', (req, res, next) => {
        const id = parseInt(req.params.id);
        const success = eventController.deleteById(id);
        if(!success) {
            res.status(404).end();
            return;
        }
        res.status(204).end();
    });

    app.put('/events/:id', bodyParser.json(), (req, res, next) => {
        const id = parseInt(req.params.id);
        const event = eventController.findById(id);
        if(!event) {
            res.status(404).end();
            return;
        }
        if(req.body.name) {
            event.name = req.body.name;
        }
        if(req.body.date) {
            event.date = req.body.date;
        }
        if(req.body.price) {
            event.price = req.body.price;
        }
        res.status(204).end();
    })

};
