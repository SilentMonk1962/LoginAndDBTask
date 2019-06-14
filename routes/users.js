const router=require('express').Router();
const Task=require('../models/tasks.js');
const User=require('../models/users.js');

router.get('/',(req,res)=>{
    res.send('this is the users main homepage.');
});

router.post('/',(req,res)=>{
    res.send('A new user has been made my lord.');
});

module.exports=router;