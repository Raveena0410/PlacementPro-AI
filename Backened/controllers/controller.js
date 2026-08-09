const user=require('../models/model');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const u=async(req,res)=>{
const {email,password}=req.body;
const check=await user.findOne({email});
if(check){
    return res.status(400).json({message:'user already exist'});
}
const hashpassword=await bcrypt.hash(password,10);
const newuser=new user({
    email,
    password:hashpassword
})
 await newuser.save();
return res.status(201).json({message:'user created succesfully'})

}
const login=async(req,res)=>{
    const {email,password}=req.body;
    const check=await user.findOne({email});
    if(!check){
        return res.status(404).json({message:'user not found'});
    }
    const match=await bcrypt.compare(password,check.password);
    if(!match){
        return res.status(401).json({message:'invalid password'})
    }
    const token = jwt.sign(
    { id: check._id },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
);
    return res.status(200).json({message:'user login succesfully', token:token})
}
