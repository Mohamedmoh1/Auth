const express = require('express')
const { SignUp, SignIn } = require('../Controllers/User')
const { validationRegister, Validation, validationLogin } = require('../Middlewares/Validation')
const { isAuth } = require('../Middlewares/isAuth')


const userRouter = express.Router()

userRouter.post('/SignUp',validationRegister,Validation,SignUp)


userRouter.post('/SignIn',validationLogin,Validation,SignIn)

userRouter.get('/ConnectedUser',isAuth,(req,res)=>{res.send(req.user)})

module.exports = userRouter
