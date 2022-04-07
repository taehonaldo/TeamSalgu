const router = require('express').Router();
const groupController = require('../controllers/groupController')

router.post('/', groupController.getGroupList);
router.post('/sign-up', groupController.signUp);
router.post('/unlike', groupController.updateGroupUnlike);

module.exports = router;