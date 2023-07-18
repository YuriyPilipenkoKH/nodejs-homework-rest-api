
const { HttpError } = require('../../helpers');
const { Contact } = require('../../models/contact');



const removeContact = async (req, res, next) => {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndDelete(contactId);
    if (!result) {
      throw HttpError(404, "Not found");
}
}

module.exports =   removeContact
