const mongoose = require("mongoose");

const DB="mongodb+srv://farihakausar24:zFFDfJSzgCMWm8Wa@cluster0.xa4xr4q.mongodb.net/";



mongoose.connect(DB).then(()=>{
    console.log("connection successful")
}).catch((err)=>console.log("no connection"))

module.exports= mongoose;



