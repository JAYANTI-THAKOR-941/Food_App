import mongoose from "mongoose";

const foodSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    longDescription:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    rating:{
        type:String,
    },
    category:{
        type:String,
    },
    image:{
        type:String,
    },
    
},{timestamps:true});

const Food = mongoose.model('Food',foodSchema);

export default Food;