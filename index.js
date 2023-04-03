require('dotenv').config();
const express = require('express');
const app = express();
const  cors = require('cors')
const path = require('path');
const verifyJWT = require('./middleware/verifyJwt');
const   morgan = require('morgan')


const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const PORT = process.env.PORT || 3500;

// Connect to MongoDB
connectDB();

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('tiny'))




// routes
app.use('/register', require('./routes/register'));

app.use('/login', require('./routes/login'));



app.use(verifyJWT);
app.use('/farms', require('./routes/farm'));
app.use('/farmFields', require('./routes/fields'));
app.use('/sensors', require('./routes/sensors'));

// app.use('/users', require('./routes/api/users'));





mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});