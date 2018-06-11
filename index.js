/**
 * 
 */

 // PACKAGES -------------------------------------------------------------
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const request = require('request');
const app = express();
require('dotenv').config()

// DATABASE ---------------------------------------
mongoose.connect(process.env.MONGOOSE_CONN);

// MIDDLEWARE ------------------------------------
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

// LOAD STATIC FILES ------------------------------
app.use(express.static(__dirname + '/public'));

// ROUTER ----------------------------------------
require('./routes/index')(app);

//SEVER ------------------------------------------
app.listen(process.env.PORT);
