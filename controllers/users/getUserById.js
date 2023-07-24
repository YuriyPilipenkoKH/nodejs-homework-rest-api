const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");


const getUserById = async (req, res, next) => {
  const { id } = req.params;
  const result = await User.findById(id);
  if (!result) {
    throw HttpError(404, "ID Not found");
}
res.json(result)
}

module.exports =   getUserById