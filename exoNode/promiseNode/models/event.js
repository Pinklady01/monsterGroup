class Event {

    constructor(id, name, date, price) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.price = price;
    }

    toString() {
        return `Event (${this.id},${this.name},${this.date},${this.price})`
    }
}

module.exports = Event;
