const User=require('../models/users.js');
require('dotenv').config();
const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20');


passport.serializeUser((user,done)=>{
    done(null, user.id);
});

passport.deserializeUser((id,done)=>{
    User.findOne({where:{id: id}})
    .then((user)=>{done(null,user)})
    .catch(e=>console.log(e));
});

//google strategy is a constructor function helping to create a new object
    passport.use(
        new GoogleStrategy({
            // options for google strategy
            clientID: process.env.GooglePlus_Api_ClientID,
            clientSecret: process.env.GooglePlus_Api_SecretCode,
            callbackURL: '/auth/google/redirect'
        }, (accessToken, refreshToken, profile, done) => {
            console.log(profile);
            //if google id is already there in our db then don't add. 
            User.findOne({
                where: {
                  googleID:profile.id
                }
              }).then((currentUser)=>{
                if(currentUser){
                    console.log('user already present in our database.');
                    done(null,currentUser);
                } else{
                    User.create({
                        googleID:profile.id,
                        firstName:profile.name.givenName,
                        lastName:profile.name.familyName,
                        thumbnail:profile._json.picture
                    }).then((newUser)=>{
                        console.log(`created new user:`,newUser)
                        done(null, newUser);
                    })
                    .catch((e)=>{
                        console.log(`There seems to be an error:${e}`);
                        //res.send(`There seems to be an error:${e}`)
                    });
                }}).catch(e=>console.log(e));
        })
    );    