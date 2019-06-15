const {connection, Sequelize}=require('../database/db.js');

const User =connection.define('user',{
firstName:{
    type:Sequelize.STRING(100),
    allowNull:false,
    validate:{
        is:{
            args:["^[a-z]+$",'i'],
            msg:'Name should be a letter'
        },
        uppercasekardo:(name)=>{
            return name.charAt(0).toUpperCase() + name.slice(1);
            }
        }
    },
    lastName:{
        type:Sequelize.STRING(100),
        allowNull:false,
        validate:{
            //is:{
              //  args:["^[a-z]+$",'i'],
                //msg:'Family name should be a letter'
            //},
            uppercasekardo:(name)=>{
                return name.charAt(0).toUpperCase() + name.slice(1);
                }
            }
        },
        password:{
            type:Sequelize.STRING(300),
            allowNull:true,
            validate:{
                isUsingInSecurePassword(value){
                    if((value==='Password') ||(value==='password')){
                        throw new Error('You can not use the word Password as your password.')
                    }
                }
            }
},
googleID:{
    type:Sequelize.STRING(),
    allowNull:true,
    unique:true,
}
});
User.sync({force: false}).then(()=>console.log(`table created`));
module.exports=User;


