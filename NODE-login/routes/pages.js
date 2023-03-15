const express = require('express');
const router = express.Router();
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/register', csrfProtection ,(req, res) => {
    res.render('register',{csfrToken : req.csrfToken()});
});

router.get('/login', csrfProtection ,(req, res) => {
    res.render('login',{csfrToken : req.csrfToken()});
    
});

router.get('/changePassword', csrfProtection ,(req, res) => {
    res.render('changePassword',{csfrToken : req.csrfToken()});
});

router.get('/forgotpassword',csrfProtection , (req, res) => {
    res.render('forgotpassword',{csfrToken : req.csrfToken()});
});

router.get('/resetpassword', csrfProtection ,(req, res) => {
    const token = req.query.token;
    if (!token) {
        return res.status(400).send('Bad request');
    }
    res.render('resetpassword',{csfrToken : req.csrfToken()});
});

router.get('/logout', csrfProtection ,(req, res) => {
    res.render('login',{csfrToken : req.csrfToken()});
});

module.exports = router;