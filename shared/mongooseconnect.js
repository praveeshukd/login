const mongoose=require("mongoose")



mongoose.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true }).then((result)=>{
    console.log("mongoose connected")
})

