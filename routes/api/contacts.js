const express = require('express')
const controllers = require("../../controllers/contacts")
const { isValidId } = require('../../middlewares');
const { addSchema, updateFavoriteSchema } = require('../../models/contact');
const validateBody = require('../../middlewares/validateBody');



 
const router = express.Router()

router.get("/", controllers.listContacts);

router.get("/:contactId", isValidId, controllers.getContactById)

router.post("/", validateBody(addSchema),  controllers.addContact)

router.delete("/:contactId", isValidId,  controllers.removeContact)

router.put("/:contactId", validateBody(addSchema), isValidId, controllers.updateContact)

router.patch(
    "/:contactId/favorite",
    isValidId,
    validateBody(updateFavoriteSchema),
    controllers.updateFavorite)




module.exports = router
