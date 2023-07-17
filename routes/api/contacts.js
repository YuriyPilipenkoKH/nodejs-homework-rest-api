const express = require('express')
// const contacts = require('../../models/contacts')
// const {HttpError} = require('../../helpers')
const ctrl = require('../../controllers/contacts/contacts')
const { isValidId } = require('../../middlewares')


const router = express.Router()

router.get('/', ctrl.listContacts)

router.get('/:id', isValidId, ctrl.getContactById)


// router.get('/', async (req, res, next) => {
//   try {
//     const result = await contacts.listContacts()
//     console.log(result)
//     if(!result){
//         throw HttpError(404, 'Not Found All')   
//     }
//     res.json(result)
// } 
// catch (error) {
//     next(error)
// }
// })

// router.get('/:id', isValidId, async (req, res, next) => {
//   try {
       
//     const {id} = req.params
//     const result = await contacts.getContactById(id)
//     if(!result){
//         throw HttpError(404, 'Not Found ID')
//     }
//     res.json(result)
// }
//  catch (error) {
//     next(error)
// }
// })

// router.post('/', async (req, res, next) => {
//   try {
//     const {error} = addSchema.validate(req.body)
//     if (error) {
//         throw HttpError(400, error.message)
//     }
//     const result = await contacts.addContact(req.body)
//     res.status(201).json(result)
//    } 
//    catch (error) {
//     next(error)
//   }
// })

// router.delete('/:id', async (req, res, next) => {
//   try {
//     const {id} = req.params
//     const result = await contacts.removeContact(id)
//     res.status(201).json(result)
//    } 
//    catch (error) {
//     next(error)
//    }
// })

// router.put('/:id', async (req, res, next) => {
//   try {
//     const {error} = addSchema.validate(req.body)
//     if (error) {
//         throw HttpError(400, error.message)
//     }
//     const {id} = req.params
//     const result = await contacts.updateContact(id, req.body)

//     if(!result){
//         throw HttpError(404, 'Not Found')
//     }

//    } 
//    catch (error) {
//     next(error)
//    }
// })

module.exports = router
