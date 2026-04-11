const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const TokenBlackListModel = require("../models/TokenBlackList.model")


async function authUser(req, res, next){

    const token = req.cookies.token || req.headers.authorization?.split(" ")[1]

    if(!token){
        return res.status(401).json({
            message:"password and Email are INVALID"
        })
    }

    const isTokenBlackListed = await TokenBlackListModel.findOne({token})

    if(isTokenBlackListed){
        return res.status(401).json({
            message:"password and Email are INVALID"
        })
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        const user = await userModel.findById(decoded.userId)

        req.user = user

        next()
    }
    catch(err){
        return res.status(401).json({
            message:"password and Email are INVALID"
        })
    }
}

module.exports = {authUser}