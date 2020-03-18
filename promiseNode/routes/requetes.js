const requetesController = require('../controllers').RequetesController;

async function writeAsyncPromise(filename) {
    const writePromise = new Promise((resolve, reject) => {
        requetesController.saveFile(filename);
        });
    try{
        await writePromise;
        console.log('vice le js');
    } catch (err) {
        console.error(err);
    }
}

writeAsyncPromise('./requetes.txt');
