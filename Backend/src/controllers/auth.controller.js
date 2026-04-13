const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const TokenBlackListModel = require("../models/TokenBlackList.model");

/** 
 * -user Register controller
 * -POST api/auth/register
 */  

async function UserRegister(req, res) {
    try {
        const { email, username, password } = req.body;

        const isExists = await userModel.findOne({ email });

        if (isExists) {
            return res.status(422).json({
                message: "User already exists with this email",
                status: "Failed"
            });
        }

        const user = await userModel.create({
            email,
            username,
            password
        });

        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "3d" }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "None"
        });

        res.status(201).json({
            user: {
                _id: user._id,
                name: user.username, // ✅ FIXED
                email: user.email
            },
            token
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


/** 
 * -user Login controller
 * -POST api/auth/login
 */  

async function UserLogin(req, res) {
    try {
        const { email, password } = req.body;

        const user = await userModel
            .findOne({ email })
            .select("+password");

        if (!user) {
            return res.status(401).json({
                message: "Email and Password are INVALID"
            });
        }

        const isValidPassword = await user.comparePassword(password);

        if (!isValidPassword) {
            return res.status(401).json({
                message: "Email and Password are INVALID"
            });
        }

        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "3d" }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "None"
        });

        res.status(200).json({
            user: {
                _id: user._id,
                name: user.username,
                email: user.email
            },
            token
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


/** 
 * -user Log out controller
 * -GET api/auth/logout
 */  

async function UserLogout(req, res) {
    try {
        const token = req.cookies?.token;

        if (!token) {
            return res.status(400).json({
                message: "No token found"
            });
        }

        await TokenBlackListModel.create({ token });

        res.clearCookie("token");

        res.status(200).json({
            message: "User Logged out successfully"
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

/** 
 * -user Get me controller
 * -GET api/auth/getme
 */  

async function GetMe(req, res) {
    try {
        const user = req.user;
        res.status(200).json({
            user: {
                _id: user._id,
                name: user.username,
                email: user.email
            }
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    UserRegister,
    UserLogin,
    UserLogout,
    GetMe
}
