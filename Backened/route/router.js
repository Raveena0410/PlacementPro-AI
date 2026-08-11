const express=require('express');
const router=express.Router();
const {u,login}=require('../controllers/controller');
router.get('/login',login);
router.post('/signup',u)
module.exports=router;