const chatService = require('../services/chatService')

exports.getChatGroups = async(req, res) => {
    let groups = await chatService.getChatGroups(req.body.userId);
    return res.status(200).json(groups);
}

exports.getChatGroupMembers = async(req, res) => {
    let members = await chatService.getChatGroupMembers(req.params.groupId)
    return res.status(200).json(members);
}

exports.createChatGroup = async(req, res) => {
    try {
        var groupDto = req.body.group;
        var userId = req.body.userId;

        var group_id = await chatService.createChatGroup(userId, groupDto);
        return res.status(200).json({ status: 200, groupId: group_id });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.updateChatGroup = async(req, res) => {
    try {
        var groupDto = req.body.group;
        var userId = req.body.userId;
        var group_id = await chatService.updateChatGroup(userId, groupDto);
        return res.status(200).json({ status: 200, groupId: group_id });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.leaveChatGroup = async(req, res) => {
    try {
        var userId = req.body.userId;
        var groupId = req.body.groupId;
        await chatService.leaveChatGroup(userId, groupId);
        return res.status(200).json({ status: 200, groupId: groupId, message: "leave chat group successfully" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}


exports.enterChatGroup = async(req, res) => {
    try {
        var userId = req.body.userId;
        var groupId = req.body.groupId;
        await chatService.enterChatGroup(userId, groupId);
        return res.status(200).json({ status: 200, groupId: groupId, message: "enter chat group successfully" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
