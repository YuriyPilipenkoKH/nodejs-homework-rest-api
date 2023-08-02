const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')

const {SECRET_KEY} = process.env;

const login = async (req, res, next) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      throw HttpError(401, "Email or password invalid");
    }

    if(user.verify){
      throw HttpError(401, 'Email not verified')
    }

    const passwordCompare = bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      throw HttpError(401, "Email or password invalid");
    }
  
    const payload = {
      id: user._id,
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
    await User.findByIdAndUpdate(user._id, { token });
    res.json({ token });
}

module.exports =    login