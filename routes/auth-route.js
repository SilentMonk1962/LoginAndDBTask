const router=require('express').Router();
const passport=require('passport')
router.get('/',(req,res)=>res.render('home.ejs'));
router.get('/login',(req,res)=>{
res.render('login.ejs');
});

//auth logout
router.get('/logout',(req,res)=>{
//handle with passport
req.logout();
res.redirect('/')
});

//auth with google:
router.get('/google',passport.authenticate("google",{
    scope: ['profile'],

}));


//calback route for google to redirect to 
router.get('/google/redirect',passport.authenticate("google"), (req,res)=>{
    console.log('Google Redirected us');
    res.redirect('/profiles');
});

module.exports=router