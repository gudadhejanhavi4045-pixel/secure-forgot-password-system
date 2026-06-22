const express = require("express");
const router = express.Router();
const db = require("../db");


router.post("/forgot-password",(req,res)=>{

    const {identity} = req.body;


    const newPassword = Math.random()
        .toString(36)
        .slice(-8);


    const sql = `
    UPDATE users 
    SET password=? 
    WHERE email=? OR phone=?
    `;


    db.query(
        sql,
        [newPassword, identity, identity],
        (err,result)=>{


            if(err){

                console.log(err);

                return res.status(500).json({
                    error:"Database error"
                });

            }


            res.json({

                message:"Password reset successful",

                password:newPassword

            });


        }
    );


});


module.exports = router;