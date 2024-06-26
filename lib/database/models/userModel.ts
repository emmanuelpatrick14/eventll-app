import { model, models } from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new Schema({
    clerkId:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
       type:String,
        required:true,
        unique:true 
    },
    firstName:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:false
    }

})

const User = models.User || model("User", UserSchema);

export default User;