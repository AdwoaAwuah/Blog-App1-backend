const router = require ('express').Router()
const signup = require('../controllers/auth')
const login = require('../controllers/auth')

routes.post("/api/auth/signup", signup)


routes.get("/api/auth/login", login)

module.exports=routes;