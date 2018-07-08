const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const models = require('./server/models')

// Set up the express app
const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.get('*', (req, res) => res.status(200).send({
//   message: 'Welcome to the beginning of nothingness.',
// }));




app.get('/jsonFarm', (req,res) => {
  models.farm.findAll({
    order: [
      ['id']
    ]
  }).then((farm) =>{
    res.json({farm:farm})
  });
});

module.exports = app;
