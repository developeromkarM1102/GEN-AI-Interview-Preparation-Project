const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, "Name is already taken"],
        required: [true, "username is required"]
    },
    email: {
        type: String,
        unique: [true, "user already exists with this email address"],
        required: [true, "Email is required"],
    },
    password: {
        type: String,
        required: true,
        select: false
    }
});

userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;

    this.password = await bcrypt.hash(this.password, 10);
    
});


userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;