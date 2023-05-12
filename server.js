const express = require('express');
const mongoose = require('mongoose')
const PORT = 8400;
const db = 'mongodb://127.0.0.1/Practice';
const practicerouter = require('./routes')

const app = express();

app.use(express.json());
app.use('/api', practicerouter)

mongoose.connect(db)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is alive, listening on port ${PORT}`);
    })
})
.catch((e) => {
    console.log(e);
})
