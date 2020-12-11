const express = require('express')
const mongoose = require('mongoose')

//Routers
const authenticationRoutes = require('./routes/auth')

const app=express()
app.use(express.json())

//Mongoose connection

app.use(authenticationRoutes)


app.listen(8000 ,{})