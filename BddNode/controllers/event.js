const mysql = require('mysql2');
const Event = require('../models/event');

class EventController {

    constructor() {
    }

    connect() {
        const connection = mysql.createConnectionPromise({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            port: process.env.DB_PORT,
        });
        return connection;
    }

    async addEvent(event) {
        const connection = await this.connect();
        const statement = await connection.execute('INSERT INTO event (name, date, price) VALUES (?, ?, ?)', [
            event.name,
            event.date,
            event.price
        ]);
        connection.end();
    }

    async findAll() {
        const connection = await this.connect();
        const statement = await connection.query('SELECT * FROM event');
        const results = statement[0];
        const events = [];
        results.forEach((row) => {
            events.push(new Event(row.id, row.name, row.date, row.price));
        });
        connection.end();
        return events;
    }

    /**
     *
     * @param id {number}
     * @returns {Event|undefined}
     */
    async findById(id) {
        const connection = await this.connect();
        const statement = await connection.query('SELECT * FROM event WHERE id = ?', [id]);
        connection.end();
        return statement;
    }

    async deleteById(id) {
        const connection = await this.connect();
        const statement = await connection.execute('DELETE FROM event WHERE id = ?', [id]);
        connection.end();
    }
}

module.exports = new EventController();
