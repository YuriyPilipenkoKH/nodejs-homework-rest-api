const nodemailer = require('nodemailer')
require('dotenv').config() 

const {META_PASSWORD} = process.env

const nodemailerConfig = {
    host: 'smtp.meta.ua',
    port: 465, // 25  2525
    secure: true,
    auth: {
        user: 'yurik2061@meta.ua',
        pass: META_PASSWORD,
    }

}
const transport = nodemailer.createTransport(nodemailerConfig)

const nodeMailer = async(data) => {
    const email = {...data, from: 'yurik2061@meta.ua'}
    await transport.sendMail(email)
    return true
}

module.exports = nodeMailer


