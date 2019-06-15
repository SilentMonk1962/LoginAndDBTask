const router=require('express').Router();
//const Task=require('../models/tasks.js');
const User=require('../models/users.js');
const bodyParser=require('body-parser');
router.use(bodyParser.json());
router.get('/',(req,res)=>{
    res.send('this is the users main homepage.');
});

router.post('/',(req,res)=>{
    User.create((req.body))
    .then(()=>{console.log(`A New user has been created. Check details here:${req.body}`);
res.send(`Successfully created user`)})
    .catch((e)=>{
        console.log(`There seems to be an error:${e}`);
        res.send(`There seems to be an error:${e}`)
    });
});
module.exports=router;