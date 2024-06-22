const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const port = 3000;

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(require('./routes/auth.routes'));

app.listen(port, () => {
    console.log('Servidor andando en el puerto', port)
});
