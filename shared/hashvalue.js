const bcrypt=require("bcrypt")


async function hashvalue(password){
    const hash= await bcrypt.hash(password,12)
    return hash
}
async function comparevalue(password,oldpassword){
    const ha=await bcrypt.compare(password,oldpassword)
}

module.exports={
    hashvalue,comparevalue
}