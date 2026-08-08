const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    email:{
        type:string,
        required:true,
        unique:true
    },
    password:{
        type:string,
        required:true
    }
})
const user=mongoose.model('user',userSchema);
module.exports=user;