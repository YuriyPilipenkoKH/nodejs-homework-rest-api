const { HttpError, nodeMailer } = require("../../helpers")
const { User } = require("../../models/user")
const bcrypt = require('bcrypt')
const gravatar = require('gravatar')
const {nanoid} = require('nanoid')
const {BASE_URL} = process.env

const register = async (req, res, next) => {

    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      throw HttpError(409, "Email already in use");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const avatarURL = gravatar.url(email)

    const verificationCode = nanoid()

    const newUser = await User.create({ 
      ...req.body,
       password: hashedPassword ,
       avatarURL,
       verificationCode,
      });

      const verifyEmail= {
        to: email,
        subject: 'Verify email',
        html: `<a target= "_blank" href= "${BASE_URL}/api/auth/verify/${verificationCode}">Click</a>`
      }
      await nodeMailer(verifyEmail)

    res.status(201).json({
      email: newUser.email,
      name: newUser.name,
    });
}

module.exports =   register