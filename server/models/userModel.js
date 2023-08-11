import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    iss:String,
    azp:String,
    aud:String,
    hd:String,
    sub:{type:String,required:true},
    email:String,
    email_verified:Boolean,
    azp:String,
    name:{type:String,required:true},
    picture:{type:String,required:true},
    given_name:String,
    family_name:String,
    locale:String,
    iat:Number,
    exp:Number,
    jti:String

})

//creating a collection called users
const Users = mongoose.model('users',userSchema)


export default Users;