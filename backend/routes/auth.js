const express = require("express");

const router = express.Router();

const db = require("../db");


// Password Generator

function generatePassword(){

    let characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let password = "";


    for(let i=0;i<8;i++){

        password += characters[
            Math.floor(Math.random()*characters.length)
        ];

    }

    return password;

}



// Forgot Password API

router.post("/forgot-password",(req,res)=>{


    const identity = req.body.identity;


    db.query(

        "SELECT * FROM users WHERE email=? OR phone=?",

        [
            identity,
            identity
        ],


        (err,result)=>{


            if(err){

                return res.json(err);

            }



            if(result.length===0){


                return res.json({

                    message:"User not found"

                });

            }



            let user=result[0];


            let today =
            new Date()
            .toISOString()
            .slice(0,10);



            if(user.last_reset_date == today){


                return res.json({

                    message:
                    "You can use this option only one time per day."

                });


            }



            let newPassword =
            generatePassword();



            db.query(

                "UPDATE users SET password=?, last_reset_date=? WHERE id=?",


                [
                    newPassword,
                    today,
                    user.id
                ],


                ()=>{


                    res.json({

                        message:
                        "Password reset successful",

                        password:newPassword

                    });


                }


            );



        }

    );


});


module.exports = router;