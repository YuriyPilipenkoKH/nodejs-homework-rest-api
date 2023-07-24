const express = require('express')
const controllers = require("../../controllers/contacts")
const { isValidId, validateBody, authenticate} = require('../../middlewares');
const {  schemas } = require('../../models/contact');


const contactsRouter = express.Router()

contactsRouter.get("/", authenticate, controllers.listContacts);

contactsRouter.get("/:id", authenticate, isValidId, controllers.getContactById)

contactsRouter.post("/", authenticate, validateBody(schemas.addSchema),  controllers.addContact)

contactsRouter.delete("/:id", authenticate, isValidId,  controllers.removeContact)

contactsRouter.put("/:id", authenticate, validateBody(schemas.addSchema), isValidId, controllers.updateContact)

contactsRouter.patch(
    "/:id/favorite",
    authenticate,
    isValidId,
    validateBody(schemas.updateFavoriteSchema),
    controllers.updateFavorite)



module.exports = contactsRouter
