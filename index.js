const express = require('express');
const cors = require('cors');
const { resolve } = require('path');
const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors());

app.use(express.static(resolve(__dirname, 'client', 'dist')));

function log(msg){
    return (req, res, next) => {
        console.log(msg);
        next();
    }
}

function getUser(){
    return (req, res, next) => {
        req.user = { name: 'Heather Stone', age: 27 };
        next();
    }
}

app.use('/api/get-stuff', log('This is the get stuff route'));

app.get('/api/get-stuff', (req, res) => {
    res.send({success: true, message: 'Here is some stuff from the back-end'});
});

app.post('/api/get-user', getUser(), (req, res) => {
    console.log('User:', req.user);
    res.send({success: true, user: req.user});
});

app.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log('Server running on PORT:' + PORT);
});
