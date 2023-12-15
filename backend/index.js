const express=require('express')
const app=express();
const {router}=require('./router/router')
app.use(router)
app.use(express.static('frontend'))
app.listen(3000,()=>{
    console.log("app started")
})