const { ctrl } = require("../../helpers");
const getUserByEmail = require("./getUserByEmail");
const getUserById = require("./getUserById");
const getUserByName = require("./getUserByName");
const listUsers = require("./listUsers");
const removeUser = require("./removeUser");




module.exports = {
    listUsers: ctrl(listUsers),
    getUserById: ctrl(getUserById),
    getUserByName: ctrl(getUserByName),
    getUserByEmail: ctrl(getUserByEmail),
    removeUser: ctrl(removeUser),
}