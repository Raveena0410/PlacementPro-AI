const user = require('../models/model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PDFParse } = require('pdf-parse');
const fs = require('fs');
const { GoogleGenAI } = require('@google/genai');


// =======================
// GEMINI
// =======================

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});


// =======================
// SIGN UP
// =======================

const u = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const check = await user.findOne({ email });

        if (check) {

            return res.status(400).json({
                message: 'user already exist'
            });

        }

        const hashpassword = await bcrypt.hash(
            password,
            10
        );

        const newuser = new user({
            name,
            email,
            password: hashpassword
        });

        await newuser.save();

        return res.status(201).json({
            message: 'user created succesfully'
        });

    } catch (err) {

        console.log(err);

        return res.status(500).json({
            message: err.message
        });

    }

};


// =======================
// LOGIN
// =======================

const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const check = await user.findOne({ email });

        if (!check) {

            return res.status(404).json({
                message: 'user not found'
            });

        }

        const match = await bcrypt.compare(
            password,
            check.password
        );

        if (!match) {

            return res.status(401).json({
                message: 'invalid password'
            });

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

    } catch (err) {

        console.log(err);

        return res.status(500).json({
            message: err.message
        });

    }

};


// =======================
// ATS RESUME CHECKER
// =======================

const ats = async (req, res) => {

    try {

        console.log("========== ATS START ==========");


        // 1. Check PDF

        if (!req.file) {

            console.log("ERROR: No PDF received");

            return res.status(400).json({
                message: "No resume file received"
            });

        }

        console.log("PDF RECEIVED:");
        console.log(req.file.originalname);


        // 2. Get Job Description

        const jobDescription = req.body.jobDescription;

        if (!jobDescription || !jobDescription.trim()) {

            console.log("ERROR: No job description");

            return res.status(400).json({
                message: "Job description is required"
            });

        }

        console.log("JOB DESCRIPTION RECEIVED");


        // 3. Read PDF

        const databuffer = fs.readFileSync(
            req.file.path
        );

        console.log("PDF READ SUCCESSFULLY");


        // 4. Extract PDF text

        const parser = new PDFParse({
            data: databuffer
        });

        const pdfResult = await parser.getText();

        const resumeText = pdfResult.text;

        await parser.destroy();


        console.log("PDF PARSED SUCCESSFULLY");

        console.log("RESUME TEXT:");
        console.log(resumeText);


        // 5. Check extracted text

        if (!resumeText || !resumeText.trim()) {

            return res.status(400).json({
                message: "Could not extract text from the PDF"
            });

        }


        // 6. Gemini Prompt

        const prompt = `
You are an ATS resume analyzer.

Analyze the resume against the job description.

RESUME:
${resumeText}

JOB DESCRIPTION:
${jobDescription}

Give me:

1. ATS match score from 0 to 100
2. Matched skills
3. Missing skills
4. Resume strengths
5. Resume weaknesses
6. Suggestions to improve the resume
7. Final recommendation

Only use information available in the resume.
Do not invent experience, skills, education, or projects.
`;


        console.log("SENDING TO GEMINI...");


        // 7. Send to Gemini

        const response = await ai.models.generateContent({

            model: "gemini-3.6-flash",

            contents: prompt

        });


        console.log("GEMINI RESPONSE RECEIVED");


        // 8. Get Gemini Result

        const result = response.text;


        console.log("GEMINI RESULT:");
        console.log(result);


        // 9. Send Result to React

        return res.status(200).json({

            message: "ATS analysis completed",

            result: result

        });


    } catch (err) {

        console.log("========== ATS ERROR ==========");

        console.log(err);

        return res.status(500).json({

            message: err.message

        });

    }

};


// =======================
// EXPORT
// =======================

module.exports = {
    u,
    login,
    ats
};