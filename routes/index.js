"use strict";
const db = require('../dbconfig/connections');
const express = require('express');
const path = require('path');
const multer = require('multer');
const uuid = require('uuid').v4;
//const ModalInfo = require("../models/modalPost.js");
const router = express.Router();
//const verify = require('../routes/verifyToken');
//-------------------------------------------
router.get('/', (req, res)=>{
  res.render('home/custom_req',{
    title: "GlobalFriend | Home"
  });
});

router.get('/experiences', (req, res)=>{
  res.render('activities/experiences',{
    title: "GlobalFriend | Skill"
  });
});





// router.post('/', async (req, res) => {
//   const modalInfo = new ModalInfo({
//     place: req.body.place,
//     area: req.body.area
//   });
//   try {
//     const newModalInfo = await modalInfo.save();
//     res.status(400).send(newModalInfo);
//   } catch (e) {
//
//   }
// })
//
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'public/uploads');
//   },
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     const id = uuid();
//     const filePath = `images/${id}${ext}`;
//     ModalInfo.create({ filePath })
//     .then(()=> {
//       cb(null, filePath);
//     });
//   }
// });
//
// const upload = multer({  storage });
//
// router.post('/upload', upload.single('photo'), (req, res, next) => {
//     res.redirect('/');
// });
//





module.exports = router;
