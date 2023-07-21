const express = require('express')
const validateBody = require('../../middlewares/validateBody');
const { schemas } = require('../../models/user');
const controllers = require("../../controllers/auth")
const router = express.Router()

// signup
router.post("/register", validateBody(schemas.registerSchema), controllers.register )
// signin
router.post("/login", validateBody(schemas.loginSchema), controllers.login)



module.exports = router