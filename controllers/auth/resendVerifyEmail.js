const { HttpError, nodeMailer } = require("../../helpers");
const { User } = require("../../models/user");
const {BASE_URL} = process.env


const resendVerifyEmail = async(req, res) => {
    const { email} = req.body;

    const user  =await User.findOne({email})
    if(!user) {
        throw HttpError(404, "User Not found")
    }

    if(user.verify) {
        throw HttpError(401, 'Email already verified')
    }
    const verifyEmail= {
        to: email,
        subject: 'Verify email',
        html: `<a target= "_blank" href= "${BASE_URL}/api/auth/verify/${user.verificationCode}">Click</a>`
      }
      await nodeMailer(verifyEmail)


    res.json({
        message: "Verify resend success"
    })
}

module.exports = resendVerifyEmail;