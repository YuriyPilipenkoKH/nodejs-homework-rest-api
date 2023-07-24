const { HttpError } = require("../../helpers")
const { User } = require("../../models/user")
const bcrypt = require('bcrypt')


const register = async (req, res, next) => {

    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      throw HttpError(409, "Email already in use");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ ...req.body, password: hashedPassword });
    res.status(201).json({
      email: newUser.email,
      name: newUser.name,
    });
}

module.exports =   register