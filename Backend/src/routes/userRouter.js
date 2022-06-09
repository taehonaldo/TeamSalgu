const router = require('express').Router();
const userController = require('../controllers/userController')

router.post('/login', userController.login);
router.post('/sign-up', userController.signUp);
router.post('/find-user', userController.findUsername);

module.exports = router;