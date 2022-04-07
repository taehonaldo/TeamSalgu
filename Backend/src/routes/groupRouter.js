const router = require('express').Router();
const groupController = require('../controllers/group_controller')

router.post('/', groupController.getGroupList);
router.post('/sign-up', groupController);
router.post('/unlike', groupController);

module.exports = router;