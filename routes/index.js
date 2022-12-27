const express=require("express")

const router=express.Router()
const lginRouter=require("../controller/user")

router.route("/working").get(lginRouter.register)
router.route("/workings").get(lginRouter.login)







module.exports=router

