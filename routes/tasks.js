const router=require('express').Router();
const Task=require('../models/tasks.js');
const User=require('../models/users.js');

router.get('/',(req,res)=>{
    res.send('this is the tasks main homepage.');
});

router.post('/',(req,res)=>{
    res.send('A new task has been posted my lord.');
});
module.exports=router;