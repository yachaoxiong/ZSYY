const mongoose= require('mongoose');
const passport= require('passport');
const plm=require('passport-local-mongoose');


const UserSchema= new mongoose.Schema(({

    nickName:              String,
    email:                  String,
    createdOn: {type:Date,default:Date.now},
    resetPasswordToken:    String,
    resetPasswordExpires:  Date
}));

UserSchema.plugin(plm);


module.exports=mongoose.model('User',UserSchema);