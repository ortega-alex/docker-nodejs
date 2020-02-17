const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// initialization
const app = express();

// settings
app.set('port', process.env.PORT || 8080);

// midlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// routes
app.get('/', (req, res) => {
    res.send('hello world 2');
});

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});