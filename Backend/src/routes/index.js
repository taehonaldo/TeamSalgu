const express = require('express');
const router = express.Router();

const groups = require('./groupRouter');

router.use('/groups', groups);

module.exports = router;