
const { HttpError } = require("../../helpers")
const { User } = require("../../models/user")

const verifyEmail = async (req, res) => {
    const {verificationCode} = req.params

    const user = await User.findOne({verificationCode})
    if(!user) {
        throw HttpError(404, "User not Found")
    }
    await User.findByIdAndUpdate(user._id, {verify: true, verificationCode: '' }) 

    res.json({
        message: 'Email verify success'
    })
    
  }

  module.exports =   verifyEmail