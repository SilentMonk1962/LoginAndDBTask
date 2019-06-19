const router=require('express').Router();
const authCheck=(req,res,next)=>{
    if(!req.user){
        console.log('user was not logged in, redirected to login page.');
        res.redirect('/auth/login');
    } else{
        //code to run if logged in.
        next();
    }
}
router.get('/',authCheck,(req,res)=>{
    console.log('we got redirected from authentication page. yay ! ! ! ');
    //res.send(`You are logged in, this is your profile:${req.user.firstName}`);
    res.render('profiles.ejs',{
        user:req.user
    });
});
module.exports=router;