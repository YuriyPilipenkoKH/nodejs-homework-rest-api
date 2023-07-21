 
const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')
// require("dotenv").config()

const {SECRET_KEY} = process.env;
// const SECRET_KEY = 'sdsgsdfhsdfasdfgsdf'

const register = async (req, res, next) => {

    const {email, password} = req.body
    const user = await User.findOne({email})

    if(user) {
        throw HttpError(409, 'Email already in use')
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = await User.create({...req.body, password: hashPassword})
       
    res.status(201).json({
        email: newUser.email,
        name: newUser.name,
    })
}
const login = async (req, res, next) => {

    const {email, password} = req.body
    const user = await User.findOne({email})

    if(!user) {
        throw HttpError(401, "Email or password invalid");
    }
     
    const passwordCompare = await bcrypt.compare(password, user.password);
    if(!passwordCompare) {
        throw HttpError(401, "Email or password invalid");
    }
 
    const payload = {
        id: user._id,
    }

    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "23h"});
    await User.findByIdAndUpdate(user._id, {token});

    res.json({
        token,
    })
}

module.exports =   {register, login}