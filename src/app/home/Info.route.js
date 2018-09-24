const express = require('express');
const app = express();
const InfoRoutes = express.Router();

// Require AdUnit model in our routes module
let Info = require('../models/Info');

// Defined store route
InfoRoutes.route('/add').post(function (req, res) {
  let info = new Info(req.body);
  info.save()
    .then(game => {
      res.status(200).json({'Info': 'AdUnit in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

InfoRoutes.route('/').get(function (req, res) {
  Info.find(function (err, info){
    if(err){
      console.log(err);
    }
    else {
      res.json(adUnits);
    }
  });
});

// Defined get data(index or listing) route
InfoRoutes.route('/').get(function (req, res) {
  Info.find(function (err, Info){
    if(err){
      console.log(err);
    }
    else {
      res.json(Info);
    }
  });
});
