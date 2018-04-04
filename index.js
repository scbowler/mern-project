const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors());

app.get('/api/get-stuff', (req, res) => {
    res.send({success: true, message: 'Here is some stuff from the back-end'});
});

app.get('/', (req, res) => {
    res.send('<h1>And another thing</h1>');
});

app.listen(PORT, () => {
    console.log('Server running on PORT:' + PORT);
});
