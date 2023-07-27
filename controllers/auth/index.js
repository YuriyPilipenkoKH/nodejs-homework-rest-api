const { ctrl } = require("../../helpers");
const getCurrent = require("./getCurrent");
const login = require("./login");
const logout = require("./logout");
const register = require("./register");
const updateAvatar = require("./updateAvatar");
const updateSubscription = require("./updateSubscription");



module.exports = {
    getCurrent: ctrl(getCurrent),
    login: ctrl(login),
    register: ctrl(register),
    logout: ctrl(logout),
    updateSubscription: ctrl(updateSubscription),
    updateAvatar: ctrl(updateAvatar),
   
}