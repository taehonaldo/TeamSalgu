const express = require('express');
const router = express.Router();

const groups = require('./groupRouter');
const chat = require('./chatRouter')

router.use('/groups', groups);
router.use('/chat', chat);

module.exports = router;