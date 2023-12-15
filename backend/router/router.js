const {load}=require('../function/load')
const express=require('express')
const router=express.Router();
router.get('/',load)


module.exports={router}