const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sequenceSchema = new Schema({
    _id: Number,
    sequence_value: Number,
})

const Sequence = mongoose.model('Sequence', sequenceSchema)

// used to access sequence documents for each id, so it can start 1 and count up
const getNextSequenceValue = async (sequenceName) => {
    const sequenceDocument = await Sequence.findOneAndUpdate({ _id: sequenceName }, { $inc: { sequence_value: 1 } });
    return sequenceDocument.sequence_value;
}

const puzzleSchema = new Schema({
    coordinates: Array,
    title: String,
    riddle: String,
    answer: String,
    creator: String,
});

const Puzzle = mongoose.model("puzzle", puzzleSchema, 'puzzles');

module.exports = {
    Puzzle,
    getNextSequenceValue
}