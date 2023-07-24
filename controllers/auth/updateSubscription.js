const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");


const updateSubscription = async (req, res, next) => {
    const { _id } = req.user;
    const data = await User.findByIdAndUpdate(_id, req.body);
    if (!data) {
      throw HttpError(404, "Not found");
    }
    res.json({ data });
  };

  module.exports = updateSubscription 