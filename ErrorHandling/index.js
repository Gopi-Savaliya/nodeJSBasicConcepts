const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let err = new Error('Something went wrong');
    next(err);
});

app.use((err, req, res, next) => {
    res.status(500);
    res.send('Something went wrong!');
});

app.listen(4500);