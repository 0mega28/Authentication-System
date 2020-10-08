const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

const app = express();




// EJS 
app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

// app.use('/register', require('./routes/index'));

const PORT = 8081;

app.listen(PORT, console.log(`Server started on port ${PORT}`));