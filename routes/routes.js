'use strict'
var express = require('express');
var appServerService = require("../services/services.js");
var router = express.Router();



router.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

router.get('/hola',appServerService.getProcesos);


module.exports = router;

// router.get('/getProcesos', appServerService.testMethod);
// var appRouter = function (app) {
//   app.get("/hola", function(req, res) {
//     obj = {_id:1, name:'Rocky', city:'Omaha', state:'NE'};
//     res.status(200).send(obj);
//   });
// // }
// module.exports = router;
