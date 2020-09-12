const mongoose= require('mongoose');

const courseSchema= new mongoose.Schema(({

    title:{type: String,unique: true},
    subTitle:String,
    description:String,
    createdOn: {type:Date,default:Date.now},

}));
module.exports=mongoose.model('Course',courseSchema);