const express = require('express')
const controllers = require("../../controllers/users");
const { isValidId } = require('../../middlewares');


const usersRouter = express.Router()

usersRouter.get("/", controllers.listUsers );

usersRouter.get("/:id", isValidId, controllers.getUserById)

usersRouter.get("/name/:name",  controllers.getUserByName)

usersRouter.get("/email/:email",  controllers.getUserByEmail)

usersRouter.delete("/:id", isValidId,  controllers.removeUser)

module.exports = usersRouter