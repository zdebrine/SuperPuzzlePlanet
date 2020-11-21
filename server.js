
const mongoose = require('mongoose');

const mongoDB = 'mongodb://13.56.79.11:27017/pmDatabase';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
const { PuzzleController } = require('./database/controller');

const express = require('express');
const app = express();
module.exports.app = app;

const PORT = 9003;
const bodyParser = require('body-parser');

var cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* ============== */

app.get('/puzzle', (req, res) => {
    PuzzleController.getAllPuzzles((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    })
});

app.post('/puzzle', (req, res) => {
    PuzzleController.create(req.body, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    })
});

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));