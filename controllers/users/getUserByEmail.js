const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");


const getUserByEmail = async (req, res, next) => {
    const { email } = req.params;
  
    try {
      const result = await User.findOne({ email }); // Find the user with the specified email
      if (!result) {
        throw HttpError(404, "Email not found");
      }
  
      res.json(result);
    } catch (error) {
      next(error);
    }
}

module.exports =   getUserByEmail