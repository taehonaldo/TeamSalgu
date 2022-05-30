const chatService = require('../services/chatService')

exports.getChatGroups = async(req, res) => {
    let groups = await chatService.getChatGroups(req.params.groupId);
    return res.status(200).json(groups);
}

exports.getChatGroupMembers = async(req, res) => {
    await chatService.getChatGroups(req.body.group_id)
}

exports.createChatGroup = async(req, res) => {
    try {
        var groupDto = req.body.group;
        var userId = req.body.userId;

        var ok = await chatService.createChatGroup(userId, groupDto);
        return res.status(200).json({ status: 200, message: ok });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.updateChatGroup = async(req, res) => {
    
}

exports.leaveChatGroup = async(req, res) => {
    
}


exports.enterChatGroup = async(req, res) => {
    
}
