import { useState } from "react";
import "./ForgotPassword.css";

function ForgotPassword(){

    const [identity,setIdentity] = useState("");
    const [message,setMessage] = useState("");

    const resetPassword = async()=>{

        const response = await fetch(
        "https://secure-forgot-password-system.onrender.com/api/forgot-password",
        {
            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({
                identity:identity
            })
        });

        const data = await response.json();

        setMessage(
            data.password 
            ? "Your new password: " + data.password
            : data.message
        );

    };


    return(

        <div className="container">

            <h1>Forgot Password</h1>


            <input

            type="text"

            placeholder="Enter Email or Phone"

            value={identity}

            onChange={(e)=>setIdentity(e.target.value)}

            />


            <button onClick={resetPassword}>

            Reset Password

            </button>


            <p>{message}</p>


        </div>

    )

}


export default ForgotPassword;