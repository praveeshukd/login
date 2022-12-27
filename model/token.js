const jwt=require("jsonwebtoken")





function token(username){
    let tokens=jwt.sign({username},
     process.env.JWT_URl,
     {expiresIn:"1h"}   )
     return token
     

}

module.exports={
    token
}
