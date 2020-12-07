'use strict';
const express = require('express');
const router = express.Router();

router.get('/travel_exp', (req, res)=>{
  res.render("travel/travel_exp", {
    title: "GlobalFriend | Travel"
  });
});

module.exports = router;
