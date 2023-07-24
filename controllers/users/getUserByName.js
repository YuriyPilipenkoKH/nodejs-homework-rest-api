const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");


const getUserByName = async (req, res, next) => {
    const { name } = req.params;
  
    try {
      const result = await User.findOne({ name }); // Find the user with the specified name
      if (!result) {
        throw HttpError(404, "Name not found");
      }
  
      res.json(result);
    } catch (error) {
      next(error);
    }
}

module.exports =   getUserByName