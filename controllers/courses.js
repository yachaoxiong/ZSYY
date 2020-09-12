var express = require('express');
var router = express.Router();
const functions=require('../config/functions');


router.get('/chapter/:_id',functions.isLoggedIn,(req,res,next)=>{
    let questions=[{question:' if your are planning a longer trip,what can you do?',
                    a1:'Ask a friend to drop you off',
                    a2:'Ask a friend to drop you off2',
                    a3:'Ask a friend to drop you off3',
                    correct:'Ask a friend to drop you off2'},
                    {question:'The mechanic checked the car ____?',
                        a1:'at his shop',
                        a2:'in the parking lot',
                        a3:'beside the road',
                        correct:'at his shop'}]
    res.render('courses/chapter',{
        title:'芝士英语',
        user:req.user,
        questions:questions

    })
})

router.post('/chapter/:_id',functions.isLoggedIn,(req,res,next)=>{
    let questions=[{question:' if your are planning a longer trip,what can you do?',
        a1:'Ask a friend to drop you off',
        a2:'Ask a friend to drop you off2',
        a3:'Ask a friend to drop you off3',
        correct:'Ask a friend to drop you off2'},
        {question:'The mechanic checked the car ____?',
            a1:'at his shop',
            a2:'in the parking lot',
            a3:'beside the road',
            correct:'at his shop'}]
    let _id=req.params._id;

    let answer1=req.body.q1;
    let answer2=req.body.q2;
    console.log(`answer1: ${answer1}`)
    console.log(`answer2: ${answer2}`)
    res.redirect('/courses/chapter/2');
})
router.get('/chapter/:_id/words',functions.isLoggedIn,(req,res,next)=>{
    res.render('courses/words',{title:'Words',user:req.user})
})
router.get('/chapter/:_id/wordExam',functions.isLoggedIn,(req,res,next)=>{
    res.render('courses/wordExam',{title:'单词测验',user:req.user})
})

router.get('/chapter/:_id/grade',functions.isLoggedIn,(req,res,next)=>{
    res.render('courses/grade',{title:'Grade',user:req.user})
})
router.get('/:_id', function(req, res, next) {
    res.render('courses/details', { title: '芝士英语 ',user:req.user });
});
module.exports = router;
