const {Router} = require("express")

const authController = require("../controllers/auth.controller")
const authMiddleware = require("../Middlewares/authMiddleware")

const authRouter = Router()

authRouter.post("/register",authController.UserRegister)
authRouter.post("/login", authController.UserLogin)
authRouter.get("/logout",authMiddleware.authUser,authController.UserLogout)
authRouter.get("/getme",authMiddleware.authUser,authController.GetMe)


module.exports = authRouter


