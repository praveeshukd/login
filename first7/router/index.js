const express=require('express')
const router=express.Router()


router.get("/www",(req,res)=>{
    res.send("1  st router")
})








module.exports=router