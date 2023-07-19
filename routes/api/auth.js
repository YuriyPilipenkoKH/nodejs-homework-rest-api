const express = require('express')
const validateBody = require('../../middlewares/validateBody');
const { schemas } = require('../../models/user');
const controllers = require("../../controllers/auth")
const router = express.Router()


router.post("/register", validateBody(schemas.registerSchema), controllers.register )

module.exports = router