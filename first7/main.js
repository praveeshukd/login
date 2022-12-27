const express=require('express')

const app=express()
const bodyparser=require("body-parser")
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
 

// 
const indexRouter=require('./router/index')

app.use(indexRouter())



app.listen(3000,()=>{
    console.log("port running")
})