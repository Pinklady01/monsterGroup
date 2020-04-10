class EventController {

    constructor() {
        this.events = [];
        this._currentId = 1;
    }

    addEvent(event) {
        event.id = this._currentId;
        this.events.push(event);
        this._currentId++;
    }

    findAll() {
        return this.events;
    }

    /**
     *
     * @param id {number}
     * @returns {Event|undefined}
     */
    findById(id) {
        /*
        for(let i = 0; i < this.events.length; i++) {
            if(this.events[i].id === id) {
                return this.events[i];
            }
        }
        return undefined;
        */
        const idx = this.getEventIndexById(id);
        if(idx === -1) {
            return undefined;
        }
        return this.events[idx];
    }

    getEventIndexById(id) {
        return this.events.findIndex((event) => {
            return event.id === id;
        });
    }

    deleteById(id) {
        const idx = this.getEventIndexById(id);
        if(idx === -1) {
            return false;
        }
        this.events.splice(idx, 1);
        return true;
    }
}

module.exports = new EventController();
