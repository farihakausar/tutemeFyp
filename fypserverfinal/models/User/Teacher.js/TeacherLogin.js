const mongoose=require("mongoose");

const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const teacher=mongoose.Schema({
    name: { type: String },
    email:{
        type:String
    },
    interestedSubjects:{
        type:String
    },
    eduaction:{
        type:String 
    },
    password:{
        type:String
    },
    cpassword:{
type:String
    },
    file: {type:String},
    tokens:[{
token:
{
    type:String,
    required:true
}
    }]
    
})
teacher.pre("save",async function (next){
    console.log("yfiug")
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,12);
        this.cpassword=await bcrypt.hash(this.cpassword,12);
    }
    next()
})
teacher.method.generateAuthToken=async function (){
    try{
        let tokenThapa=jwt.sign({_id:this._id},"drdtysertyuiopsxcftyi")
        this.tokens=this.tokens.concat({token:tokenThapa})
        await this.save()
        return tokenThapa;
    }catch(err){
        console.log(err)
    }
}
const teachermodel=mongoose.model("teacher",teacher)

module.exports=teachermodel;

