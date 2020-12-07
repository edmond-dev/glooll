'use strict';
const mongoose = require('mongoose');
//------------------------------
 const connectdb =  mongoose.connect(process.env.MONGODB_URI, {
   useNewUrlParser: true,
   useUnifiedTopology: true
 }).then(() => {
   console.log("Voila!! db Connected...")
 }).catch(err => {
   console.log(err);
 });


module.exports = connectdb;
