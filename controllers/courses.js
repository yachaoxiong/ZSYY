var express = require('express');
var router = express.Router();


router.get('/:_id', function(req, res, next) {
    res.render('courses/details', { title: '芝士英语 ' });
});
router.get('/chapter/:_id',(req,res,next)=>{
    res.render('courses/chapter',{title:'芝士英语'})
})
module.exports = router;
