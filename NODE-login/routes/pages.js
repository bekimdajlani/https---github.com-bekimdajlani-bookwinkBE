const express = require('express');
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

router.get('/changePassword',(req, res) => {
    res.render('changePassword');
});

router.get('/forgotpassword', (req, res) => {
    res.render('forgotpassword');
});

router.get('/resetpassword',(req, res) => {
    const token = req.query.token;
    if (!token) {
        return res.status(400).send('Bad request');
    }
    res.render('resetpassword');
});

router.get('/logout',(req, res) => {
    res.render('login');
});

module.exports = router;