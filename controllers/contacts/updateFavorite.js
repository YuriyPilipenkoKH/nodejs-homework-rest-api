const { HttpError } = require("../../helpers");
const { Contact } = require("../../models/contact");

const updateFavorite = async (req, res) => {
  const { id } = req.params;
  const data = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.json(data);
}

module.exports = updateFavorite