const express = require('express');
const router = express.Router();
const controller = require('./main.controller');
const multer = require('multer');
const Path = require('path');

/*그냥 통암기*/


//localhost:3000/대분류/중분류
router.use('/',controller.main); //dd는 main
router.get('/list',controller.list) // 



module.exports = router;