const { ctrl } = require("../../helpers");
const register = require("./auth");

module.exports ={

    register: ctrl(register),
}
