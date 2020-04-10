class Requetes {
    constructor(id, method, url, executionTime, time) {
        this.id = id;
        this.method = method;
        this.url = url;
        this.executionTime = executionTime;
        this.time = time;
    }
    toString() {
        return `Requete (${this.id},${this.method},${this.url},${this.executionTime},${this.time})`
    }

}

module.exports = Requetes;