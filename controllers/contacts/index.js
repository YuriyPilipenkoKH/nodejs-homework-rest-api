

const listContacts = require('./listContacts')
const getContactById = require('./getContactById')
const addContact = require('./addContact')
const removeContact = require('./removeContact')
const updateContact = require('./updateContact')
const updateFavorite = require('./updateFavorite')
const { ctrl } = require('../../helpers')


module.exports = {
  listContacts: ctrl(listContacts),
  getContactById: ctrl(getContactById),
  addContact: ctrl(addContact),
  removeContact: ctrl(removeContact),
  updateContact: ctrl(updateContact),
  updateFavorite: ctrl(updateFavorite),
}