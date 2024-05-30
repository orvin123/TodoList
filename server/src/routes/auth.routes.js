const { Router } = require('express');

//* Controllers
const {login} = require('../controllers/auth.controller');
const { log } = require('@angular-devkit/build-angular/src/builders/ssr-dev-server');

const router = Router()
console.log('auth');
//* Routes
router.post('/login', login)

module.exports = router;