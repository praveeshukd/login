
const users=require("../model/user")
const hashvalue=require("../shared/hashvalue").hashvalue

const comapreVlue=require("../shared/hashvalue").comparevalue
const tokens=require("../model/token").token


async function registering(req,res){
    let {username,password}=req.body

    if(username==""){
        res.send("user not found")
    }
    password=await hashvalue(password)
    users.create({
        username,password
    })
}
async function login(req,res){
    let{username,password}=req.body
    let olduser=await users.findOne({username:req.body.username})

    if(!olduser){
        res.send("user not found")
    }
    else{
        const checkUser=await comapreVlue(req.body.password,olduser.password)
        if(!checkUser){
            res.send("user not found")
        }
        else{
            const tokens=await tokens(olduser.username)
        }
    }
}


module.exports={
    registering
}