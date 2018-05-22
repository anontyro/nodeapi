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


app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

require('./routes/index')(app);

app.listen(process.env.PORT);
