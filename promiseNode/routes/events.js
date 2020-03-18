const bodyParser = require('body-parser');
const Event = require('../models').Event;
const eventController = require('../controllers').EventController;
const requetesController = require('../controllers').RequetesController;


module.exports = function(app) {

    app.post('/events', bodyParser.json(), (req, res, next) => {
        if(req.body.name && req.body.date && req.body.price !== undefined) {
            const event = new Event(undefined,
                                    req.body.name,
                                    req.body.date,
                                    req.body.price);
            res.status(201).end();
            const requetes = new Requetes(undefined,
                'get',
                '\'/events\'',
                0,
                Date.now());
            eventController.addEvent(event);
            requetesController.addRequete(requetes)
        } else {
            res.status(400).end();
        }
    });

    app.get('/events', (req, res, next) => {
       res.json(eventController.findAll());
        const requetes = new Requetes(undefined,
            'get/ find all',
            '\'/events\'',
            0,
            Date.now());
        requetesController.addRequete(requetes)
    });

    app.get('/events/:id', (req, res, next) => {
        const id = parseInt(req.params.id);
        const event = eventController.findById(id);
        if(!event) {
            res.status(404).end();
            return;
        }
        res.json(event);
        const requetes = new Requetes(undefined,
            'get by id',
            '/events/:id',
            0,
            Date.now());
        requetesController.addRequete(requetes)
    });

    app.delete('/events/:id', (req, res, next) => {
        const id = parseInt(req.params.id);
        const success = eventController.deleteById(id);
        if(!success) {
            res.status(404).end();
            return;
        }
        res.status(204).end();
        const requetes = new Requetes(undefined,
            'delete id',
            '/events/:id',
            0,
            Date.now());
        requetesController.addRequete(requetes)
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
        const requetes = new Requetes(undefined,
            'Update id',
            '/events/:id',
            0,
            Date.now());
        requetesController.addRequete(requetes)
    })

};
