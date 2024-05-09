const { Router } = require('express');
//const { check } = require('express-validator');
const path = require('path')

// * Controllers
const { home } = require('../controllers/web.controller');

const router = Router();
 
router.get('/home',home);

module.exports = router;