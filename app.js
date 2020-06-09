
require('./config/config')
require('./models/db');

const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const cors = require('cors')
var routesController = require('./controllers/routes-controller');


var app = express();


// middleware
app.use(bodyParser.urlencoded(({extended: true, multi: true})));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', routesController);
const port = process.env.PORT || "3000";

app.get("/", (req, res) => {
    res.status(200).send("Welcome  to my test server.....");
  });

  app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });