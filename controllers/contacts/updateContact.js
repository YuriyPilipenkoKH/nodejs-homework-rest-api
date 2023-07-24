const { HttpError } = require("../../helpers");
const { Contact } = require("../../models/contact");



const updateContact = async (req, res, next) => {
  const { id } = req.params;
  const data = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.json(data);
  console.log('Updated')
}


module.exports = updateContact