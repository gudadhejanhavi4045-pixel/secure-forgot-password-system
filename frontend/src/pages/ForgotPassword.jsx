import {useState} from "react";
import axios from "axios";
import "./ForgotPassword.css";


function ForgotPassword(){

const [identity,setIdentity] = useState("");

const [message,setMessage] = useState("");

const [password,setPassword] = useState("");

const [loading,setLoading] = useState(false);



const resetPassword = async()=>{


setLoading(true);

setMessage("");

setPassword("");



try{


const response = await axios.post(

"http://localhost:5000/api/forgot-password",

{
identity:identity
}

);



setMessage(response.data.message);


if(response.data.password){

setPassword(response.data.password);

}


}

catch(error){

setMessage("Unable to connect to server");

}


setLoading(false);


}



return(

<div className="container">


<h1>
Forgot Password
</h1>


<p>
Reset your password using email or phone
</p>



<input

type="text"

placeholder="Enter Email or Phone"

value={identity}

onChange={(e)=>setIdentity(e.target.value)}

/>



<button onClick={resetPassword}>


{

loading ? "Processing..." : "Reset Password"

}


</button>



{

message &&

<div className="message">

{message}

</div>

}



{

password &&


<div className="password">


<h3>
Generated Password
</h3>


<h2>
{password}
</h2>


</div>


}



</div>


)


}


export default ForgotPassword;
