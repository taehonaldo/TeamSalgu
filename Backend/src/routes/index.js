const express = require('express');
const router = express.Router();

const main = require('./main.js');
const groups = require('./group_router');

router.use('/main', main);

router.use('/groups', groups);

module.exports = router;