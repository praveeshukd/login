const express=require("express")
const app=express()
require("dotenv").config()
const bodyparser=require("body-parser")
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
require("./shared/mongooseconnect")
const indexRouter=require("./routes/index")


app.use("",indexRouter)



          

app.listen(5000,()=>{
    console.log("working")
})