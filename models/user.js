const Joi = require('joi')
const {Schema, model} = require("mongoose");
const { handleMongooseError } = require('../helpers');

const dataEmail = /^([A-Za-z0-9_-]+\.)*[A-Za-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/   // Nick@mail.com



const userSchema = new Schema({

    name: {
        type: String,
        required: [true, 'set name  for contact'],
    },
    email: {
        type: String,
        match: dataEmail,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        minlength: 6,
        required: true,
    },

}, {versionKey: false, timestamps: true})

userSchema.post('save', handleMongooseError)

const registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().pattern(dataEmail).required(),
    password: Joi.string().min(6).required(),
 
  })

const loginSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().pattern(dataEmail).required(),
    password: Joi.string().min(6).required(),
 
  })

  const schemas = {
    registerSchema ,
    loginSchema,
}

const User = model('user', userSchema)

module.exports = {
    User,
    schemas,

  }
