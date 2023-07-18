const { HttpError } = require("../../helpers");
const { Contact, addSchema } = require("../../models/contact");



const updateContact = async (req, res, next) => {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, {new: true});
    if (!result) {
      throw HttpError(404, "Not found");
    }
}


module.exports = updateContact