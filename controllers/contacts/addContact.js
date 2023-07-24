// const { HttpError } = require("../../helpers");
const { HttpError } = require("../../helpers");
const { Contact } = require("../../models/contact");


const addContact = async (req, res, next) => {
  const { _id: owner } = req.user;
  const data = await Contact.create({ ...req.body, owner });

  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.status(201).json(data);
}

module.exports =   addContact