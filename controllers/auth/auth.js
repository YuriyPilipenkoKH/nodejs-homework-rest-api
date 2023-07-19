// const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");

const register = async (req, res, next) => {
    const newUser = await User.create(req.body)
       
    res.status(201).json({
        email: newUser.email,
        name: newUser.name,
    })
}

module.exports =   register