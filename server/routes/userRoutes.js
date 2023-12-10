const express = require('express');
const {register,login,createJob} = require('./../controllers/userControllers');
const requireAuth = require('./../middleware/requierAuth');

const router = express.Router();

router.post('/register',register);
router.post('/login',login);
router.post('/create',requireAuth,createJob)

module.exports = router;