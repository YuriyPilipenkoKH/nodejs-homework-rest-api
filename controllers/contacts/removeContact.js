const { HttpError } = require('../../helpers');
const { Contact } = require('../../models/contact');



const removeContact = async (req, res, next) => {
  const { id } = req.params;
  const data = await Contact.findByIdAndDelete(id);
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "Deleted" });
}

module.exports =   removeContact
