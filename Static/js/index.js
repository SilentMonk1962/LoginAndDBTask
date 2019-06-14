require('dotenv').config();
require('../../database/db.js');
const path=require('path');
const express= require('express');
const app= express();
const bodyParser = require('body-parser');
const users=require('../../routes/users.js')
const tasks=require('../../routes/tasks.js');
app.use(bodyParser.json())//to parse incoming string from http into a json object
app.use('/users',users);
app.use('/tasks',tasks); 
app.use(express.static('static'));//specify where to look for static files that are searched by browser like stylesheet

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"..","pages",'index.html'))
})

app.listen((process.env.port || 3000),()=>console.log(`Listening on port ${process.env.port || 3000}`))