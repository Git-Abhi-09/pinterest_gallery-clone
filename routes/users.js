const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/firstp1");

const userdata = mongoose.Schema({
    username: String,
    email:String,
    fullname:String,
    posts: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'post'
    }]
});

userdata.plugin(plm);
module.exports = mongoose.model("user" , userdata);
