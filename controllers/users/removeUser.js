const { HttpError } = require('../../helpers');
const { User } = require('../../models/user');



const removeUser = async (req, res, next) => {
    const { id } = req.params;
    const result = await User.findByIdAndDelete(id);
    if (!result) {
      throw HttpError(404, "User not found");
}
res.json({
    message: "Delete success"
})
}

module.exports =   removeUser