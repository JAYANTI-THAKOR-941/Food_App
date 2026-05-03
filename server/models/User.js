import mongoose from "mongoose";

const userSchema  = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['admin','user','seller'],
        default:'user'
    },
    otp:{
        type:String
    },
    otpExpiry:{
        type:Date
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    resetPasswordToken:{
        type:String
    },
    resetPasswordExpiry:{
        type:Date
    }
},{timestamps:true});

const User = mongoose.model('User',userSchema);

export default User;