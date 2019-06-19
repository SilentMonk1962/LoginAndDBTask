require('dotenv').config();
require('../../Config/passport-setup.js');
require('../../database/db.js');    
require('../../Config/passport-setup.js');
const cookieSession=require('cookie-session');
const path=require('path');
const express= require('express');
const app= express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());//to parse incoming string from http into a json object
const users=require('../../routes/users.js');
//const tasks=require('../../routes/tasks.js');
const profiles=require('../../routes/profile-route');
const authRoutes=require('../../routes/auth-route');
//setting up cookie session
const passport=require('passport')
app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:[process.env.Keys]
}));
//init passport
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth',authRoutes);
app.use('/users',users);
//app.use('/tasks',tasks); 
app.use('/profiles',profiles); 
app.use(express.static('static'));//specify where to look for static files that are searched by browser like stylesheet
app.set('viewengine','ejs');//setting up view engine

app.get('/',(req,res)=>{
    res.render('home.ejs',{user:req.user});
    //res.sendFile(path.join(__dirname,"..","pages",'index.html'))
});

app.listen((process.env.port || 3000),
()=>console.log(`Listening on port ${process.env.port || 3000}`));