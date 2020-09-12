const mongoose= require('mongoose');

const chapterSchema= new mongoose.Schema(({
    courseId:   { type: mongoose.Schema.Types.ObjectId, ref: 'Course'},
    title:      {type: String,unique: true},
    videoLink:  String,
    password:   String,
    createdOn:  {type:Date,default:Date.now},

}));

module.exports=mongoose.model('Chapter',chapterSchema);