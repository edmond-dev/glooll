'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
  res.render('activities/experiences', {
    title:"GlobalFriend | Travel"
  });
});

module.exports = router;
