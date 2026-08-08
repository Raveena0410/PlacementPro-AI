const user=require('../models/model');
const u=async(req,res)=>{
const {email,password}=req.body;
const newuser=new user({email,password});
await newuser.save();
try{
res.status(201).json({message:'user registered successfully'});
} catch(err){
    res.status(500).json({message:'error resgistering user'});
}

}