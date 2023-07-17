
const { ctrlWrapper } = require('../../helpers')
const {Contact} = require('../../models/contact')

const listContacts = async (req, res) => {
    const data = await Contact.find()
    console.log("data")
     res.json(data)
  }

  module.exports =    {listContacts: ctrlWrapper(listContacts)}

