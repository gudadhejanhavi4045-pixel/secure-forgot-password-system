const express = require("express");

const cors = require("cors");


const app = express();


app.use(cors());

app.use(express.json());



// Import routes

const auth = require("./routes/auth");


// Use routes

app.use("/api",auth);



app.listen(5000,()=>{

    console.log("Server running on port 5000");

});