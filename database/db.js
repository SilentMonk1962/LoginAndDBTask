require('dotenv').config();
const Sequelize=require('sequelize');
const connection=new Sequelize(process.env.DB_Database_Name,process.env.DB_UserName,process.env.DB_PASSWORD,{
  host:process.env.DB_Host,
  dialect:'postgres',
dialectOptions: {
    ssl: true
  },
  logging: console.log
});
connection.authenticate()
  .then(() =>console.log('Connection established to DB.'))
  .catch(err =>console.error('Unable to connect to DB:', err));

module.exports=connection;

