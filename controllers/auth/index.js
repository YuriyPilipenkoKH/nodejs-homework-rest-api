const { ctrl } = require("../../helpers");
const { register, login } = require("./auth");


module.exports ={

    register: ctrl(register),
    login: ctrl(login),

}
