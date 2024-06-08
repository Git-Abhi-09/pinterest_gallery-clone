const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/firstp1");

const postSchema = new mongoose.Schema({
    imageText:{
    type:String,
    require:true,
 },
 image:{
    type:String
 },
 user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
 }
});

module.exports = mongoose.model("post" , postSchema);