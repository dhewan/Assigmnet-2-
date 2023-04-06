var express = require('express');
var router = express.Router();
const controller = require('../controllers/controller')

router.post("/login", controller.login)
router.get("/get-all-teacher",controller.getAllTeacher)

module.exports = router;
