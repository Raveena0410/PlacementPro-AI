const user=require('../models/model');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const pdfParse = require('pdf-parse');
const fs = require('fs');
const u=async(req,res)=>{
const {name,email,password}=req.body;
const check=await user.findOne({email});
if(check){
    return res.status(400).json({message:'user already exist'});
}
const hashpassword=await bcrypt.hash(password,10);
const newuser=new user({
    name,
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
        { expiresIn: '1d' }
    );

    return res.status(200).json({
        message: 'user login successfully',
        token: token,
        user: {
            name: check.name,
            email: check.email
        }
    });
};
const ats = async (req, res) => {
    try{
    console.log(req.file);
    console.log(req.body.jobDescription);
    const databuffer=fs.readFileSync(req.file.path)
    const data=await pdfParse(databuffer)
    const resume=data.text;
    console.log("resume text:")
    console.log(resume)
    res.status(200).json({
        message:"resume proceed successfully",
        resume:resume

    })
}
catch(err){
    console.log(err);
    res.status(500).json({
        message:"Error Proceeding Resume"
    })
}



    
};
module.exports = { u, login,ats };