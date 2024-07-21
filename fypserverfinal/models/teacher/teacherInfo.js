const mongoose = require('mongoose');
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const TeacherServiceRequest =require("./teacherRequest")
const teacherRequestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
   email: {
        type: String,
        required: true
    },
    specialty: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
   
   
   experience: {
        type: String  
    },
   photo: {
        type: String  
    },
    serviceRequests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TeacherServiceRequest'
    }],
    //  status: {
    //     type: String,
    //     enum: ['pending', 'approved', 'rejected'],
    //     default: 'pending'
    // },
    tokens:[
        {
token:
{
    type:String,
    required:true
}
    }]
});
teacherRequestSchema.pre("save",async function (next){
    console.log("yfiug")
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,12);
        this.cpassword=await bcrypt.hash(this.cpassword,12);
    }
    next()
})
teacherRequestSchema.methods.generateAuthToken = async function () {
    try {
      const token = jwt.sign({ _id: this._id }, "thisisfarihakausarinuniversotyofeducation");
      this.tokens = this.tokens.concat({ token:token });
      await this.save();
      return token;
    } catch (err) {
      console.error(err);
      throw new Error("Failed to generate token");
    }
  };
const TeacherRequest = mongoose.model('TeacherRequest', teacherRequestSchema);

module.exports = TeacherRequest;
