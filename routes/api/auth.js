const express = require('express')
const { schemas } = require('../../models/user');
const controllers = require("../../controllers/auth");
const { validateBody, authenticate, upload } = require('../../middlewares');


const authRouter = express.Router()

// signup
authRouter.post("/register",  validateBody(schemas.registerSchema), controllers.register )

authRouter.get("/verify/:verificationCode",  controllers.verifyEmail)

authRouter.post("/verify", validateBody(schemas.emailSchema), controllers.resendVerifyEmail)

// signin
authRouter.post("/login", validateBody(schemas.loginSchema), controllers.login)

authRouter.get("/current", authenticate,  controllers.getCurrent);

authRouter.post("/logout", authenticate,  controllers.logout);

authRouter.patch("/subscription",  authenticate,
    validateBody(schemas.subscriptionSchema), controllers.updateSubscription)

authRouter.patch("/avatars", authenticate, upload.single("avatar"), controllers.updateAvatar);

module.exports = authRouter