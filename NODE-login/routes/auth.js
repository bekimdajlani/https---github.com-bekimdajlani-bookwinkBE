const express = require('express');
const authController = require('../controllers/auth');
// const loginController = require('../controllers/login')
const router = express.Router();
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

router.post('/register', csrfProtection,authController.register);
router.post('/login', csrfProtection,authController.login);
router.get('/logout', csrfProtection,authController.logout);
router.post('/changePassword',csrfProtection,authController.changePassword);
router.post('/forgotpassword',csrfProtection,authController.forgotpassword);
router.post('/resetpassword',csrfProtection,authController.resetpassword);




module.exports = router;