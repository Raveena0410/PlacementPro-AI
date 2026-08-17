const express=require('express');
const router=express.Router();
const upload = require("../middleware/Upload");
const {u,login,ats}=require('../controllers/controller');
router.post('/login',login);
router.post('/signup',u)
router.post('/ats', upload.single("resume"), ats);

module.exports=router;