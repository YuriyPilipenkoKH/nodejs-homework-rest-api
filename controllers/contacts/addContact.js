const { HttpError } = require("../../helpers");
const { Contact, addSchema } = require("../../models/contact");





const addContact = async (req, res, next) => {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const result = await Contact.create(req.body);
    res.status(201).json(result);
}

module.exports =   addContact