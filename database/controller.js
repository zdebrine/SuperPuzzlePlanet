const { Puzzle } = require('./model');

const PuzzleController = {
    getAllPuzzles: (callback) => {
        Puzzle.find((err, data) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, data);
            }
        });
    },
    create: (body, callback) => {
        console.log(body);
        Puzzle.create(body, (err, data) => {
            if (err) {
                console.log(err)
                callback(err, null);
            } else {
                console.log('success');
                callback(null, data);
            }
        });
    },
}

module.exports = {
    PuzzleController
};