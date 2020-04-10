class RequetesController{
    constructor() {
        this.requetes = [];
        this._currentId = 1;
    }

    addRequete(request) {
        request.id = this._currentId;
        this.requetes.push(request);
        this._currentId++;
    }

    findAll() {
        return this.requetes;
    }

    saveFile(filename){
        writeFile(filename, () => {
            this.findAll()
        }, (err) =>{
            if(err){
                console.error(err);
                return;
            }
        });
    }
}

module.exports = new RequetesController();