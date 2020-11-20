const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 9003;
const { PuzzleController } = require('./database/controller');

app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/pmDatabase", { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", function () {
    console.log("MongoDB database connection established successfully");
});


app.listen(port, () => console.log(`Listening on port ${port}`));

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
})