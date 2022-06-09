const express = require('express');
const router = express.Router();

const groups = require('./groupRouter');
const chat = require('./chatRouter');
const user = require('./userRouter')

router.use('/groups', groups);
router.use('/chat', chat);
router.use('/user', user)

module.exports = router;