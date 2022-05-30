const router = require('express').Router();
const chatController = require('../controllers/chatController')

router.get('/', chatController.getChatGroups);
router.get('/:groupId/members', chatController.getChatGroupMembers);

router.post('/', chatController.createChatGroup);
router.post('/update', chatController.updateChatGroup);

router.post('/enter', chatController.enterChatGroup);
router.post('/leave', chatController.leaveChatGroup);

module.exports = router;