const express = require("express")
const router = express.Router()
const userControlller = require("./../controllers.js/userController")

router.post("/login", userControlller.login)

module.exports = router