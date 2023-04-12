var express = require('express');
var router = express.Router();
const controller = require('../controllers/controller')
const auth = require('../midleware/auth')

router.post("/login", controller.login)
router.get("/get-all-teacher",auth,controller.getAllTeacher)

module.exports = router;
