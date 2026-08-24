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
    try {

        if (!req.file) {
            return res.status(400).json({
                message: "No resume file received"
            });
        }

        const jobDescription = req.body.jobDescription;

        if (!jobDescription) {
            return res.status(400).json({
                message: "Job description is required"
            });
        }

        const databuffer = fs.readFileSync(req.file.path);

        const data = await pdfParse(databuffer);

        const resumeText = data.text;

        console.log("Resume:");
        console.log(resumeText);

        console.log("Job Description:");
        console.log(jobDescription);

        // ATS analysis will go here

        return res.status(200).json({
            message: "Resume processed successfully",
            resume: resumeText
        });

    } catch (err) {

        console.log(err);

        return res.status(500).json({
            message: err.message
        });
    }
};
module.exports = { u, login,ats };