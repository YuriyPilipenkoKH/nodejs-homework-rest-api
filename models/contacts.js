const fs = require('fs/promises')
const { nanoid } = require('nanoid')
const path = require('path')


const contactPath = path.join(__dirname, 'contacts.json')

const listContacts = async () => {
  const data = await fs.readFile(contactPath, 'utf-8'  ) 
  console.log("data")
   return JSON.parse(data)  || null
}

const getContactById = async (id) => {
  const ContactId = String(id)
  const contacts = await listContacts() 
  const result = contacts.find(item => item.id === ContactId)
  return result || null
}

const removeContact = async (id) => {
  const ContactId = String(id)
  const contacts = await listContacts()
  const index  = contacts.findIndex(item => item.id === ContactId)
   if (index === -1){
      return null
   }

   const result = contacts.splice(index, 1)
   await fs.writeFile(contactPath, JSON.stringify(contacts, null, 2))
   return result
}

const addContact = async (body) => {
  const contacts = await listContacts() 
  const newContact = {
      id: nanoid(),
      ...body,

  }
  contacts.push(newContact)
  await fs.writeFile(contactPath, JSON.stringify(contacts, null, 2))
  return newContact
}

const updateContact = async (id, body) => {
  const ContactId = String(id)
  const contacts = await listContacts()
  const index  = contacts.findIndex(item => item.id === ContactId)
   if (index === -1){
      return null
   }
   contacts[index] = {id, ...body}
   await fs.writeFile(contactPath, JSON.stringify(contacts, null, 2))
   return contacts[index]
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
