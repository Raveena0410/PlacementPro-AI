const express=require('express');
const router=express.Router();
const upload = require("../middleware/Upload");
const {u,login,ats}=require('../controllers/controller');
router.post('/login',login);
router.post('/signup',u)
router.post('/ats', upload.single('resume'), (req, res) => {
    console.log("FILE:", req.file);
    console.log("BODY:", req.body);

    res.json({
        file: req.file,
        body: req.body
    });
});
router.post("/ats", upload.single("resume"), ats);
module.exports=router;