const router = require('express').Router();
const chatController = require('../controllers/chatController')

router.get('/', chatController.getChatGroups);
router.get('/members', chatController.getChatGroupMembers);
router.post('/', chatController.createChatGroup)

module.exports = router;