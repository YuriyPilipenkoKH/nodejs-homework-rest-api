const { ctrl } = require("../../helpers");
const getCurrent = require("./getCurrent");
const login = require("./login");
const logout = require("./logout");
const register = require("./register");
const resendVerifyEmail = require("./resendVerifyEmail");
const updateAvatar = require("./updateAvatar");
const updateSubscription = require("./updateSubscription");
const verifyEmail = require("./verifyEmail");



module.exports = {
    getCurrent: ctrl(getCurrent),
    login: ctrl(login),
    register: ctrl(register),
    logout: ctrl(logout),
    updateSubscription: ctrl(updateSubscription),
    updateAvatar: ctrl(updateAvatar),
    verifyEmail: ctrl(verifyEmail),
    resendVerifyEmail: ctrl(resendVerifyEmail),
    
}