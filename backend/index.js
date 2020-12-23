const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./config');
const users = require('./routes/users');
const pictures = require('./routes/pictures');

const app = express();
const PORT = process.env.NODE_ENV === 'test ? 8010 : 8000;

app.use(express.json());
app.use(cors());
app.use(express.static('public');

const run = async () => {
    await mongoose.connect(config.database, config.databaseOpt);

    console.log(`Connected to MongoDB ${PORT === 8000 ? 'picsDB' : 'picsDB_test'}`);

    app.use('/users', users);
    app.use('/pictures', pictures);
    app.use((req, res) => {
        res.status(404).send({"error": "404 Not found"});
    });

    app.listen(PORT, () => {
        console.log(`Server started at http://localhost:${PORT}`);
    });
};

run().catch(console.log);
