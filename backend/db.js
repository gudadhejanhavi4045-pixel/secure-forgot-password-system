const mysql = require("mysql2");


const db = mysql.createConnection({

    host:"localhost",

    user:"root",

    password:"Janhavigudadhe@4015",

    database:"forgot_password_system"

});


db.connect((err)=>{

    if(err){

        console.log("Database connection failed");
        console.log(err);

    }
    else{

        console.log("MYSQL Connected");

    }

});


module.exports = db;