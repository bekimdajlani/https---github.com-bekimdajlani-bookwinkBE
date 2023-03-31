const express = require('express');
const { authenticateToken} = require('../controllers/auth');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/register',(req, res) => {
    res.render('register');
});

router.get('/login',(req, res) => {
    res.render('login');
    
});

router.get('/changePassword',authenticateToken,(req, res) => {
    res.render('changePassword');
});

router.get('/forgotpassword', authenticateToken, (req, res) => {
    res.render('forgotpassword');
});

router.get('/resetpassword',authenticateToken,(req, res) => {
    res.render('resetpassword');
});

router.get('/logout',authenticateToken,(req, res) => {
    res.render('login');
});

module.exports = router;