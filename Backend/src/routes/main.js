const router = require('express').Router();
const testController = require('../controllers/test_controller')

router.get('/', testController.getTestData);

module.exports = router;