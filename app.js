const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var employeeController = require('./Routes/routes');

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api', employeeController)

app.listen(3000, () => console.log('Server started at port : 3000'));